import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`transition-all duration-300 ${isOpen ? "mt-40" : "mt-0"}`}>
      <nav className="bg-[#111] text-white py-2 shadow-md fixed top-0 w-full z-50">
        <div className="mx-auto h-11 flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center space-x-4 md:space-x-6">
            <p className="text-2xl md:text-3xl pb-1.5 font-bold">TechVerse</p>
            <div className="hidden md:flex space-x-4 md:space-x-6">
              <a href="/" className="hover:text-gray-400 transition-transform transform hover:scale-110">Home</a>
              <a href="/about" className="hover:text-gray-400 transition-transform transform hover:scale-110">About Us</a>
              <a href="/contact" className="hover:text-gray-400 transition-transform transform hover:scale-110">Contact Us</a>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <p>Follow us on</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
            </a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111] py-4 flex flex-col items-center space-y-2 shadow-lg">
            <a href="/" className="hover:text-gray-400 transition-transform transform hover:scale-110">Home</a>
            <a href="/about" className="hover:text-gray-400 transition-transform transform hover:scale-110">About Us</a>
            <a href="/contact" className="hover:text-gray-400 transition-transform transform hover:scale-110">Contact Us</a>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-6 h-6 hover:text-gray-400 transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
