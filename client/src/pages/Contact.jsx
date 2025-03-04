import React from "react";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col p-6">
      <div className="w-full bg-gray-900 p-12 shadow-xl text-white mt-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue-400">Contact Us</h1>
        <p className="text-gray-300 text-lg text-center mb-8">
          Have any questions or suggestions? Reach out to us, and we’ll be happy to help!
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-2">📧 <span className="font-semibold text-blue-400">Email:</span> contact@[yourblogname].com</p>
            <p className="text-gray-300 mb-2">📱 <span className="font-semibold text-blue-400">Phone:</span> +123-456-7890</p>
            <p className="text-gray-300">📍 <span className="font-semibold text-blue-400">Address:</span> 123 Tech Street, Innovation City</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
              ></textarea>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;