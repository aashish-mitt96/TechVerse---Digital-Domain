import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/blogs")
      .then((res) => {
        const sortedBlogs = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedBlogs);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-full mx-auto py-12 px-7">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-11 text-white">
        💡 What’s New in Tech?
      </h2>
      {blogs.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            className="relative w-full h-[70vh] cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => navigate(`/blog/${blogs[0]._id}`)}
          >
            <img
              src={blogs[0]?.images?.main || "fallback-main.jpg"}
              alt={blogs[0]?.title || "Blog Image"}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              onError={(e) => (e.target.src = "fallback-main.jpg")}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center text-2xl md:text-3xl font-bold p-4">
              {blogs[0].title}
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-5">
            {blogs.slice(1, 3).map((blog) => (
              <div
                key={blog._id}
                className="relative w-full h-[34vh] cursor-pointer rounded-lg overflow-hidden shadow-lg group"
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                <img
                  src={blog?.images?.home || "fallback-home.jpg"}
                  alt={blog.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => (e.target.src = "fallback-home.jpg")}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center text-lg md:text-xl font-bold p-3">
                  {blog.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-7 text-white">
        🌐 Explore the Digital World
      </h2>
      <div className="mb-11 flex justify-center">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-3 pl-12 bg-gray-800 border border-gray-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="relative w-full h-[300px] cursor-pointer rounded-lg overflow-hidden shadow-lg group"
              onClick={() => navigate(`/blog/${blog._id}`)}
            >
              <img
                src={blog?.images?.grid || "fallback-grid.jpg"}
                alt={blog.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => (e.target.src = "fallback-grid.jpg")}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center text-lg font-bold p-3">
                {blog.title}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-6">No blogs found.</p>
      )}
    </div>
  );
};

export default Blogs;
