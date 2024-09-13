import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamSignup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="py-8 text-4xl uppercase tracking-wider">Team Selection</h1>
      {/* Flex container to align images in a row */}
      <div className="flex items-center space-x-10">
        {/* First Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="/">
            <Image
              src="/teamLogo.png"
              alt="Taekwondo Team Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Second Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="/">
            <Image
              src="/yotaeLogo.png"
              alt="Yotae Logo"
              width={200}
              height={150}
            />
          </Link>
        </div>

        {/* Third Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="/">
            <Image
              src="/dance.png"
              alt="Dance Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Fourth Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="/">
            <Image
              src="/gymnastics.png"
              alt="Gymnastics Logo"
              width={250}
              height={150}
            />
          </Link>
        </div>
      </div>


    </div>
  );
};

export default teamSignup;
