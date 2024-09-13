import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-[90px] ">
        <div className="bg-gray-50 text-gray-800 p-8 flex flex-col items-center">
          {/* Section Title */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Crossroad Family Center
            </h1>
            <p className="text-lg text-gray-600  mx-auto">
              Where sports, arts, and community come together to create a place
              for everyone.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
              CRFC Intorduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl">
              "Founded in 2000 as a Taekwondo school, our community center has
              transformed into a comprehensive family development hub. Today, we
              host a diverse range of athletic programs and boast a
              state-of-the-art facility. Our center includes Homeschool Plus, a
              tailored program for students who find traditional schooling
              challenging, incorporating leadership and discipline across all
              activities. We also offer innovative coding and housing
              initiatives. As a community-built 501(c)(3) organization, we are
              dedicated to fostering change and growth from the moment you step
              through our doors."
            </p>
          </section>

          {/* Programs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              Programs for Everyone
            </h2>
            <ul className="space-y-4 max-w-4xl">
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">Taekwondo:</strong>{" "}
                Develop discipline, respect, and physical fitness through this
                dynamic martial art.
              </li>
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">Yotae:</strong> A
                fusion of yoga and Taekwondo, blending mindfulness with strength
                and agility.
              </li>
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">
                  Dance & Gymnastics:
                </strong>{" "}
                Coming soon! These programs will help children and adults
                express themselves, build coordination, and enjoy the arts.
              </li>
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">
                  Behavioral Health Programs:
                </strong>{" "}
                Support services for the mental and emotional well-being of our
                community members.
              </li>
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">Swimming:</strong>
                Full size year round lap pool comming soon!
              </li>
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">
                  HomeSchool Plus:
                </strong>
                Take Homeschooling to the next level with our k-12 partnership
                and built in leadership and discipline training.
              </li>
              <li className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900">
                  Coding and Mechanics:
                </strong>{" "}
                Like to tinker with really fast remote control cars or just take
                things apart, so do we and when we break it we just go code!
              </li>
            </ul>
          </section>

          {/* Community Involvement Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            Join us on a journey of personal and community development
            that begins with your very first step into our center.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              Crossroad Family Center exists because of the dedication and
              support of our community. From the earliest stages of planning to
              the grand opening, local residents have been involved every step
              of the way. Volunteers, donors, and leaders have all contributed
              their time, resources, and passion to make this center a reality.
              In turn, we strive to give back by offering a welcoming space
              where families can come together, meet new friends, and pursue
              activities that promote both personal and collective growth.
            </p>
          </section>

          {/* Journey Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
              We began this journey two decades ago with a dream of bringing
              people together through sports and arts. Along the way, we’ve
              learned valuable lessons about what it means to foster community
              and provide meaningful opportunities for growth. Today, we are
              thrilled to bring our experience, passion, and commitment to this
              center, serving as a place where the spirit of collaboration can
              thrive.
            </p>
          </section>

          {/* Join Us Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Join Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              Crossroad Family Center is your community. Whether you're
              interested in Taekwondo, Yotae, dance, housing, life coaching or
              mental health support we have something for everyone. Together, we
              will continue to grow and create a positive impact. Join us in
              building a future filled with strength, creativity, and unity.
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
            >
              Join Us Today
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
