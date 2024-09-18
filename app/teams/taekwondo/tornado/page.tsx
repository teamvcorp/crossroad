import React from "react";
import Image from "next/image";
import BackButton from "@/app/components/backbutton";

// Define the type for a team member
interface TeamMember {
  name: string;
  src: string;
  desc: string;
  hobbies: string;
  rank: string;
  timeOnMats: number;
  totalPeopleHelped: number;
  dollarsRaised: number;
}

// Sample data for team members
const teamMembers: TeamMember[] = [
  {
    name: "Little Dude",
    src: "/sebastian.png",
    desc: "Great Student",
    hobbies: "Martial Arts, Learning",
    rank: "White Belt",
    timeOnMats: 0, // hours
    totalPeopleHelped: 0,
    dollarsRaised: 0,
  },
  // Add more team members here
];

const Sidebar: React.FC = () => {
  // Example dynamic progress for the progress bar (time spent on mats)
  const totalMatsTime = teamMembers.reduce((acc, member) => acc + member.timeOnMats, 0);
  const totalDollars = teamMembers.reduce((acc, member) => acc + member.dollarsRaised, 0);
  const totalPeople = teamMembers.reduce((acc, member) => acc + member.totalPeopleHelped, 0);


  const progressPercentage = (totalMatsTime / (350*teamMembers.length)) * 100; // Example: 500 is total expected hours
  const goalProgress = (totalDollars / 6000) * 100; // Example: 500 is total expected hours
  const peopleHelpedProgress = (totalPeople / 100) * 100; // Example: 500 is total expected hours

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Progress Overview</h2>

      <div className="mb-4">
        <p className="mb-2">Time on Mats</p>
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{totalMatsTime} / {350*teamMembers.length} hours</p>
      </div>
      <div className="mb-4">
        <p className="mb-2">Thank-Yous Received:</p>
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${goalProgress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{totalDollars} / 6000 Dollars</p>
      </div>
      <div className="mb-4">
        <p className="mb-2">People Helped</p>
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${peopleHelpedProgress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{totalPeople} / 100 People</p>
      </div>

      {/* Add more progress bars here */}
      <BackButton label="Go back" />
    </div>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="w-full h-40 relative">
        <Image src={member.src} alt={member.name} width={100} height={142} className="rounded-md" />
      </div>
      <h3 className="text-xl font-bold mt-4">{member.name}</h3>
      <p className="text-gray-600">{member.desc}</p>
      <p className="mt-2"><strong>Rank:</strong> {member.rank}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Time on Mats:</strong> {member.timeOnMats} hours</p>
      <p><strong>Total People Helped:</strong> {member.totalPeopleHelped}</p>
      <p><strong>Dollars Raised:</strong> ${member.dollarsRaised}</p>
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
    <div className="flex pt-[90px]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 bg-gray-100">
      <h1 className="p-2 text-2xl">Team Crane</h1>

        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
