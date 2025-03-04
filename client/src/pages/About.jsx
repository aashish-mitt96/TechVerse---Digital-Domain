import React from "react";

const About = () => {
  return (
    <div className="bg-black min-h-screen w-full  flex flex-col p-6">
      <div className="w-full bg-gray-900 p-12  shadow-xl text-white mt-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue-400">About Us</h1>
        <p className="text-gray-300 text-lg text-center mb-8">
          Welcome to <span className="font-semibold text-blue-400">TechVerse</span>, where we bring you the latest insights, trends, and updates from the tech world.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">What We Offer</h2>
        <ul className="list-disc pl-8 text-gray-300 mb-8 space-y-3">
          <li>In-Depth Articles on the latest tech trends and emerging technologies.</li>
          <li>Timely Industry News and major tech event coverage.</li>
          <li>Covering all tech categories in detail.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Our Vision</h2>
        <p className="text-gray-300 mb-8 text-lg">
          We believe technology has the power to transform lives. Our goal is to provide high-quality content that educates, inspires, and empowers our readers.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Meet the Team</h2>
        <p className="text-gray-300 mb-8 text-lg">
          We are a group of tech enthusiasts, developers, and writers who love to explore and share knowledge.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Stay Connected</h2>
        <p className="text-gray-300 mb-4 text-lg">Follow us on social media and subscribe to our newsletter!</p>
        <div className="text-gray-300 space-y-3 text-lg">
          <p>📧 <span className="font-semibold text-blue-400">Email:</span> contact@[yourblogname].com</p>
          <p>📱 <span className="font-semibold text-blue-400">Twitter:</span> @[yourbloghandle]</p>
          <p>📷 <span className="font-semibold text-blue-400">Instagram:</span> @[yourbloghandle]</p>
          <p>🔗 <span className="font-semibold text-blue-400">LinkedIn:</span> [Your LinkedIn Page]</p>
        </div>
      </div>
    </div>
  );
};

export default About;
