import React from 'react';

const CategoriesSection = () => {
  return (
    <section className="w-full bg-gray-800 text-white py-12 px-6 md:px-12 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Explore Our Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { name: "AI", icon: "🤖" },
          { name: "Web Dev", icon: "🌐" },
          { name: "Cybersecurity", icon: "🔒" },
          { name: "Cloud Computing", icon: "☁️" }, 
        ].map((item) => (
          <div key={item.name} className="bg-gray-700 p-4 rounded-lg hover:bg-blue-500">
            <div className="text-4xl">{item.icon}</div>
            <p className="mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
