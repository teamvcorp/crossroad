import React from "react";
import Image from "next/image";
import Link from "next/link";

const PartnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-600 text-white pt-[95px]">
      {/* Header Section */}
      <header className="py-12 bg-blue-700">
        <h1 className="text-5xl font-bold text-center drop-shadow-lg">
          Current Supporting Partners
        </h1>
      </header>

      {/* Partners Section */}
      <main className="flex flex-1 items-center justify-center py-12 px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl">
          {[
            {
              href: "https://www.walmart.com/",
              src: "/wally.jpg",
              alt: "Walmart",
            },
            {
              href: "https://powersolutionsinc.net/",
              src: "/power.png",
              alt: "Power Solutions",
            },
            {
              href: "https://www.taekwondostormlake.com/",
              src: "/teamLogo.png",
              alt: "Taekwondo of Storm Lake",
            },
          ].map((partner) => (
            <div
              key={partner.alt}
              className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
            >
              <Link href={partner.href} target="_blank">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={250}
                  height={150}
                  className="rounded-md shadow-lg"
                />
              </Link>
              <p className="text-xl font-semibold mt-4 w-60 text-center">
                {partner.alt}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-blue-800">
        <div className="container mx-auto text-center text-sm">
          <p>
            © 2024 Crossroad Family Center. All rights reserved. Registered
            501(c)(3) Corporation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PartnersPage;
