import React from "react";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Taekwondo",
    description: "Develop discipline and respect.",
    color: "bg-yellow-400",
    href: "teamsignup/taekwondo",
  },
  {
    title: "Yotae",
    description: "Yoga and Taekwondo fusion.",
    color: "bg-green-400",
    href: "teamsignup/yotae",
  },
  {
    title: "Gymnastics",
    description: "Express yourself creatively.",
    color: "bg-blue-400",
    href: "teamsignup/gymnastics",
  },
  {
    title: "Behavioral Health",
    description: "Support emotional well-being.",
    color: "bg-purple-400",
    href: "teamsignup/health",
  },
  {
    title: "Dance",
    description: "Dance your heart out.",
    color: "bg-red-400",
    href: "teamsignup/dance",
  },
  {
    title: "Homeschool +",
    description: "K-12 partnership with leadership.",
    color: "bg-orange-400",
    href: "teamsignup/homeschoolplus",
  },
];

const Page = () => {
  return (
    <div className="pt-[90px] bg-blue-600 text-white">
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About Crossroad Family Center
        </h1>
        <p className="text-xl max-w-4xl mx-auto">
          Where sports, arts, and community come together to create a place for
          everyone.
        </p>
      </section>

      {/* CRFC Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16 px-8 bg-blue-600">
        <div>
          <h2 className="text-4xl font-semibold mb-6">CRFC Introduction</h2>
          <p className="text-lg leading-relaxed">
            "Founded in 2000 as a Taekwondo school, our community center has
            transformed into a comprehensive family development hub. Today, we
            host a diverse range of athletic programs and boast a
            state-of-the-art facility. Our center includes Homeschool Plus, a
            tailored program for students who find traditional schooling
            challenging, incorporating leadership and discipline across all
            activities. We also offer innovative coding and housing
            initiatives."
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/center-overview.jpg"
            alt="Community Center Overview"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-8 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Programs for Everyone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.href}
              className={`${program.color} text-blue-800 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-lg">{program.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16 px-8 bg-blue-600">
        <div className="flex items-center justify-center">
          <Image
            src="/community.jpg"
            alt="Community Involvement"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Join Us on a Journey</h2>
          <p className="text-lg leading-relaxed">
            Crossroad Family Center exists because of the dedication and support
            of our community. From the earliest stages of planning to the grand
            opening, local residents have been involved every step of the way.
            Volunteers, donors, and leaders have all contributed their time,
            resources, and passion to make this center a reality.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-8 bg-blue-700 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-8">
          We began this journey two decades ago with a dream of bringing people
          together through sports and arts. Along the way, we’ve learned
          valuable lessons about what it means to foster community and provide
          meaningful opportunities for growth.
        </p>
        <Image
          src="/journey.jpg"
          alt="Our Journey"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-blue-600 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Us</h2>
        <p className="text-lg max-w-4xl mx-auto mb-8">
          Crossroad Family Center is your community. Whether you're interested
          in Taekwondo, Yotae, dance, housing, life coaching, or mental health
          support, we have something for everyone. Join us in building a future
          filled with strength, creativity, and unity.
        </p>
        <a
          href="#"
          className="px-8 py-4 bg-yellow-400 text-blue-800 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300 text-xl font-semibold"
        >
          Join Us Today
        </a>
      </section>
    </div>
  );
};

export default Page;
