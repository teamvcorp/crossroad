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

  interface CheckoutSessionParams {
    priceId?: string;
    amount?: number;
    mode: string;
    quantity?: number;
  }
  // Price IDs from Stripe (replace with actual Price IDs)
  const priceOptions = [
    { id: "price_1PyKEqFOfT7vP5Js0IuqLgtD", amount: "$25 / year" },
    { id: "price_1PyKIdFOfT7vP5JsOCOjJkuF", amount: "$50 / year" },
    { id: "price_1PyKIdFOfT7vP5JsQ904JuYB", amount: "$100 / year" },
    { id: "price_1PyKIdFOfT7vP5Js85eXwncR", amount: "$250 / year" },
    { id: "price_1PyKIdFOfT7vP5JsozDJCwvK", amount: "$500 / year" },
    { id: "price_1PyKIdFOfT7vP5JsiBVW1eTs", amount: "$1000 / year" },
  ];

  const handleCheckout = async (
    mode: "subscription" | "payment"
  ): Promise<void> => {
    setLoading(true);
    const stripe: Stripe | null = await stripePromise;

    let sessionParams: CheckoutSessionParams = {
      mode,
    };

    if (mode === "subscription" && selectedPriceId) {
      sessionParams = {
        ...sessionParams,
        priceId: selectedPriceId,
        quantity: 1,
      };
    } else if (mode === "payment" && oneTimeAmount) {
      const amountInCents: number = parseFloat(oneTimeAmount) * 100; // Convert to cents
      sessionParams = {
        ...sessionParams,
        amount: amountInCents,
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
    <div className="flex flex-col justify-center items-center bg-[url('/supportBkgd.jpg')] bg-cover bg-center h-screen pt-[300px] sm:pt-[90]">
      <div className="flex items-center">
        <h1>If you're asking yourself why, click here</h1>
        <Link href="/impactpage">
          <Image
            className="transform hover:scale-110 transition-transform duration-300"
            src="/lightbulb.png"
            width={50}
            height={50}
            alt="Just an idea"
          />
        </Link>
      </div>
      <button
        onClick={() => setSubscriptionOpen((prev) => !prev)}
        disabled={loading}
        className={`w-1/4 bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-medium ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "hover:bg-blue-700 transition duration-300"
        }`}
      >
        {subscriptionOpen ? "Close 5 Year Plan" : "Open 5 Year Plan"}
      </button>
      {subscriptionOpen && (
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
            onClick={() => handleCheckout("subscription")}
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
      )}
      <button
        onClick={() => setOneTime((prev) => !prev)}
        disabled={loading}
        className={`w-1/4 bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-medium mt-4 ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "hover:bg-blue-700 transition duration-300"
        }`}
      >
        {oneTime ? "Close One Time Support" : "Open One Time Support"}
      </button>
      {oneTime && (
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Enter Your Support Amount
          </h1>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Enter Amount"
              value={oneTimeAmount}
              onChange={(e) => setOneTimeAmount(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            onClick={() => handleCheckout("payment")}
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
      )}
    </div>
  );
}
