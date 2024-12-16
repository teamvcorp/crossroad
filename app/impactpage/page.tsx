"use client";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<BlogPost[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${window.location.origin}/api/get-blog-posts`
        );
        const data = await response.json();
        setPosts(data); // Set the posts fetched from the API
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-blue-600 text-white">
     

   

      {/* Blog Section */}
      <section className="py-12 px-6">
        <h2 className="text-4xl text-black font-bold text-center mb-8">
          Our Thank You Notes !
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="col-span-full text-center">Loading...</p>
          ) : posts.length > 0 ? (
            posts.map((authorPosts, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-lg shadow-lg p-6"
              >
                {authorPosts.map((post) => (
                  <div key={post.id} className="mb-4 border-b pb-4">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {post.title}
                    </h3>
                    <p className="italic text-gray-500 mb-2">
                      By {post.author}
                    </p>
                    <p className="text-gray-700">{post.content}</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">No posts found.</p>
          )}
        </div>
       {/* Member Benefits Section */}
       <section className="py-12 px-6 bg-white text-gray-800 rounded-t-3xl">
        <h2 className="text-4xl font-bold text-center text-blue mb-8">
          Member Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "$5 Day Camps", description: "Affordable day camps for kids and families." },
            { title: "Sponsored Training*", description: "Specialized training opportunities for members." },
            { title: "Homeschool Plus!", description: "K-12 tailored program with leadership training." },
            { title: "Ninja Code", description: "Hands-on coding and mechanics program." },
            { title: "Free Child Care***", description: "Childcare provided during training." },
            { title: "Advanced Tutoring", description: "Academic support for all levels." },
            { title: "Behavioral Health", description: "Mental and emotional well-being programs." },
            { title: "Group Fitness", description: "Fun and engaging fitness classes." },
            { title: "Crossfit Equipment**", description: "Access to advanced fitness equipment." },
            { title: "Indoor Track**", description: "State-of-the-art indoor running track." },
            { title: "Healthy Foods**", description: "Nutrition programs and healthy food options." },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gray-50 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>* Requires Tryouts</p>
          <p>** Coming Soon</p>
          <p>*** While Training</p>
        </div>
      </section>
      </section>


    </div>
  );
};

export default HomePage;
