"use client";

import { useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import Link from "next/link";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function Home() {
  const [loading, setLoading] = useState(false);

  interface CheckoutSessionParams {
    priceId?: string;
    amount?: number;
    mode: string;
    quantity?: number;
    name?: string;
  }
  const priceOptions = [
    { id: "price_1PyKEqFOfT7vP5Js0IuqLgtD", amount: "$25 / year" },
    { id: "price_1PyKIdFOfT7vP5JsOCOjJkuF", amount: "$50 / year" },
    { id: "price_1PyKIdFOfT7vP5JsQ904JuYB", amount: "$100 / year" },
    { id: "price_1PyKIdFOfT7vP5Js85eXwncR", amount: "$250 / year" },
    { id: "price_1PyKIdFOfT7vP5JsozDJCwvK", amount: "$500 / year" },
    { id: "price_1PyKIdFOfT7vP5JsiBVW1eTs", amount: "$1000 / year" },
  ];

  const handleCheckout = async (
    mode: "subscription" | "payment",
    oneTimeAmount?: number,
    selectedPriceId?: string
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
      const amountInCents = oneTimeAmount * 100;
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
    <div className="flex flex-col items-center  min-h-screen bg-blue text-black">
      
      <div className="flex flex-col justify-content flex-start w-full items-start p-5">
        <div className="flex flex-row items-center justify-content flex-start w-full p-5 mr-4">

        <h1 className="text-4xl font-bold text-white">Support CRFC</h1>
        <Link href="/impactpage">
          <Image
            className="transform hover:scale-110 transition-transform duration-300 ml-3"
            src="/lightbulb.png"
            width={50}
            height={50}
            alt="Learn more"
          />
        </Link>
        </div>
            <p className="text-sm text-gray-400 mt-2 px-5">Click the light bulb if you want to local impact.</p>
            <p></p>
          
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center mt-8">
          <div className="p-8 mt-6 w-full max-w-lg">
            <h3 className="text-center text-xl font-semibold mb-4 text-white">
              One-Time Support
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[20, 40, 60, 80, 100, 120].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleCheckout("payment", amount)}
                  disabled={loading}
                  className={`w-full py-3 rounded-lg text-lg font-medium ${
                    loading
                      ? "bg-blue cursor-not-allowed"
                      : "bg-darkBlue hover:bg-blue-700 hover:translate-x-1 hover:translate-y-1 text-white transition duration-300"
                  }`}
                >
                  {loading ? "Loading..." : `$${amount}`}
                </button>
              ))}
            </div>
            <button
              className="flex items-center justify-center w-full py-3 rounded-lg text-lg font-medium bg-red hover:bg-red-700 text-white transition duration-300 mt-4"
              disabled
            >
              <IoMdHeart className="mr-2" />
              DONATE NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">

        <div className="p-8 mt-6 w-full max-w-lg">
          <h3 className="text-center text-xl font-semibold mb-4 text-white">
            Subscription Support
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {priceOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  handleCheckout("subscription", undefined, option.id);
                }}
                disabled={loading}
                className={`w-full py-3 rounded-lg text-lg font-medium px-2 ${
                  loading
                    ? "bg-blue cursor-not-allowed"
                    : "bg-darkBlue hover:bg-blue-700 hover:translate-x-1 hover:translate-y-1 text-white transition duration-300"
                }`}
              >
                {loading ? "Loading..." : option.amount}
              </button>
            ))}
          </div>
          <button
            className="flex items-center justify-center w-full py-3 rounded-lg text-lg font-medium bg-red hover:bg-red-700 text-white transition duration-300 mt-4"
            disabled
          >
            <IoMdHeart className="mr-2" />
            SUBSCRIBE
          </button>
        </div>
        </div>
        <div className="flex justify-center mt-8 w-full">
          <Image
            src={'/donateBox.svg'}
            alt="donate box"
            layout="responsive"
            height={1000}
            width={800}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-white col-span-3">
          <p>
            © 2024 Crossroad Family Center. All rights reserved. Registered
            501(c)(3) Corporation.
          </p>
        </footer>
      </div>
      
    </div>
  );
}
