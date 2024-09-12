'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe.js with the publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate amount
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    setLoading(true);

    const stripe = await stripePromise;

    // Call backend API to create payment intent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount) * 100 }), // Convert to cents
    });


    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      lineItems: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Custom Amount Payment',
            },
            unit_amount: parseFloat(amount) * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`, // Redirect on successful payment
      cancelUrl: `${window.location.origin}/cancel`,   // Redirect if payment is canceled
    });

    if (result?.error) {
      console.error(result.error.message); // Handle any errors
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Make a Payment</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-lg text-gray-700 mb-2">Enter Amount (USD)</label>
          <input
            type="number"
            min="1"
            step="0.01"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-6"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-medium ${
              loading
                ? 'bg-blue-300 cursor-not-allowed'
                : 'hover:bg-blue-700 transition duration-300'
            }`}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
