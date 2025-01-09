"use client";
import Model from ".././components/model";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    name: "Mission",
    description: `At Crossroad Family Center, our mission is to empower families and
                individuals through inclusive programs that nurture the mind, body,
                and spirit. By integrating sports, arts, education, and behavioral
                health, we provide a welcoming environment where every step taken is a
                step toward personal growth, community connection, and lasting change.
                Together, we build a stronger, healthier, and more unified community
                for generations to come.`,
  
    images: "/images/tkd.jpeg",
    features: ["Self-defense", "Physical fitness", "Discipline"],
    price: "$50-$150",
  },
  {
    name: "Vision: United in the Fight for Change",
    description:
      `At Crossroad, we are fully aware of the immense challenges our world
                    faces and the obstacles that must be overcome to achieve our mission.
                    Yet, we believe these realities can be conquered through unity and a
                    shared commitment to progress. Guided by our slogan, "Fight for
                    Change," we embrace the power of collective effort to reimagine
                    education, housing, health, and community support. Together, we are
                    building a future defined by resilience, purpose, and transformation.`,
    images: "/vision.png",
    features: ["Flexibility", "Strength", "Mindfulness"],
    price: "$35-$70",
  },
  {
    name: "Education: A Strong start in life",
    description:
      `At Crossroad, we are reimagining education with an initiative designed
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
                    decisively, and make a meaningful difference.`,
    images: "/kidcomp.jpg",
    features: ["Flexibility", "Stress relief", "Balance"],
    price: "$15-$150",
  },
  {
    name: "Effortonomy: Empowering Lives Through Secure Housing",
    description:
      `At the heart of our housing initiative is Effortonomy, a proprietary
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
                    provides the foundation for a brighter future.`,
    images: "/home.jpg",
    features: [
      "Custom curriculum",
      "Extracurricular activities",
      "Flexible schedule",
    ],
    price: "$50-$200",
  },
  {
    name: "Health",
    description:
      `Health and well-being are at the core of our mission. We provide
                    comprehensive health services that address the physical, mental, and
                    emotional needs of our community members. Our health initiatives
                    include primary care, mental health services, and wellness programs
                    that promote healthy living.`,
    images: "/health.jpg",
    features: ["Teamwork", "Skill development", "Physical fitness"],
    price: "$50-$350",
  },
  {
    name: "Board Members",
    description: "Fun and educational day camps for kids of all ages.",
    boardMembers: [
      {
          name: 'Robert Von Der Becke',
          title: 'President',
          picture: '/robertv.jpg',
          bio: 'Robert is a seasoned professional with over 20 years of experience in the industry.'
      },
      {
          name: 'Ryann Von Der Becke',
          title: 'VP & Secretary',
          picture: '/ryann.png',
          bio: 'Ryann is a dedicated leader with a passion for innovation and excellence.'
      },
      {
          name: 'Kayla Reetz',
          title: 'Director & Goverance Chair',
          picture: '/kayla.png',
          bio: 'Kayla is....'
      },
      {
          name: 'Melissa Pearson',
          title: 'Marketing and Communications Chair',
          picture: '/melissa.png',
          bio: 'Melissa is....'
      },],
    images: "/images/daycamp.jpeg",
    features: ["Outdoor activities", "Educational programs", "Social skills"],
    price: "$5-$25",
  },
];

export default function AboutUsPage() {
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeNavigation, setActiveNavigation] = useState([
    {
      name: "Mission",
      href: "#",
      onclick: () => setActiveProduct(products[0]),
      current: true,
    },
    {
      name: "Vision",
      href: "#",
      onclick: () => setActiveProduct(products[1]),
      current: false,
    },
    {
      name: "Education",
      href: "#",
      onclick: () => setActiveProduct(products[2]),
      current: false,
    },
    {
      name: "Housing",
      href: "#",
      onclick: () => setActiveProduct(products[3]),
      current: false,
    },
    {
      name: "Health",
      href: "#",
      onclick: () => setActiveProduct(products[4]),
      current: false,
    },
    {
      name: "Board Members",
      href: "#",
      onclick: () => setActiveProduct(products[5]),
      current: false,
    },
  ]);


  return (
    <>
      {open && (
        <Model open={open} setOpen={setOpen}>
          <p className="text-sm text-gray-500">{activeProduct.more}</p>
        </Model>
      )}
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {activeNavigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveProduct(products[index]);
                        setActiveNavigation((prev) =>
                          prev.map((navItem, navIndex) => ({
                            ...navItem,
                            current: navIndex === index,
                          }))
                        );
                      }}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "border-blue text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {activeNavigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => {
                    setActiveProduct(products[index]);
                    setActiveNavigation((prev) =>
                      prev.map((navItem, navIndex) => ({
                        ...navItem,
                        current: navIndex === index,
                      }))
                    );
                  }}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "border-blue bg-blue text-indigo-700"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Disclosure>

        <div className="py-10">
          <main>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              {/* Your content */}
              {activeProduct && (
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    {/* Product details */}
                    <div className="lg:max-w-lg lg:self-end">
                      <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                          {activeProduct.name}
                        </h1>
                      </div>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-4"
                      >
                        <h2 id="information-heading" className="sr-only">
                          Product information
                        </h2>

                        <div className="mt-4 space-y-6">
                          {activeProduct.boardMembers && (
                            <div className="pt-6 min-h-screen bg-gray-100">
                              {activeProduct.boardMembers.map((member, index) => (
                                <div key={index} className="grid grid-cols-1 gap-6 p-5">
                                  <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                                    <Image src={member.picture} alt={member.name} height="50" width="50" className="w-16 h-16 object-cover rounded-full mr-4" />
                                    <div>
                                      <h2 className="text-xl font-semibold">{member.name}</h2>
                                      <p className="mt-2 text-gray-600">{member.title}</p>
                                      <p className="mt-2 text-gray-600">{member.bio}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <p className="text-base text-gray-500">
                          {activeProduct.description}
                        </p>
                       

                        
                      </section>
                    </div>

                    {/* Product image */}
                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                      <Image
                        alt={activeProduct.name}
                        src={activeProduct.images}
                        width={1000}
                        height={1000}
                        className="aspect-square w-full rounded-lg object-cover"
                      />
                    </div>

                    {/* Product form */}
                    <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                      <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                          Product options
                        </h2>

                      </section>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
