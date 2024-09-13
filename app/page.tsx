"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Teams from "./components/team-members";
import Header from "./components/header";

// Load the Cinzel font with custom weights or styles


export default function Home() {
  // Example for rotating images in the hero section
  const images = [
    { src: "/image1.webp", alt: "Image 1" },
    { src: "/image2.webp", alt: "Image 2" },
    { src: "/image3.webp", alt: "Image 3" },
    { src: "/image4.webp", alt: "Image 3" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Timer for changing hero image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
<Header />
      <div className="flex flex-1 pt-[95px]">
        {/* Sidebar */}
        <aside className="bg-neutral-200 w-64 p-4 hidden md:block">
          <nav className="space-y-4">
            <Link
              href="/supportpage"
              className="block hover:bg-neutral-300 p-2 rounded"
            >
              CRFC-Support Page
            </Link>
            <Link
              href="/teamsignup"
              className="block hover:bg-neutral-300 p-2 rounded"
            >
              Team Signup Page
            </Link>
            <Link
              href="/partnerspage"
              className="block hover:bg-neutral-300 p-2 rounded"
            >
              Partners Page
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-96 bg-winter-500">
            <div className="relative w-full h-full">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                layout="fill"
                priority
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center">
                <h2 className="text-4xl text-white font-bold">
                  Crossroad Family Center
                </h2>
              </div>
            </div>
          </section>

          {/* Page Content */}
          <section
            id="content"
            className="flex flex-col items-center justify-center p-8 bg-gray-50"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">
              CRFC Team Stats
            </h2>

            {/* Logos and titles section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
              <Teams />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white p-4">
        <div className="container mx-auto text-center">
          © 2024 Crossroad Family Center, All rights reserved.
        </div>
      </footer>
    </div>
  );
}
