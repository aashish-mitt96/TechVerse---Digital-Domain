import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-full bg-gray-800 text-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-100">
        Stay Updated
      </h2>
      <p className="text-gray-400 mb-6 text-lg">
        Subscribe to get the latest tech insights straight to your inbox.
      </p>
      <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-5 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSection;
