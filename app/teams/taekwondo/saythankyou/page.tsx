"use client";

import { useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

// Define the type for price options
interface PriceOption {
  id: string;
  amount: string;
  teamname: string;
}

// Initialize Stripe
const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPriceId, setSelectedPriceId] = useState<string>(""); // Track selected price ID
  const [quantity, setQuantity] = useState<number>(1); // Track quantity

  // Price IDs from Stripe (replace with actual Price IDs)
  const priceOptions: PriceOption[] = [
    { id: "price_1PyQBLFOfT7vP5JsqgcWtKP3", amount: "$5.00", teamname: 'Team Monkey' },
    { id: "price_1PyQBLFOfT7vP5Js4vJdYHWe", amount: "$5.00", teamname: 'Team Crane' },
    { id: "price_1PyQBLFOfT7vP5JstySzZe4U", amount: "$5.00", teamname: 'Team Tigress' },
    { id: "price_1PyQBLFOfT7vP5JsOoVLib1g", amount: "$5.00", teamname: 'Team Mantis' },
   
  ];

  const handleCheckout = async (): Promise<void> => {
    if (!selectedPriceId) {
      alert("Please select a donation amount.");
      return;
    }

    if (quantity < 1) {
      alert("Please select a quantity of at least 1.");
      return;
    }

    setLoading(true);
    const stripe = await stripePromise;

    // Call API to create the Checkout Session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: selectedPriceId, quantity, mode: 'payment' }), // Pass quantity
    });

    const { sessionId }: { sessionId: string } = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({ sessionId });

    if (result?.error) {
      console.error(result.error.message); // Safely access the error message
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <h1 className="text-green-500">
        Amount Raised: <span>$0</span>
      </h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg uppercase">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Send some thanks!
        </h1>

        <div className="space-y-4 mb-4">
          <select
            className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedPriceId}
            onChange={(e) => setSelectedPriceId(e.target.value)}
          >
            <option value="" className="uppercase text-xs">Choose the team to thank!</option>
            {priceOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.teamname} - {option.amount}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 mb-2">Select how many times!</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-medium ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "hover:bg-blue-700 transition duration-300"
          }`}
        >
          {loading ? "Loading..." : "Send My Support!"}
        </button>
      </div>
    </div>
  );
}
