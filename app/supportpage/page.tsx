"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [selectedPriceId, setSelectedPriceId] = useState(""); // Track selected price ID

  // Price IDs from Stripe (replace with actual Price IDs)
  const priceOptions = [
    { id: "price_1PyKEqFOfT7vP5Js0IuqLgtD", amount: "$25 / year" },
    { id: "price_1PyKIdFOfT7vP5JsOCOjJkuF", amount: "$50 / year" },
    { id: "price_1PyKIdFOfT7vP5JsQ904JuYB", amount: "$100 / year" },
    { id: "price_1PyKIdFOfT7vP5Js85eXwncR", amount: "$250 / year" },
    { id: "price_1PyKIdFOfT7vP5JsozDJCwvK", amount: "$500 / year" },
    { id: "price_1PyKIdFOfT7vP5JsiBVW1eTs", amount: "$1000 / year" },
  ];

  const handleCheckout = async () => {
    if (!selectedPriceId) {
      alert("Please select a donation amount.");
      return;
    }

    setLoading(true);
    const stripe = await stripePromise;

    // Call API to create the Checkout Session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId: selectedPriceId,
        mode: "subscription",
        quantity: 1,
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({ sessionId });

    if (result?.error) {
      console.error(result.error.message); // Safely access the error message
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/supportBkgd.jpg')] bg-cover bg-center h-screen pt-[300px] sm:pt-[90]">
      <div>
        <h1 className="">If your asking yourself why, click here</h1>
        <Link href="/impactpage">Light Bulb</Link>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Select. Finalize. Share
        </h1>

        <div className="space-y-4 mb-8">
          {priceOptions.map((option) => (
            <label
              key={option.id}
              className="text-lg text-gray-700 flex items-center justify-between border-b border-gray-300 py-4 w-full cursor-pointer hover:bg-green-50 hover:border-green-400 transition-all duration-300"
            >
              <span>{option.amount}</span>
              <input
                type="radio"
                name="price"
                value={option.id}
                className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                onChange={() => setSelectedPriceId(option.id)}
              />
            </label>
          ))}
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
          {loading ? "Loading..." : "Send My Support !"}
        </button>
      </div>
    </div>
  );
}
