import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamSignup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-600 text-white pt-[95px]">
      {/* Header Section */}
      <header className="py-12 bg-blue-700">
        <h1 className="text-5xl font-bold text-center drop-shadow-lg">
          Select Your Team
        </h1>
      </header>

      {/* Team Selection Section */}
      <main className="flex flex-1 items-center justify-center py-12 px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl">
          {[
            {
              href: "teamsignup/taekwondo",
              src: "/teamLogo.png",
              alt: "Taekwondo Team Logo",
              width: 150,
              height: 150,
              label: "Taekwondo",
            },
            {
              href: "teamsignup/yotae",
              src: "/yotaeLogo.png",
              alt: "Yotae Logo",
              width: 200,
              height: 150,
              label: "Yotae",
            },
            {
              href: "teamsignup/dance",
              src: "/dance.png",
              alt: "Dance Logo",
              width: 150,
              height: 150,
              label: "Dance",
            },
            {
              href: "teamsignup/gymnastics",
              src: "/gymnastics.png",
              alt: "Gymnastics Logo",
              width: 250,
              height: 150,
              label: "Gymnastics",
            },
            {
              href: "teamsignup/ninjacode",
              src: "/ninjaLogo.png",
              alt: "Ninja Code Logo",
              width: 200,
              height: 150,
              label: "Ninja Code",
            },
            {
              href: "teamsignup/homeschoolplus",
              src: "/ninjaLogo.png",
              alt: "Homeschool plus Logo",
              width: 200,
              height: 150,
              label: "Homeschool Plus",
            },
          ].map((team) => (
            <div
              key={team.alt}
              className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
            >
              <Link href={team.href}>
                <Image
                  src={team.src}
                  alt={team.alt}
                  width={team.width}
                  height={team.height}
                />
              </Link>
              <p className="text-xl font-semibold mt-4 w-40 text-center">
                {team.label}
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

export default TeamSignup;
