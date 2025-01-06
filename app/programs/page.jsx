"use client";
import Model from ".././components/model";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  IdentificationIcon,
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
    name: "Taekwondo",
    description: "Learn the art of Taekwondo with our experienced instructors one, two or three times per week.",
    more: `Our school offers Taekwondo for all ages, focusing on discipline,
            leadership, and self-mastery through Taekwondo principles. Our
            comprehensive program builds confidence, practical skills, and the
            ability to rise to any challenge. Whether you're looking to compete
            at high levels or achieve personal growth, our school is the place
            for your family. Rooted in a rich tradition of poomsae,
            self-defense, and sparring, our program evolves with modern methods.
            For kids, we provide a fun, engaging curriculum that fosters
            self-acceptance and continuous self-improvement. Using high
            educational standards, we empower diverse learners to excel on their
            journey to becoming black belt practitioners.`,
    images: "/images/tkd.jpeg",
    features: ["Self-defense", "Physical fitness", "Discipline"],
    price: "$50-$150",
  },
  {
    name: "Yotae",
    description:
      "Experience the unique blend of yoga and martial arts in Yotae.",
    more: `Yotae is a unique blend of yoga and Taekwondo, expertly crafted to
        combine the physical and mental disciplines of both arts. This
        proprietary program, exclusive to Crossroad, offers a transformative
        experience that boosts physical strength, burns fat, and cultivates
        mindfulness.
 
        Led by co-instructors with decades of expertise in their respective
        disciplines, Yotae seamlessly balances intense cardio with
        strength-building exercises, all while fostering mental clarity and
        focus. It’s more than a workout—it’s a path to holistic well-being,
        empowering you to achieve physical and mental harmony.

        Discover Yotae and elevate your fitness journey with a class that’s as
        unique as you are.
`,
    images: "/images/yotae.jpeg",
    features: ["Flexibility", "Strength", "Mindfulness"],
    price: "$35-$70",
  },
  {
    name: "Yoga",
    description:
      "Join our yoga classes to improve your flexibility and mental well-being.",
    more: ` Discover balance, strength, and tranquility at Safe Harbor Yoga, led
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
                    calmer mind, and a revitalized spirit.`,
    images: "/images/yoga.jpeg",
    features: ["Flexibility", "Stress relief", "Balance"],
    price: "$15-$150",
  },
  {
    name: "HomeSchool +",
    description:
      "A comprehensive program for homeschooling with additional activities.",
    more: `At Home School Plus, we take the next step in education by moving beyond standardized testing and embracing a future of limitless possibilities. Our program fosters critical thinking, skill development, and problem-solving, equipping students with the tools they need to lead in a rapidly evolving world.
           By integrating leadership training with ABA methodologies, we cultivate genuine leadership in every student. Through tailored learning experiences that align with their interests, we empower students to excel in an environment that redefines traditional education.
            This is education without boundaries—a dynamic, student-centered approach that inspires curiosity, ignites potential, and prepares future leaders to think boldly, act decisively, and make a difference.
            Join us in reshaping the meaning of education, one learner at a time.
`,
    images: "/images/homeschool.jpeg",
    features: [
      "Custom curriculum",
      "Extracurricular activities",
      "Flexible schedule",
    ],
    price: "$50-$200",
  },
  {
    name: "Soccer",
    description: "Join our year round soccer program to develop your skills and teamwork.",
    more: `Get ready to kick off an exciting new chapter in our community with the launch of our indoor soccer league, featuring a state-of-the-art turf playing field! Say goodbye to weather cancellations and uneven surfaces—our premium turf ensures a smooth, fast-paced game that enhances every player's skills and enjoyment. Indoor soccer brings all the action-packed intensity of the sport into a climate-controlled environment, making it perfect for year-round play. With smaller teams and faster gameplay, you'll experience more touches on the ball, quicker decision-making, and plenty of opportunities to showcase your footwork and teamwork. Whether you're a seasoned player or just starting out, this league offers an unbeatable combination of fun, competition, and camaraderie.`,
    images: "/images/soccer.jpeg",
    features: ["Teamwork", "Skill development", "Physical fitness"],
    price: "$50-$350",
  },
  {
    name: "Day Camps",
    description: "Fun and educational day camps for kids of all ages.",
    more: `Our day camps provide parents with a dependable solution for last-minute schedule changes, whether it's a snow day or an unexpected emergency. With a focus on safety, education, and your child’s growth, our program offers a trusted environment where children can thrive.
          As a member, you can access drop-off days for as little as $5, giving you peace of mind knowing your child is in a nurturing and development-focused space. Our day camps are more than a childcare option—they’re an opportunity for kids to engage in meaningful learning and personal development, no matter the circumstance.
`,
    images: "/images/daycamp.jpeg",
    features: ["Outdoor activities", "Educational programs", "Social skills"],
    price: "$5-$25",
  },
  {
    name: "AfterSchool",
    description:
      "Engaging afterschool programs to keep kids active and learning.",
    more: `Our afterschool program is designed to complement and enhance the education provided by public and private institutions. By aligning with their expectations and building on them, we empower students to exceed the standards set by their schools.
          At the heart of our program is our proprietary leadership development model, which fosters confidence, discipline, and a drive for excellence. Students not only grow academically but also have the opportunity to explore enriching activities that expand their skills and passions.
           From martial arts and dance to yoga, soccer, and more, our inclusive programs inspire creativity, teamwork, and personal growth. This is where students develop the tools to succeed both in school and in life—unlocking their potential and shaping their future.
`,
    images: "/images/afterschool.jpeg",
    features: [
      "Homework help",
      "Extracurricular activities",
      "Safe environment",
    ],
    price: "$50-$250",
  },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeNavigation, setActiveNavigation] = useState([
    {
      name: "Taekwondo",
      href: "#",
      onclick: () => setActiveProduct(products[0]),
      current: true,
    },
    {
      name: "Yotae",
      href: "#",
      onclick: () => setActiveProduct(products[1]),
      current: false,
    },
    {
      name: "Yoga",
      href: "#",
      onclick: () => setActiveProduct(products[2]),
      current: false,
    },
    {
      name: "HomeSchool +",
      href: "#",
      onclick: () => setActiveProduct(products[3]),
      current: false,
    },
    {
      name: "Soccer",
      href: "#",
      onclick: () => setActiveProduct(products[4]),
      current: false,
    },
    {
      name: "Day Camps",
      href: "#",
      onclick: () => setActiveProduct(products[5]),
      current: false,
    },
    {
      name: "AfterSchool",
      href: "#",
      onclick: () => setActiveProduct(products[6]),
      current: false,
    },
  ]);

  const reviews = { average: 4, totalCount: 1624 };

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

                        <div className="flex items-center">
                          <p className="text-lg text-gray-900 sm:text-xl">
                            {activeProduct.price}
                          </p>

                          <div className="ml-4 border-l border-gray-300 pl-4">
                            <h2 className="sr-only">Reviews</h2>
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center">
                                  {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                      key={rating}
                                      aria-hidden="true"
                                      className={classNames(
                                        reviews.average > rating
                                          ? "text-yellow-400"
                                          : "text-gray-300",
                                        "size-5 shrink-0"
                                      )}
                                    />
                                  ))}
                                </div>
                                <p className="sr-only">
                                  {reviews.average} out of 5 stars
                                </p>
                              </div>
                              <p className="ml-2 text-sm text-gray-500">
                                {reviews.totalCount} reviews
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 space-y-6">
                          <p className="text-base text-gray-500">
                            {activeProduct.description}
                          </p>
                        </div>

                        <div className="mt-6 flex items-center">
                          <CheckIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-green-500"
                          />
                          <p className="ml-2 text-sm text-gray-500">
                            Currenty accepting new students
                          </p>
                        </div>
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

                        <form>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                              onClick={() => setOpen(true)}
                            >
                              <span>Why should I join this program?</span>
                              <QuestionMarkCircleIcon
                                aria-hidden="true"
                                className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                              />
                            </button>
                            <div className="mt-4">
                              <h3 className="text-sm font-medium text-gray-900">
                                Features
                              </h3>
                              <ul className="mt-2 pl-4 list-disc text-sm text-gray-500">
                                {activeProduct.features.map(
                                  (feature, index) => (
                                    <li key={index} className="list-item">
                                      {feature}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-10">
                            <p className="text-sm text-gray-500">
                              Interested or Ready to Go?
                            </p>
                            <Link
                              href={`/registration`}
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-darkBlue px-8 py-3 text-base font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                              Send Info
                            </Link>
                          </div>
                          <div className="mt-6 text-center">
                            <a
                              href="#"
                              className="group inline-flex text-base font-medium"
                            >
                              <IdentificationIcon
                                aria-hidden="true"
                                className="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                              />
                              <span className="text-gray-500 hover:text-gray-700">
                                Membership Required
                              </span>
                            </a>
                          </div>
                        </form>
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
