'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Mail, FileText, Headphones } from 'lucide-react';
import { Button } from '@monorepo/ui';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  useEffect(() => {
    const pi = searchParams.get('payment_intent');
    setPaymentIntent(pi);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary-light/10 flex items-center justify-center p-4">
      {/* Success Container */}
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12 text-center text-white">
          <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-20 h-20 text-white" strokeWidth={3} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            Payment Successful!
          </h1>
          <p className="text-2xl opacity-90">
            🎉 Your order has been confirmed
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12">
          
          {/* Confirmation Message */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 mb-10 text-center">
            <p className="text-xl text-green-800 font-semibold mb-2">
              ✅ Payment Processed Successfully
            </p>
            <p className="text-lg text-green-700">
              Thank you for your purchase! We've received your payment.
            </p>
          </div>

          {/* Payment Reference */}
          {paymentIntent && (
            <div className="mb-10 p-8 bg-gradient-to-br from-primary/5 to-primary-light/10 border-2 border-primary/20 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Payment Reference</h3>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Transaction ID</p>
                <p className="text-base font-mono text-gray-800 break-all">
                  {paymentIntent}
                </p>
              </div>
            </div>
          )}

          {/* What's Next Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What Happens Next?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  1. Email Confirmation
                </h4>
                <p className="text-gray-600">
                  Check your inbox for a detailed receipt and order confirmation
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  2. Plan Preparation
                </h4>
                <p className="text-gray-600">
                  Our team will start preparing your business plan immediately
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  3. Expert Support
                </h4>
                <p className="text-gray-600">
                  We'll contact you if we need any additional information
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-10 p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
              ⏱️ Estimated Timeline
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Payment Received</p>
                  <p className="text-sm text-gray-600">Completed just now</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Business Plan Generation</p>
                  <p className="text-sm text-gray-600">Starts within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Plan Delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={() => (window.location.href = '/')}
              className="flex-1 bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold rounded-xl"
            >
              Return to Home
            </Button>
            <Button
              onClick={() => window.print()}
              variant="outline"
              className="flex-1 border-2 border-primary text-primary hover:bg-primary/10 py-4 text-lg font-semibold rounded-xl"
            >
              Print Receipt
            </Button>
          </div>

          {/* Support Contact */}
          {/* Support Contact */}
          {
            /*
             *
          <div className="text-center pt-8 border-t-2 border-gray-200">
            <p className="text-gray-600 mb-3">
              Have questions about your order?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:support@yourdomain.com"
                className="text-primary hover:text-primary-dark font-semibold underline"
              >
                Email Support
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="tel:+1234567890"
                className="text-primary hover:text-primary-dark font-semibold underline"
              >
                Call Us
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="/help"
                className="text-primary hover:text-primary-dark font-semibold underline"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>

             * */
          }

        </div>
        {/* Footer Trust Badges */}
        <div className="bg-gray-50 border-t-2 border-gray-200 px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              🔒 <span>SSL Secured</span>
            </span>
            <span className="flex items-center gap-2">
              ✓ <span>PCI Compliant</span>
            </span>
            <span className="flex items-center gap-2">
              🛡️ <span>100% Secure</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
