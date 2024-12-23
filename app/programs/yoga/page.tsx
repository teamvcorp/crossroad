import React from "react";
import Image from "next/image";

const YogaPage: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-6 flex flex-col md:flex-row items-center">
            <Image
                src="/yoga.png"
                alt="Vision ai generate image"
                width={400}
                height={200}
                className="w-full md:w-1/2 h-64 object-contain rounded-lg mb-4 md:mb-0"
            />
            <div className="md:ml-4 w-full md:w-1/2">
                <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Welcome to Safe Harbor Yoga with Kayla Reetz</h2>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                    Discover balance, strength, and tranquility at Safe Harbor Yoga, led
                    by our experienced and passionate instructor, Kayla Reetz. With a deep
                    commitment to creating a welcoming and inclusive environment, Kayla
                    guides each session with care and expertise, ensuring that
                    everyone—from beginners to seasoned practitioners—feels supported on
                    their journey. At Safe Harbor Yoga, we believe yoga is more than just
                    movement; it’s a path to mental clarity, emotional well-being, and
                    physical vitality. Through mindful practices and thoughtful
                    instruction, Kayla helps you find your center and create a safe space
                    to grow, heal, and thrive. Whether you’re seeking relaxation, fitness,
                    or a deeper connection to yourself, Safe Harbor Yoga is your
                    sanctuary. Join us and let Kayla guide you toward a stronger body, a
                    calmer mind, and a revitalized spirit.
                </p>
            </div>
        </div>
    );
};

export default YogaPage;
