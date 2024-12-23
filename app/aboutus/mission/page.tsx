import React from "react";
import Image from "next/image";

const MissionPage: React.FC = () => {
return (
    <div className="w-4/5 mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 id="mission" className="text-2xl font-bold mb-4">
                Our Mission
            </h1>
            <p className="text-gray-700">
                At Crossroad Family Center, our mission is to empower families and
                individuals through inclusive programs that nurture the mind, body,
                and spirit. By integrating sports, arts, education, and behavioral
                health, we provide a welcoming environment where every step taken is a
                step toward personal growth, community connection, and lasting change.
                Together, we build a stronger, healthier, and more unified community
                for generations to come.
            </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-6 flex items-center">
            <Image
                src="/public/vision.jpg"
                alt="Vision"
                width={400}
                height={200}
                className="w-1/2 h-64 object-cover rounded-lg mb-4"
            />
            <div className="ml-4 w-1/2">
                <h2 className="text-xl font-semibold mb-2">
                    Vision: United in the Fight for Change
                </h2>
                <p className="text-gray-700 mb-4">
                    At Crossroad, we are fully aware of the immense challenges our world
                    faces and the obstacles that must be overcome to achieve our mission.
                    Yet, we believe these realities can be conquered through unity and a
                    shared commitment to progress. Guided by our slogan, "Fight for
                    Change," we embrace the power of collective effort to reimagine
                    education, housing, health, and community support. Together, we are
                    building a future defined by resilience, purpose, and transformation.
                </p>
            </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-6 flex items-center">
            <Image
                src="/public/education.jpg"
                alt="Education"
                width={400}
                height={200}
                className="w-1/2 h-64 object-cover rounded-lg mb-4"
            />
            <div className="ml-4 w-1/2">
                <h2 className="text-xl font-semibold mb-2">
                    Education: A Strong start in life
                </h2>
                <p className="text-gray-700 mb-4">
                    At Crossroad, we are reimagining education with an initiative designed
                    to evolve alongside our students’ needs. Beginning with our Home
                    School Plus program, we go beyond standardized testing to embrace a
                    future of limitless possibilities. Our focus on critical thinking,
                    skill development, and problem-solving equips students with the tools
                    they need to lead in an ever-changing world. Our journey doesn’t stop
                    there. As we grow, we will transition into an independent
                    Christian-based school that aligns with the methodologies introduced
                    in Home School Plus. This next step integrates leadership training,
                    ABA methodologies, and a faith-centered approach to cultivate genuine
                    leaders. Tailored learning experiences allow students to thrive in a
                    dynamic, student-focused environment that inspires curiosity and
                    fosters personal growth. Join us as we redefine education—one learner
                    at a time—and pave the way for tomorrow’s leaders to think boldly, act
                    decisively, and make a meaningful difference.
                </p>
            </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-6 flex items-center">
            <Image
                src="/public/housing.jpg"
                alt="Housing"
                width={400}
                height={200}
                className="w-1/2 h-64 object-cover rounded-lg mb-4"
            />
            <div className="ml-4 w-1/2">
                <h2 className="text-xl font-semibold mb-2">
                    Effortonomy: Empowering Lives Through Secure Housing
                </h2>
                <p className="text-gray-700 mb-4">
                    At the heart of our housing initiative is Effortonomy, a proprietary
                    concept that redefines how support is provided. This program ensures
                    housing, utilities, and meals for individuals and families, offering
                    the stability needed to focus on finding their true passions and
                    living their best lives. Effortonomy is built on a foundation of
                    effort rather than income. Participants who work 30 or more hours a
                    week are guaranteed secure housing, utilities, and meals, regardless
                    of their earnings. This approach removes financial stress while
                    encouraging personal and professional growth, empowering individuals
                    to pursue meaningful goals with confidence. Join us in creating a
                    community where effort is valued, lives are transformed, and stability
                    provides the foundation for a brighter future.
                </p>
            </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-6 flex items-center">
            <Image
                src="/public/health.jpg"
                alt="Health"
                width={400}
                height={200}
                className="w-1/2 h-64 object-cover rounded-lg mb-4"
            />
            <div className="ml-4 w-1/2">
                <h2 className="text-xl font-semibold mb-2">Health</h2>
                <p className="text-gray-700">
                    Health and well-being are at the core of our mission. We provide
                    comprehensive health services that address the physical, mental, and
                    emotional needs of our community members. Our health initiatives
                    include primary care, mental health services, and wellness programs
                    that promote healthy living.
                </p>
            </div>
        </div>
    </div>
);
};

export default MissionPage;
