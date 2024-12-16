import React from "react";
import Image from "next/image";

// Define the type for a team member
interface TeamMember {
  name: string;
  src: string;
  desc: string;
  hobbies: string;
  rank: string;
  timeOnMats: number;
}

// Sample data for team members
const teamMembers: TeamMember[] = [
  {
    name: "Sebastian Trejo",
    src: "/sebastian.png",
    desc: "I want make money in the future",
    hobbies: "Martial Arts, Fortnite,art, badassness",
    rank: "Green Belt",
    timeOnMats: 96, // hours
  },
  {
    name: "Lily Von Der Becke",
    src: "/lily.png",
    desc: "i am a brown haired girl with brown eyes and i am a light blue belt that sings and that fights my best (i do not like fighting)",
    hobbies: "Singing, writing, fortnite, tkd",
    rank: "Light-Blue Belt",
    timeOnMats: 64, // hours
  },
  {
    name: "Jazlyn ",
    src: "/lily.png",
    desc: "I am...",
    hobbies: "singing, writing, fortnite,tkd",
    rank: "White Belt",
    timeOnMats: 64, // hours
  },
 
  // Add more team members here
];




interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex flex-row w-full h-20">
        <Image src={member.src} alt={member.name} width={100} height={142} className="rounded-full" />
        <div className="flex flex-col ml-6">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-gray-600">{member.desc}</p>
        </div>
      </div>
      <p className="mt-2"><strong>Rank:</strong> {member.rank}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Time on Mats:</strong> {member.timeOnMats} hours</p>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Main content area */}
      <div className="flex-1 bg-gray-100">
        <h1 className="p-2 text-2xl">Team Monkey</h1>
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
