"use client";
import { useState, useEffect } from "react";
import ImageGallery from "../components/image-gallery";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<BlogPost[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showGallery, setShowGallery] = useState<boolean>(false); // State to control ImageGallery visibility
  const [refreshState, setRefreshState] = useState<boolean>(false); // State to control ImageGallery visibility

  useEffect(() => {
    
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${window.location.origin}/api/get-blog-posts`
        );
        console.log(`${window.location.origin}/api/get-blog-posts`);
        const data = await response.json();
        setPosts(data); // Set the posts fetched from the API
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [refreshState]); // Empty dependency array means this only runs once, on component mount

  return (
    <div className="flex h-screen">
      {/* Sidebar - Always open */}
      <aside className="bg-gray-800 text-white w-64 p-5 pt-[90px] fixed h-full">
        <div className="w-full bg-gray-700 p-4 rounded-lg">
          <h1 className="text-white text-1xl font-bold mb-4">
            Member Benefits
          </h1>

          <ul className="list-none m-0 p-0">
            <li className="text-white p-2 border-b border-gray-600">
              $5 Day Camps
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Sponsored Training*
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Homeschool Plus !
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Ninja Code
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Free Child Care***
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Advanced Tutoring
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Behavioral Health
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Group Fitness
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Pool Access**
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Crossfit Equipment**
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Indoor Track**
            </li>
            <li className="text-white p-2 border-b border-gray-600">
              Healthy Foods**
            </li>
          </ul>
          <p className="text-white p-2 border-b border-gray-600">
            *Requires Tryouts
          </p>
          <p className="text-white p-2 border-b border-gray-600">
            **Coming soon
          </p>
          <p className="text-white p-2 border-b border-gray-600">
            ***While Training
          </p>
        </div>
      </aside>

      {/* Main Content shifted right to accommodate sidebar */}
      <div className="flex-1 flex flex-col pl-64 pt-[90px]">
        {/* Adjust pl (padding-left) to sidebar's width */}
        {/* Blog Feed */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            posts.map((authorPosts, index) => (
              <div
                key={index}
                className="border p-4 flex flex-col space-y-4 max-h-[40vh] overflow-y-auto"
              >
                {authorPosts.map((post) => (
                  <div key={post.id} className="border-b pb-4">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="italic text-gray-500">For {post.author}</p>
                    <p>{post.content}</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <>
              <p>No posts found.</p>
              <button
                onClick={() => setRefreshState((prev) => !prev)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Refresh
              </button>
            </>
          )}
        </div>

        {/* Conditionally hide the ImageGallery */}
        <div className={showGallery ? "" : "hidden"}>
          <ImageGallery />
        </div>

        <p className="flex justify-center">
          Let's go Storm lake time to fill this page with your projects!
        </p>

        {/* Button to toggle ImageGallery visibility */}
        <button
          onClick={() => setShowGallery((prev) => !prev)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          {showGallery ? "Hide" : "Show"} Image Gallery
        </button>
      </div>
    </div>
  );
};

export default HomePage;
