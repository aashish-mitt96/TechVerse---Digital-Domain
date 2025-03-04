import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["introduction", "main body", "conclusion"],
    required: true,
  },
  heading: {
    type: String,
    required: function () {
      return this.type === "main body";
    },
  },
  text: {
    type: String,
    required: true,
  },
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    main: { type: String, required: true }, 
    home: { type: String, required: true }, 
    grid: { type: String, required: true },
  },
  content: {
    type: [contentSchema],
    validate: {
      validator: function (sections) {
        return (
          sections.some((sec) => sec.type === "introduction") &&
          sections.some((sec) => sec.type === "conclusion")
        );
      },
      message: "Blog must contain at least an introduction and a conclusion.",
    },
  },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
