'use client';
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/app/components/image-gallery";

const TkdTeams = () => {

  const router = useRouter();

  const handleOnClick = () => {
    router.push("/teamsignup/taekwondo");
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="py-6 text-4xl uppercase tracking-wider">Taekwondo</h1>
      <div className="">
        <ImageGallery />
      </div>
      <div className="text-center w-[1500px] mt-12 p-6 bg-white shadow-md rounded-lg mb-8">
        Our school offers Taekwondo for all ages, focusing on discipline,
        leadership, and self-mastery through Taekwondo principles. Our
        comprehensive program builds confidence, practical skills, and the
        ability to rise to any challenge. Whether you're looking to compete at
        high levels or achieve personal growth, our school is the place for your
        family. Rooted in a rich tradition of poomsae, self-defense, and
        sparring, our program evolves with modern methods. For kids, we provide
        a fun, engaging curriculum that fosters self-acceptance and continuous
        self-improvement. Using high educational standards, we empower diverse
        learners to excel on their journey to becoming black belt practitioners.
      </div>
      <button 
        onClick={handleOnClick} 
        className="text-white bg-blue hover:bg-blue hover: hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out px-4 py-2 rounded mb-10"      >
        Enroll Now
      </button>
      <h1 className="py-8 text-4xl uppercase tracking-wider">
        Taekwondo Teams
      </h1>
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
        <div className="overflow-visible transform hover:scale-110 transition-transform duration-300">
          <Link href="taekwondo/tornado">
            <Image
              src="/tornado.png"
              alt="Taekwondo Tornado"
              width={150}
              height={150}
            />
          </Link>
        </div>
      </div>
      <Link
        href="taekwondo/saythankyou"
        className="text-white bg-blue hover:bg-blue hover: hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out px-4 py-2 rounded my-10"
      >
        Give Support
      </Link>
    </div>
  );
};

export default TkdTeams;
