"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Cinzel } from "next/font/google";
import Navbar from "./Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
      {/* Logo Section */}
      <div
        className={cn(
        `flex flex-row items-center tracking-widest ${cinzel.className}`
        )}
      >
        <Link href="/">
        <Image
          src="/crLogoWeb.png"
          alt="Crossroads logo"
          width={150}
          height={150}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 transform transition-transform duration-300 hover:scale-110"
        />
        </Link>
        <div className="flex flex-col">

        <h1 className="hidden sm:block text-4xl text-blue font-bold ml-4">
        Crossroad Family Center
        </h1>
        <p className="hidden sm:block text-xl text-gray-600 italic ml-4">
          United in purpose, building a stronger you, a better us.
        </p>
        </div>
      </div>

      {/* Desktop Navigation */}

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
        className="text-white text-3xl focus:outline-none hover:text-yellow-400"
        aria-label="Open Menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
        ☰
        </button>
      </div>
      </div>
      <div className="justify">
      <Navbar />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
      <div className="bg-blue-700 bg-opacity-95 md:hidden">
        <ul className="flex flex-col items-center space-y-4 py-4">
        <li>
          <Link
          href="/"
          className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          >
          Home
          </Link>
        </li>
        <li>
          <Link
          href="/about"
          className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          >
          About
          </Link>
        </li>
        <li>
          <Link
          href="/contact"
          className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          >
          Contact
          </Link>
        </li>
        <li>
          <Link
          href="/impactpage"
          className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          >
          Impact
          </Link>
        </li>
        <li>
          <Link
          href="/help"
          className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          >
          Reach Out
          </Link>
        </li>
        </ul>
      </div>
      )}
    </header>
    
  );
};

export default Header;
