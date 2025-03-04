import React from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/create-blog")}
      className="fixed top-5 right-5 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
    >
      Create Blog
    </button>
  );
};

export default CreateBlog;
