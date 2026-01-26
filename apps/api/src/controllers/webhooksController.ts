import { Request, Response } from 'express';
import Stripe from 'stripe';
import { prisma } from '../lib/prisma';
import { getDomainConfig } from '../utils/utils';
import { EmailService } from '../services/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripePaymentCompleted = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;

  let event: Stripe.Event;
  try {
    // Verify signature
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    console.log('📦 FULL EVENT DATA:');
    console.log(JSON.stringify(event, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    console.log('✅ Signature verified!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📋 EVENT DETAILS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Event ID:', event.id);
    console.log('Event Type:', event.type);
    console.log('Created:', new Date(event.created * 1000).toISOString());
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Log specific data based on event type
    if (event.type === 'payment_intent.succeeded') {
      const data = event.data.object;

      console.log('💰 PAYMENT DATA:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('Session ID:', data.id);
      console.log('Customer Email:', data.metadata?.email);
      console.log('Amount Total:', data.amount, '(cents)');
      console.log('Currency:', data.currency);
      console.log('Payment Status:', data.status);

      const latestRecord = await prisma.businessPlan.findFirst({
        where: {
          // @ts-ignore
          email: data.metadata?.email?.toLowerCase(),
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      console.log('Latest Record', latestRecord);
      const domainConfig = getDomainConfig(latestRecord?.origin ?? null);
      console.log({ domainConfig })
      const emailService = new EmailService();
      const htmlBody = emailService.generateBusinessPlanEmail(latestRecord);

      const submissionEmailRecipients = process.env.DEFAULT_SUBMISSION_EMAIL_RECIPIENTS!.split(',');
      console.log('Sending email to: ', domainConfig?.toEmail ?? submissionEmailRecipients)
      await emailService.sendEmail({
        to: domainConfig?.toEmail ?? submissionEmailRecipients,
        subject: `New Business Plan Generation Request - ${latestRecord?.origin}`,
        html: htmlBody,
        from: domainConfig?.fromEmail ?? process.env.AWS_SES_DEFAULT_FROM_EMAIL,
      });
    }
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    return res.json({ received: true });
  } catch (err: any) {
    console.error('Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
};
