import React from "react";
import Logo from "../assets/Logo.png";

const WelcomeSection = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white py-16 px-6 md:px-12 text-center pb-8">
      <div className="max-w-4xl mx-auto mt-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-4 animate-fade-in">
          <img className="w-36 md:w-48 max-w-full" src={Logo} alt="Canopux Logo" />
          <h1 className="text-3xl md:text-5xl font-bold  md:-ml-11"> Welcome to <span className="text-blue-400">TechVerse</span></h1>
        </div>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">Stay ahead with the latest insights in{" "}
          <strong>AI, Web Development, Cybersecurity, and Emerging Technologies.</strong>
          <br />
          Discover expert opinions, tutorials, and deep dives into the world of innovation.
        </p>
        <div className="mt-6 flex justify-center">
          <a href="/contact">
            <button type="button"className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center">Connect with us</button>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-gray-900 opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default WelcomeSection;
