import React from "react";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <header className="text-center">
        <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl max-w-2xl mx-auto">
          We’re working hard to bring something amazing to the Crossroad Family Center. Stay tuned for updates!
        </p>
      </header>

      {/* Image Section */}
      <div className="mt-12">
        <Image
          src="/coming-soon.jpg"
          alt="Coming Soon"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Countdown Section */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-semibold mb-6">Stay Tuned!</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Our team is working diligently to bring you exciting programs and facilities. Follow us on social media for the latest news.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <footer className="mt-16">
        <a
          href="/"
          className="px-8 py-4 bg-yellow-400 text-blue-800 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300 text-xl font-semibold"
        >
          Return to Homepage
        </a>
      </footer>
    </div>
  );
};

export default ComingSoon;
