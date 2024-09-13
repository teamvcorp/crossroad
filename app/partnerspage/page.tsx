import React from "react";
import Image from "next/image";
import Link from "next/link";

const PartnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="py-8 text-4xl uppercase tracking-wider">
        Current Supporting Partners
      </h1>
      {/* Flex container to align images in a row */}
      <div className="flex space-x-8">
        {/* First Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="https://www.walmart.com/" target="">
            <Image
              src="/wally.jpg"
              alt="Taekwondo Monkey"
              width={250}
              height={150}
            />
          </Link>
        </div>

        {/* Second Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300 flex items-center">
          <Link href="https://powersolutionsinc.net/" target="_blank">
            <Image
              src="/power.png"
              alt="Power Solutions"
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300 flex items-center">
          <Link href="https://www.taekwondostormlake.com/" target="_blank">
            <Image
              src="/teamLogo.png"
              alt="Taekwondo of Stormlake"
              width={250}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
