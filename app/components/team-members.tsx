import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamsArray = [
  {
    name: "Taekwondo",
    src: "/teamLogo.png",
    url: "teams/taekwondo",
  },
  {
    name: "Yotae",
    src: "/yotaeLogo.png",
    url: "teams/yotae",
  },
  {
    name: "Ninja Code",
    src: "/ninjaLogo.png",
    url: "teams/ninjacode",
  },
 
];

const Teams = () => {
  return (
    <>
      {teamsArray.map((team, idx) => (
        <Link href={team.url} key={idx}>
          <div>
            <Image
              src={team.src}
              alt="Logo 1"
              width="75"
              height="75"
              className="transform transition duration-300 hover:scale-110 mx-auto"
            />
            <p className="mt-2 text-lg font-medium text-neutral-700">
              {team.name}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Teams;
