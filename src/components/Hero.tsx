import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroVideo from "../images/hero_video.mp4"; // Import the video file
import icon from "../images/logo.png";
import NavBar from "./NavBar";




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

      <div className="relative z-30">
        <NavBar/>
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
            Investments
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
