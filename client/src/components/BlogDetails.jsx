import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0)
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog || Object.keys(blog).length === 0) {
    return <p className="text-center text-gray-500 mt-10">No blog found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-9">
      <h1 className="text-4xl font-bold text-blue-50 text-center mb-6">{blog.title}</h1>
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <img src={blog?.images?.main || "fallback-main.jpg"} alt={blog.title} className="w-full h-[450px] object-cover rounded-lg" onError={(e) => (e.target.src = "fallback-main.jpg")}/>
      </div>
      <div className="mt-6 text-lg text-gray-50 leading-relaxed">
        <h2 className="text-2xl font-semibold text-blue-100 mb-3">Introduction</h2>
        <p className="text-gray-300 mb-3">{blog.introduction}</p>
        {Array.isArray(blog.content) ? (
          blog.content.map((section, index) => (
            <div key={index} className="mb-6">
              {section.heading && (
                <h2 className="text-2xl font-semibold text-blue-100 mb-2">{section.heading}</h2>
              )}
              <p className="text-gray-300">{section.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-300">{blog.content}</p>
        )}
      </div>
      <div className="mt-8 flex items-center justify-between border-t pt-4 text-gray-500 text-sm">
        <span>📅 Published on: {new Date(blog.date).toLocaleDateString()}</span>
        <span>✍️ Author: {blog.author || "Unknown"}</span>
      </div>
    </div>
  );
};

export default BlogDetails;
