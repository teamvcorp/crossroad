'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-700 bg-opacity-90 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
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
              width={60}
              height={60}
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <h1 className="hidden sm:block text-2xl font-bold text-white ml-4">
            Crossroad Family Center
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/impactpage"
                className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Reach Out
              </Link>
            </li>
          </ul>
        </nav>

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
