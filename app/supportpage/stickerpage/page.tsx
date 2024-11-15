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
  const [selectedPriceId, setSelectedPriceId] = useState({id: '', amount: ''});

  interface CheckoutSessionParams {
    priceId?: string;
    amount?: number;
    mode: string;
    quantity?: number;
    name?: string;
  }
  // Price IDs from Stripe (replace with actual Price IDs)
  const priceOptions = [
    { id: "prod_RDvsdZMKFpO8Gr", amount: "Education" },
    { id: "prod_RDvuzkK2g9Q3dk", amount: "Healthcare" },
    { id: "prod_RDvtiehcgpFAXu", amount: "Housing" },

  ];

  const handleCheckout = async (
    mode: "payment"
  ): Promise<void> => {
    setLoading(true);
    const stripe: Stripe | null = await stripePromise;

    let sessionParams: CheckoutSessionParams = {
      mode,
    };

  if (mode === "payment") {
      sessionParams = {
        ...sessionParams,
        priceId: selectedPriceId?.id,
        amount: 1000,
        name: selectedPriceId?.amount,
        
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
    <div className="flex flex-col justify-start gap-10 items-center bg-[url('/supportBkgd.jpg')] bg-cover bg-center h-screen pt-[90px]">
      <div className="flex items-center mt-20">
        <h1 className='text-xl mr-2'>Why should you donate? CLICK HERE</h1>
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
     
     
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Your priorty matters, chose education, healthcare, or housing. 
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
                  onChange={() => setSelectedPriceId({id: option.id, amount: option.amount})}
                />
              </label>
            ))}
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
      
    
     
     
        
      
    </div>
  );
}
