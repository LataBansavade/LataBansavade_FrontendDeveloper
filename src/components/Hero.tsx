import { useState, useEffect } from "react";
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
      <div className="relative z-20">
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md flex justify-between items-center px-4 sm:px-8 md:px-12 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={icon} alt="EthAI Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">EthAI</span>
      </div>

      {/* Burger Icon for Smaller Screens */}
      <div className="md:hidden" onClick={toggleMenu}>
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
        } md:block fixed left-0 top-0 w-full h-full md:relative md:w-auto md:h-auto  border-[#294143b2] `}
      >
        {/* Close Button for Small Screens */}
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleMenu} className="text-white">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col rounded-full md:flex-row gap-6 md:gap-8 text-md px-6 py-4 relative">
          <li className="relative group">
            <a
              href="#features"
              className="px-8 py-4 relative transition-all duration-300 ease-in-out"
            >
              Features
              <span className="absolute inset-0 bg-[#B0FAFFB2] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="px-8 py-4 relative transition-all duration-300 ease-in-out"
            >
              Why Us
              <span className="absolute inset-0 bg-[#B0FAFFB2] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#tokenomics"
              className="px-8 py-4 relative transition-all duration-300 ease-in-out"
            >
              Tokenomics
              <span className="absolute inset-0 bg-[#B0FAFFB2] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#roadmap"
              className="px-8 py-4 relative transition-all duration-300 ease-in-out"
            >
              Roadmap
              <span className="absolute inset-0 bg-[#B0FAFFB2] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
          </li>

          {/* Buttons for Smaller Screens */}
          <li className="flex flex-col md:hidden gap-4 mt-4">
            <button className="px-4 py-2 rounded-lg font-medium transition-colors hover:bg-gray-100 hover:text-black">
              Log in
            </button>
            <button className="bg-[#CDFCFF] hover:bg-[#acedf3] px-6 py-3 rounded-lg font-medium transition-colors text-black shadow-inner shadow-2xl shadow-[#4CDDFD]">
              Whitepaper
            </button>
          </li>
        </ul>
      </div>

      {/* Buttons for Larger Screens */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="px-4 py-2 rounded-lg font-medium transition-colors hover:bg-gray-100 hover:text-black">
          Log in
        </button>
        <button className="bg-[#CDFCFF] hover:bg-[#acedf3] px-6 py-3 rounded-lg font-medium transition-colors text-black shadow-inner shadow-2xl shadow-[#4CDDFD]">
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
          className={`text-4xl sm:text-5xl md:text-7xl mb-6 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          When Innovation
          <br />
          <div className="flex gap-3 items-center justify-center mt-5 text-4xl sm:text-5xl md:text-6xl">
            Meets
            <span className="content">
              <h1 className="title">
                Investments
                <div className="aurora">
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                </div>
              </h1>
            </span>
          </div>
        </h1>
        <p
          className={`text-[#B0FAFFB2] text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          Engineering Trading Through Advanced Technology
        </p>
        <button
          className={`bg-transparent border px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center mx-auto space-x-2 hover-scale hover-glow opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <span>Open App</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
