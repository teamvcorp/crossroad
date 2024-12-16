import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoMdHeart } from "react-icons/io";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="hidden justify-around md:flex bg-darkBlue py-3"
    >
      <ul className="flex space-x-6 justify-end relative">
        {/* Who We Are */}
        <li className="relative">
          <button
            className="text-white flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors duration-300"
            onClick={() => handleDropdown("whoWeAre")}
          >
            Who We Are <IoIosArrowDown />
          </button>
            {activeDropdown === "whoWeAre" && (
            <ul className="absolute text-black bg-white mt-2 shadow-lg rounded w-48">
              <li className="hover:bg-darkBlue hover:text-white">
              <Link href="/aboutus/mission" className="block px-4 py-2">Mission</Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
              <Link href="/aboutus/vision" className="block px-4 py-2">Vision</Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
              <Link href="/aboutus/board" className="block px-4 py-2">Board Members</Link>
              </li>
            </ul>
            )}
        </li>

        {/* Programs */}
        <li className="relative">
          <button
            className="text-white text-lg flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
            onClick={() => handleDropdown("programs")}
          >
            Programs <IoIosArrowDown />
          </button>
          {activeDropdown === "programs" && (
            <ul className="absolute bg-white text-black mt-2 shadow-lg rounded w-48">
                <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/sports" className="block px-4 py-2">Homeschool +</Link>
                </li>
                <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/taekwondo" className="block px-4 py-2">Taekwondo</Link>
                </li>
                <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/education" className="block px-4 py-2">Yotae</Link>
                </li>
                <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/education" className="block px-4 py-2">Yoga</Link>
                </li>
                <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/education" className="block px-4 py-2">AfterSchool</Link>
                </li>
                <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/education" className="block px-4 py-2">Day Camps</Link>
                </li>
            </ul>
          )}
        </li>

        {/* Get Involved */}
        <li className="relative">
          <button
            className="text-white text-lg flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
            onClick={() => handleDropdown("getInvolved")}
          >
            Get Involved <IoIosArrowDown />
          </button>
          {activeDropdown === "getInvolved" && (
            <ul className="absolute bg-white text-black mt-2 shadow-lg rounded w-48">
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/volunteer" className="block px-4 py-2">Volunteer</Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/supportpage" className="block px-4 py-2">Donate</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li>
          <Link
            href="/contact"
            className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>

        {/* Impact */}
        <li>
          <Link
            href="/impactpage"
            className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
          >
            Impact
          </Link>
        </li>

        {/* Donate */}
        <li>
          <Link
            href="/supportpage"
            className="text-white text-lg flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
          >
            Donate <IoMdHeart color='red' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
