import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const [blog, setBlog] = useState({
    title: "",
    images: {
      main: "",
      home: "",
      grid: "",
    },
    author: "",
    content: [
      { type: "introduction", text: "" },
      { type: "main body", heading: "", text: "" },
      { type: "conclusion", text: "" },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("images.")) {
      const key = name.split(".")[1]; 
      setBlog((prev) => ({
        ...prev,
        images: { ...prev.images, [key]: value },
      }));
    } else {
      setBlog({ ...blog, [name]: value });
    }
  };

  const handleContentChange = (index, field, value) => {
    const updatedContent = [...blog.content];
    updatedContent[index][field] = value;
    setBlog({ ...blog, content: updatedContent });
  };

  const addMainBodySection = () => {
    const newContent = [...blog.content];
    newContent.splice(newContent.length - 1, 0, {
      type: "main body",
      heading: "",
      text: "",
    });
    setBlog({ ...blog, content: newContent });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        alert("Blog posted successfully!");
        setBlog({
          title: "",
          images: { main: "", home: "", grid: "" },
          author: "",
          content: [
            { type: "introduction", text: "" },
            { type: "main body", heading: "", text: "" },
            { type: "conclusion", text: "" },
          ],
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={blog.title} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <h4>Images</h4>
        <input type="text" name="images.main" placeholder="Main Image URL" value={blog.images.main} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="text" name="images.home" placeholder="Home Page Image URL" value={blog.images.home} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="text" name="images.grid" placeholder="Grid View Image URL" value={blog.images.grid} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <input type="text" name="author" placeholder="Author Name" value={blog.author} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />

        {blog.content.map((section, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h4>{section.type === "introduction" ? "Introduction" : section.type === "conclusion" ? "Conclusion" : `Main Body ${index}`}</h4>
            {section.type === "main body" && (
              <input type="text" placeholder="Heading" value={section.heading} onChange={(e) => handleContentChange(index, "heading", e.target.value)} required style={{ width: "100%", marginBottom: "5px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
            )}
            <textarea placeholder="Content" value={section.text} onChange={(e) => handleContentChange(index, "text", e.target.value)} required style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", height: "100px", resize: "none" }} />
          </div>
        ))}

        <button type="button" onClick={addMainBodySection} style={{ width: "100%", marginBottom: "10px", padding: "10px", backgroundColor: "gray", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>+ Add Main Body Section</button>

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Post Blog</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
