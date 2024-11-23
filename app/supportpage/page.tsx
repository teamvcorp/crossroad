"use client";

import { useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import Link from "next/link";
import Image from "next/image";

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [subscriptionOpen, setSubscriptionOpen] = useState(false);
  const [oneTime, setOneTime] = useState(false);
  const [oneTimeAmount, setOneTimeAmount] = useState("");
  const [selectedPriceId, setSelectedPriceId] = useState("");

  const priceOptions = [
    { id: "price_1PyKEqFOfT7vP5Js0IuqLgtD", amount: "$25 / year" },
    { id: "price_1PyKIdFOfT7vP5JsOCOjJkuF", amount: "$50 / year" },
    { id: "price_1PyKIdFOfT7vP5JsQ904JuYB", amount: "$100 / year" },
    { id: "price_1PyKIdFOfT7vP5Js85eXwncR", amount: "$250 / year" },
    { id: "price_1PyKIdFOfT7vP5JsozDJCwvK", amount: "$500 / year" },
    { id: "price_1PyKIdFOfT7vP5JsiBVW1eTs", amount: "$1000 / year" },
  ];

  const handleCheckout = async (mode: "subscription" | "payment") => {
    setLoading(true);
    const stripe: Stripe | null = await stripePromise;

    let sessionParams = {
      mode,
    };

    if (mode === "subscription" && selectedPriceId) {
      sessionParams = {
        ...sessionParams,
        priceId: selectedPriceId,
        quantity: 1,
      };
    } else if (mode === "payment" && oneTimeAmount) {
      const amountInCents = parseFloat(oneTimeAmount) * 100;
      sessionParams = {
        ...sessionParams,
        amount: amountInCents,
        name: "One-Time Support",
      };
    } else {
      alert("Please provide all necessary details for the transaction.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sessionParams),
    });

    const sessionData = await response.json();

    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: sessionData.sessionId,
      });
      if (result?.error) {
        console.error("Checkout error:", result.error.message);
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center bg-blue-600 min-h-screen text-white pt-[90px]">
      {/* Header Section */}
      <div className="flex items-center mt-8">
        <h1 className="text-2xl font-bold mr-4">
          Why should you donate?{" "}
          <span className="underline">Click here!</span>
        </h1>
        <Link href="/impactpage">
          <Image
            className="transform hover:scale-110 transition-transform duration-300"
            src="/lightbulb.png"
            width={50}
            height={50}
            alt="Learn more"
          />
        </Link>
      </div>

      {/* Subscription Section */}
      <button
        onClick={() => setSubscriptionOpen((prev) => !prev)}
        disabled={loading}
        className={`mt-6 w-1/4 bg-white text-blue-600 py-3 px-4 rounded-lg text-lg font-medium ${
          loading
            ? "bg-gray-300 cursor-not-allowed"
            : "hover:bg-blue-50 transition duration-300"
        }`}
      >
        {subscriptionOpen ? "Close 5-Year Plan" : "Open 5-Year Plan"}
      </button>
      {subscriptionOpen && (
        <div className="bg-white text-gray-800 shadow-md rounded-lg p-8 mt-6 w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
            Select. Finalize. Share.
          </h1>
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
                  onChange={() => setSelectedPriceId(option.id)}
                />
              </label>
            ))}
          </div>
          <button
            onClick={() => handleCheckout("subscription")}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg font-medium ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
            }`}
          >
            {loading ? "Loading..." : "Send My Support!"}
          </button>
        </div>
      )}

      {/* One-Time Support Section */}
      <button
        onClick={() => setOneTime((prev) => !prev)}
        disabled={loading}
        className={`mt-4 w-1/4 bg-white text-blue-600 py-3 px-4 rounded-lg text-lg font-medium ${
          loading
            ? "bg-gray-300 cursor-not-allowed"
            : "hover:bg-blue-50 transition duration-300"
        }`}
      >
        {oneTime ? "Close One-Time Support" : "Open One-Time Support"}
      </button>
      {oneTime && (
        <div className="bg-white text-gray-800 shadow-md rounded-lg p-8 mt-6 w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
            Enter Your Support Amount
          </h1>
          <div className="space-y-4 mb-6">
            <input
              type="number"
              placeholder="Enter Amount (USD)"
              value={oneTimeAmount}
              onChange={(e) => setOneTimeAmount(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full text-lg"
            />
          </div>
          <button
            onClick={() => handleCheckout("payment")}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg font-medium ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
            }`}
          >
            {loading ? "Loading..." : "Send My Support!"}
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-white">
        <p>
          © 2024 Crossroad Family Center. All rights reserved. Registered
          501(c)(3) Corporation.
        </p>
      </footer>
    </div>
  );
}
