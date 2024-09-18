"use client";

import { useState, FormEvent } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

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
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedPriceId, setSelectedPriceId] = useState<string>(""); // Track selected price ID
  const [quantity, setQuantity] = useState<number>(1); // Track quantity

  // Price IDs from Stripe (replace with actual Price IDs)
  const priceOptions: PriceOption[] = [
    {
      id: "price_1PyQBLFOfT7vP5JsqgcWtKP3",
      amount: "$5.00",
      teamname: "Team Monkey",
    },
    {
      id: "price_1PyQBLFOfT7vP5Js4vJdYHWe",
      amount: "$5.00",
      teamname: "Team Crane",
    },
    {
      id: "price_1PyQBLFOfT7vP5JstySzZe4U",
      amount: "$5.00",
      teamname: "Team Tigress",
    },
    {
      id: "price_1PyQBLFOfT7vP5JsOoVLib1g",
      amount: "$5.00",
      teamname: "Team Mantis",
    },
    {
      id: "price_1PzpA5FOfT7vP5JsCwqM7bJ6",
      amount: "$5.00",
      teamname: "Team Tornado",
    },
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
      body: JSON.stringify({
        priceId: selectedPriceId,
        quantity,
        mode: "payment",
      }), // Pass quantity
    });

    const { sessionId }: { sessionId: string } = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({ sessionId });

    if (result?.error) {
      console.error(result.error.message); // Safely access the error message
    }

    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const content = formData.get("content");
    const author = formData.get("author");

    try {
      // Send the form data to the server-side API route
      const response = await fetch("/api/add-blog-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, author }),
      });

      if (response.ok) {
        toast.success('Your message has been recieved!')
        console.log("Blog post added:");
      } else {
        toast.error('Your message was lost, please try again.')
        console.error("Failed to add blog post");
      }
    } catch (error) {
      console.error("Error adding blog post:", error);
    } finally {
    router.push('/impactpage')
      setLoading(false);
    }
  };

  return (
    <>
      {/* First Form for Stripe Checkout */}
      <div className="flex flex-col justify-center items-center bg-gray-50 pt-[90px]">
        <h1 className="text-green-500 mb-4">
          Amount Raised: <span>$0</span>
        </h1>
        <div className="bg-white shadow-md rounded-lg p-8 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Send some thanks!
          </h1>

          <div className="space-y-4 mb-4">
            <select
              className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedPriceId}
              onChange={(e) => setSelectedPriceId(e.target.value)}
            >
              <option value="" className="uppercase text-xs">
                Choose the team to thank!
              </option>
              {priceOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.teamname} - {option.amount}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 mb-2">
              Select how many times!
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
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

      {/* Second Form for Blog Post */}
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Send a Thank You Note!
          </h1>

          {/* Toggle Button for Collapsing Form */}
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full"
          >
            {isFormOpen ? "Hide Form" : "Send a note to team!"}
          </button>

          {/* Collapsible Form */}
          {isFormOpen && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700"
                >
                  Thank You Message
                </label>
                <textarea
                  name="content"
                  id="content"
                  rows={4}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700"
                >
                  Team
                </label>
                <select
                  name="author"
                  id="author"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Select a team</option>
                  <option value="mantis">Team Mantis</option>
                  <option value="tigress">Team Tigress</option>
                  <option value="monkey">Team Monkey</option>
                  <option value="crane">Team Crane</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {loading ? "Adding..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
