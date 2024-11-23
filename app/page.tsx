"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  const images = [
    { src: "/image1.webp", alt: "Image 1" },
    { src: "/image2.webp", alt: "Image 2" },
    { src: "/image3.webp", alt: "Image 3" },
    { src: "/image4.webp", alt: "Image 4" },
    { src: "/coders.webp", alt: "Ninja Code" },
    { src: "/gymnastics.webp", alt: "Gymnastics" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col bg-blue-600 text-white">
      {/* Header */}
      <Header />

      <main className="flex-1 pt-[95px]">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-700 to-blue-500">
          <div className="relative w-full h-full">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              layout="fill"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-center drop-shadow-lg">
                Welcome to Crossroad Family Center
              </h1>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-12 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Explore Our Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                href: "/supportpage",
                title: "Support Us",
                bgColor: "bg-green-500 hover:bg-green-600",
              },
              {
                href: "/teamsignup",
                title: "Join a Team",
                bgColor: "bg-yellow-500 hover:bg-yellow-600",
              },
              {
                href: "/partnerspage",
                title: "Partners Page",
                bgColor: "bg-red-500 hover:bg-red-600",
              },
              {
                href: "/impactpage",
                title: "Community Impact",
                bgColor: "bg-blue-500 hover:bg-blue-600",
              },
              {
                href: "/help",
                title: "Reach Out",
                bgColor: "bg-teal-500 hover:bg-teal-600",
              },
            ].map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`block p-6 text-white text-center rounded-lg shadow-md transition duration-300 ${link.bgColor}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 py-6">
        <div className="container mx-auto text-center text-sm">
          <p>
            © 2024 Crossroad Family Center. All rights reserved. Registered
            501(c)(3) Corporation.
          </p>
        </div>
      </footer>
    </div>
  );
}
