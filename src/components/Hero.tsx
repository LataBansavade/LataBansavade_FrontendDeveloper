import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroVideo from "../images/hero_video.mp4"; // Import the video file
import icon from "../images/logo.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the burger menu

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Navbar */}
      <div className="relative z-20 px-4 sm:px-8 md:px-12">
        <nav className="py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={icon} alt="EthAI Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">EthAI</span>
          </div>

          {/* Burger Icon for Medium Screens */}
          <div className="block md:hidden" onClick={toggleMenu}>
            <button className="text-white">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block bg-[#0C2B2FB2] fixed left-1/3 top-5 bg-opacity-5 px-8 py-4 rounded-full backdrop-blur-md border border-[#B0FAFFB2] shadow-md`}
          >
            <ul className="flex gap-10 sm:gap-14 text-md text-[#B0FAFFB2]">
              <li>
                <a href="#features" className="hover:text-cyan-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-200">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-cyan-200">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-cyan-200">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg font-medium transition-colors hover:bg-gray-100 hover:text-black">
              Log in
            </button>
            <button className="bg-[#CDFCFF] px-6 py-3 rounded-lg font-medium transition-colors text-black shadow-inner shadow-2xl shadow-[#4CDDFD]">
              Whitepaper
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay (for darkening the video) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-[25vh] h-full text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl mb-6 opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          When Innovation
          <br />
          <div className="mt-5 text-4xl sm:text-5xl md:text-6xl">
            Meets <span className="text-[#0B2A2D] bg-cyan-100 rounded-full px-5">Investment</span>
          </div>
        </h1>
        <p
          className={`text-[#B0FAFFB2] text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          Engineering Trading Through Advanced Technology
        </p>
        <button
          className={`bg-transparent border px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center mx-auto space-x-2 hover-scale hover-glow opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <span>Open App</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
