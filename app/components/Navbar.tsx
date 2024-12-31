import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoMdHeart, IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <nav ref={navbarRef} className="bg-darkBlue py-3 lg:max-h-[50px]">
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center px-4 md:hidden">
        <h1 className="text-white text-xl font-bold">Crossroad</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Navbar Menu */}
      <ul
        className={`${
          isMobileMenuOpen ? "flex flex-col" : "hidden"
        } md:flex space-y-4 md:space-y-0 md:space-x-6 justify-center text-center  px-4 md:px-0 relative `}
      >
        {/* Who We Are */}
       
          <li className="relative">
            <button
              className="text-white flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors duration-300 w-full md:w-auto pr-8"
              onClick={() => handleDropdown("whoWeAre")}
            >
              Who We Are <IoIosArrowDown />
            </button>
          {activeDropdown === "whoWeAre" && (
            <ul className=" bg-white text-black mt-2 shadow-lg rounded w-42">
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/aboutus/mission" className="block px-4 py-2">
                  Mission
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link
                  href="/aboutus/mission#vision"
                  className="block px-4 py-2"
                >
                  Vision
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/aboutus/board" className="block px-4 py-2">
                  Board Members
                </Link>
              </li>
            </ul>
          )}
          </li>
        

        {/* Programs */}
        <li className="relative">
          <button
            className="text-white text-lg flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300 w-full md:w-auto pr-8"
            onClick={() => handleDropdown("programs")}
          >
            Programs <IoIosArrowDown />
          </button>
          {activeDropdown === "programs" && (
            <ul className="bg-white text-black mt-2 shadow-lg rounded w-42 ">
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/homeschool" className="block px-4 py-2">
                  Homeschool +
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/taekwondo" className="block px-4 py-2">
                  Taekwondo
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/yotae" className="block px-4 py-2">
                  Yotae
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/yoga" className="block px-4 py-2">
                  Yoga
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/afterschool" className="block px-4 py-2">
                  AfterSchool
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/programs/camps" className="block px-4 py-2">
                  Day Camps
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Get Involved */}
        <li className="relative">
          <button
            className="text-white text-lg flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300 w-full md:w-auto pr-8"
            onClick={() => handleDropdown("getInvolved")}
          >
            Get Involved <IoIosArrowDown />
          </button>
          {activeDropdown === "getInvolved" && (
            <ul className="bg-white text-black mt-2 shadow-lg rounded w-42">
              {/* <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/registration" className="block px-4 py-2">
                  Register
                </Link>
              </li> */}
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/volunteer" className="block px-4 py-2">
                  Volunteer
                </Link>
              </li>
              <li className="hover:bg-darkBlue hover:text-white">
                <Link href="/supportpage" className="block px-4 py-2">
                  Donate
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li>
          <Link
            href="/contact"
            className="text-white text-lg hover:text-yellow-400 transition-colors duration-300 flex pr-8"
          >
            Contact
          </Link>
        </li>

        {/* Impact */}
        <li>
          <Link
            href="/impactpage"
            className="text-white text-lg hover:text-yellow-400 transition-colors duration-300 flex pr-8"
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
            Donate <IoMdHeart color="red" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
