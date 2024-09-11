import React from "react";
import Image from "next/image";
import Link from "next/link";

const TkdTeams = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="py-8 text-4xl uppercase tracking-wider">Taekwondo Teams</h1>
      {/* Flex container to align images in a row */}
      <div className="flex space-x-8">
        {/* First Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="taekwondo/monkey">
            <Image
              src="/sectionOne.png"
              alt="Taekwondo Monkey"
              width={250}
              height={150}
            />
          </Link>
        </div>

        {/* Second Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="taekwondo/crane">
            <Image
              src="/sectionTwo.png"
              alt="Taekwondo Crane"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Third Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="taekwondo/mantis">
            <Image
              src="/sectionThree.png"
              alt="Taekwondo Mantis"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Fourth Image */}
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="taekwondo/tigress">
            <Image
              src="/sectionFour.png"
              alt="Taekwondo Tigress"
              width={250}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TkdTeams;
