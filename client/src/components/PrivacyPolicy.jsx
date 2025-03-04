import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center p-6 mt-11 w-full">
      <div className=" w-full bg-gray-900 shadow-lg rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Effective Date: [Insert Date]
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-400">
            When you visit our blog, we may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>
              <strong className="text-white">Personal Information:</strong> When you subscribe, comment, or contact us, we may collect your name, email, and any details you provide.
            </li>
            <li>
              <strong className="text-white">Non-Personal Information:</strong> We may collect IP addresses, browser types, and usage data through cookies and analytics tools.
            </li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-400">
            We use your information to improve content, communicate with you, analyze traffic, and prevent unauthorized activities.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-400">
            We use cookies to enhance your experience. You can disable cookies via browser settings, but some features may not work properly.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            4. Third-Party Services
          </h2>
          <p className="text-gray-400">
            We may use services like Google Analytics and ad networks, which collect data according to their privacy policies.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            5. Data Security
          </h2>
          <p className="text-gray-400">
            We implement security measures to protect your data, but we cannot guarantee absolute security.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            6. Your Rights
          </h2>
          <p className="text-gray-400">
            You may have rights to access, correct, or delete your data. Contact us at [Your Contact Email].
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-400">
            We may update this Privacy Policy periodically. Please check this page for updates.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            8. Contact Us
          </h2>
          <p className="text-gray-400">
            If you have any questions, contact us at:
          </p>
          <p className="text-white font-semibold mt-2">[Your Blog Name]</p>
          <p className="text-gray-400">[Your Contact Email]</p>
          <p className="text-gray-400">[Your Blog URL]</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
