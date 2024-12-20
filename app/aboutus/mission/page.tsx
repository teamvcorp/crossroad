import React from 'react';

const MissionPage: React.FC = () => {
    return (
        <>
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 id="mission" className="text-2xl font-bold mb-4">Our Mission</h1>
            <p className="text-gray-700">
            At Crossroad Family Center, our mission is to empower families and individuals through inclusive programs that nurture the mind, body, and spirit. By integrating sports, arts, education, and behavioral health, we provide a welcoming environment where every step taken is a step toward personal growth, community connection, and lasting change. Together, we build a stronger, healthier, and more unified community for generations to come.
            </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
            <h1 id="vision" className="text-2xl font-bold mb-4">Our Vision</h1>
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p className="text-gray-700 mb-4">
            We believe in the power of education to transform lives. Our educational programs are designed to provide individuals with the knowledge and skills they need to succeed in life. From early childhood education to adult learning, we offer a range of programs that cater to the diverse needs of our community.
            </p>
            <h2 className="text-xl font-semibold mb-2">Housing</h2>
            <p className="text-gray-700 mb-4">
            Safe and affordable housing is a fundamental human right. We work tirelessly to ensure that everyone in our community has access to quality housing. Our housing initiatives include affordable housing projects, homelessness prevention programs, and support services for those in need.
            </p>
            <h2 className="text-xl font-semibold mb-2">Health</h2>
            <p className="text-gray-700">
            Health and well-being are at the core of our mission. We provide comprehensive health services that address the physical, mental, and emotional needs of our community members. Our health initiatives include primary care, mental health services, and wellness programs that promote healthy living.
            </p>
        </div>
        </>
    );
};

export default MissionPage;