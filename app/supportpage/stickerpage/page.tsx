'use client';

import { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [selectedPriceId, setSelectedPriceId] = useState({ id: '', amount: '' });

  interface CheckoutSessionParams {
    priceId?: string;
    amount?: number;
    mode: string;
    quantity?: number;
    name?: string;
  }

  // Price IDs from Stripe (replace with actual Price IDs)
  const priceOptions = [
    { id: 'prod_RDvsdZMKFpO8Gr', amount: 'Education' },
    { id: 'prod_RDvuzkK2g9Q3dk', amount: 'Healthcare' },
    { id: 'prod_RDvtiehcgpFAXu', amount: 'Housing' },
  ];

  const handleCheckout = async (mode: 'payment'): Promise<void> => {
    setLoading(true);
    const stripe: Stripe | null = await stripePromise;

    let sessionParams: CheckoutSessionParams = {
      mode,
    };

    if (mode === 'payment') {
      sessionParams = {
        ...sessionParams,
        priceId: selectedPriceId?.id,
        amount: 1000,
        name: selectedPriceId?.amount,
      };
    } else {
      alert('Please provide all necessary details for the transaction.');
      setLoading(false);
      return;
    }

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sessionParams),
    });

    const sessionData = await response.json();

    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: sessionData.sessionId,
      });
      if (result?.error) {
        console.error('Checkout error:', result.error.message);
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center bg-blue text-white">
      {/* Hero Section */}
      <div className="relative w-full">
       
        <div className="inset-0 bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center pt-4">
            Voices for Change
          </h1>
          <p className="text-xl text-gray-200 mt-4 text-center max-w-2xl">
            Help us make a difference by choosing where we should focus our
            efforts: Education, Healthcare, or Housing. Your voice matters!
          </p>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-white text-gray-800 shadow-lg rounded-lg p-8 mt-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Make an Impact
        </h2>
        <p className="text-center text-gray-600 mb-4">
          For just $10, you can support a priority area of your choice.
        </p>
        <div className="space-y-4 mb-6">
          {priceOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
            >
              <span className="text-lg font-medium">{option.amount}</span>
              <input
                type="radio"
                name="price"
                value={option.id}
                className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400"
                onChange={() =>
                  setSelectedPriceId({ id: option.id, amount: option.amount })
                }
              />
            </label>
          ))}
        </div>
        <button
          onClick={() => handleCheckout('payment')}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-lg font-medium ${
            loading
              ? 'bg-blue cursor-not-allowed'
              : 'bg-blue hover:bg-blue text-white transition duration-300'
          }`}
        >
          {loading ? 'Processing...' : 'Donate Now'}
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm">
        <p>© 2024 Crossroad Family Center. All rights reserved.</p>
        <p className="mt-1">Registered 501(c)(3) Corporation</p>
      </footer>
    </div>
  );
}
