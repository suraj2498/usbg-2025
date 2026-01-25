'use client';

import { useState, FormEvent } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@monorepo/ui';

interface CheckoutFormProps {
  email: string;
  amount: number;
}

export function CheckoutForm({ email, amount }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage('');

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
        receipt_email: email,
      },
    });

    if (error) {
      setMessage(error.message || 'An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Order Summary */}
      <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Business Plan Generation</span>
            <span className="font-semibold text-gray-900">${(amount / 100).toFixed(2)}</span>
          </div>
          <div className="border-t border-primary/10 pt-3 flex justify-between items-center">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-primary">${(amount / 100).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Email Confirmation */}
      <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-6 border-2 border-primary/20">
        <label className="block text-base font-semibold text-gray-900 mb-3">
          📧 Email Address (Receipt Delivery)
        </label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full px-5 py-4 text-base border-2 border-gray-300 rounded-xl bg-white/50 text-gray-700 cursor-not-allowed font-medium"
        />
        <p className="mt-2 text-sm text-gray-600">✓ Your receipt will be sent to this email</p>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💳 Payment Method</h3>
        <div className="p-6 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-gray-50 to-white">
          <PaymentElement
            options={{
              layout: {
                type: 'tabs',
                defaultCollapsed: false,
              },
              paymentMethodOrder: ['card', 'klarna', 'cashapp', 'affirm'],
            }}
          />
        </div>
      </div>

      {/* Error Message */}
      {message && (
        <div className="p-5 bg-red-50 border-2 border-red-200 rounded-2xl">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-base text-red-800 font-semibold mb-1">Payment Error</p>
              <p className="text-sm text-red-600">{message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="space-y-4">
        <Button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-primary hover:bg-primary-dark text-white text-xl py-5 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-3">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              Processing Payment...
            </span>
          ) : (
            <span>🔒 Pay ${(amount / 100).toFixed(2)} Securely</span>
          )}
        </Button>

        {/* Security Note */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Secured by Stripe • Your payment information is encrypted</p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2 font-semibold">100% Secure Payment</p>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <span>🛡️ Buyer Protection</span>
          <span>•</span>
          <span>🔐 SSL Encrypted</span>
          <span>•</span>
          <span>✓ PCI Compliant</span>
        </div>
      </div>
    </form>
  );
}
