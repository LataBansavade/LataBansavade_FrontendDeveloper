import React from 'react';
import logo from "../images/Frame 43094.png";
import socialMedia from "../images/socialMedia.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-cyan-900/30 bg-[#010F14]">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 gap-5">
          <img src={logo} alt="EthAI Logo" className="w-36 md:w-48" />
          <img src={socialMedia} alt="Social Media Links" className="w-48 md:w-60" />
        </div>

        {/* Quote and Input Section */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-[40%]">
          <h1 className="text-2xl md:text-4xl text-center md:text-left font-bold text-white">
            “Designed for traders of today, just like you."
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch bg-transparent border rounded-2xl p-3 gap-4 w-full">
            <input
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm md:text-base px-2"
              type="text"
              placeholder="What is your work email?"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-400 mt-8 text-sm">
        © 2024 Eth•AI. All rights reserved.
      </p>
    </footer>
  );
}
