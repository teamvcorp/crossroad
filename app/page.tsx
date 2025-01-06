"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { z } from "zod";
import router from "next/router";

export default function Home() {
  const [email, setEmail] = useState({ email: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        router.push("/");
      } else {
        toast.error("Error sending message. Try again");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          formattedErrors[err.path[0] as string] = err.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-600 text-white">
   

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="relative w-1000 h-500">
            <Image
              src="/hero.jpg"
              alt="Hero Image"
              layout="contain"
              width='2000'
              height='1000'
              className="object-top"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center bg-blue p-2 rounded-md"
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-md text-black"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green hover:offset-2 rounded-md transform transition-transform duration-100 hover:scale-105"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
