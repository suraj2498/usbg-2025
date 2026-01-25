'use client';

import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface PaymentWrapperProps {
  email: string;
  amount: number;
  metadata?: Record<string, string>;
}

export function PaymentWrapper({ email, amount, metadata }: PaymentWrapperProps) {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        setError('');

        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

        const response = await fetch(`${API_URL}/api/payment/create-payment-intent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount,
            email,
            metadata,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to create payment intent');
        }

        setClientSecret(data.clientSecret);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Payment intent creation error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, [email, amount, metadata]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 bg-gradient-to-br from-primary/5 via-white to-primary-light/10">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-medium">Setting up secure payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 bg-gradient-to-br from-primary/5 via-white to-primary-light/10">
        <div className="max-w-md w-full p-8 bg-red-50 border-2 border-red-200 rounded-2xl">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-semibold text-red-800 mb-4 text-center">
            Payment Setup Error
          </h3>
          <p className="text-red-600 mb-6 text-center">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return null;
  }

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '16px',
      spacingUnit: '6px',
      borderRadius: '12px',
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary-light/10 py-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Complete Your Payment
          </h1>
          <p className="text-xl text-gray-600">
            Secure checkout powered by Stripe
          </p>
        </div>

        {/* Payment Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Amount Banner */}
          <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-8 text-white text-center">
            <p className="text-sm opacity-90 mb-2">Total Amount</p>
            <p className="text-5xl font-bold">${(amount / 100).toFixed(2)}</p>
          </div>

          {/* Form */}
          <div className="p-8 lg:p-12">
            <Elements
              stripe={stripePromise}
              options={{ clientSecret, appearance }}
            >
              <CheckoutForm email={email} amount={amount} />
            </Elements>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 py-6 text-center">
            <p className="text-sm text-gray-600">
              🔒 Secured by Stripe • SSL Encrypted • PCI Compliant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
