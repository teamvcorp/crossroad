"use client";

import { useState, useEffect } from "react";
import { revalidatePath } from "next/cache";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[][]>([]); // Store posts as an array of arrays
  const [loading, setLoading] = useState(false);

  // Fetch blog posts from the API when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${window.location.origin}/api/get-blog-posts`);
        const data = await response.json();
        setPosts(data); // Set the posts fetched from the API
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this only runs once, on component mount
revalidatePath('/impactpage')
  return (
    <div className="flex h-screen pt-[90px]">
      {/* Sidebar */}
      <aside
        className={`mt-[90px] fixed top-0 left-0 h-full bg-gray-800 p-5 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="text-right">
          <button onClick={() => setSidebarOpen(false)} className="text-white">
            Close
          </button>
        </div>
        <div className="mt-10">
          <p>Sidebar Content</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Collapsible Sidebar Button */}
        {/* <div className="p-4 bg-gray-200 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
            <FaBars size={24} />
          </button>
      
        </div> */}

        {/* Blog Feed */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            posts.map((authorPosts, index) => (
              <div key={index} className="border p-4 flex flex-col space-y-4">
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
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
