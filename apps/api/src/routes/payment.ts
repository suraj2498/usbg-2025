import { Router } from 'express';
import type { Request, Response } from 'express';
import { stripe } from '../services/stripe';
import { z } from 'zod';

const router = Router();

// Validation schema for payment intent creation
const createPaymentIntentSchema = z.object({
  amount: z.number().positive(),
  email: z.string().email(),
  metadata: z.record(z.string()).optional(),
});

// Create payment intent
router.post('/create-payment-intent', async (req: Request, res: Response) => {
  try {
    const { amount, email, metadata } = createPaymentIntentSchema.parse(req.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: 'usd',
      receipt_email: email,
      metadata: {
        email,
        ...metadata,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to create payment intent',
    });
  }
});

export default router;
