'use client';

import React, { useState } from 'react';

const tabs = [
  { name: 'Feature1', content: 'This is the content for Feature1.' },
  { name: 'Feature2', content: 'This is the content for feature2.' },
  {
    name: 'Feature3',
    content: 'This is the content for feature3.',
  },
];

export default function ProductSpecifications() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="container mx-auto px-4 py-8 font-serif">
      {/* General Text */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 font-sans">Producto</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex justify-center space-x-4 border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-lg pb-2 ${
                activeTab === index
                  ? 'text-black border-b-2 border-pink-600'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Section: Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              {tabs[activeTab].name}
            </h3>
            <p className="mt-4 text-gray-600">{tabs[activeTab].content}</p>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1">
            <img
              src="/smartphone.webp" // Cambia esto con tu imagen
              alt={tabs[activeTab].name}
              className="w-[300px] rounded-3xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
