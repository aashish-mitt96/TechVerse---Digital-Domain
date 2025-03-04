import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full">
      <div className="px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div>
            <h2 className="text-2xl font-bold text-white">TechVerse</h2>
            <p className="mt-3 text-gray-400">
              Stay ahead in the world of technology with expert insights, the latest trends, and in-depth reviews.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center w-full">
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://x.com" className="text-gray-400 hover:text-white">
              <FaXTwitter size={22} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-5 w-full">
          © {new Date().getFullYear()} TechVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
