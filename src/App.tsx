import React from "react";
import {
  ArrowRight,
  BarChart2,
  Brain,
  Rocket,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import GridComponent from "./components/GridComponent";
import TokenomicsChart from "./components/TokenomicsChart";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001219] to-[#012a35] text-white">
      <div className="">
        <section id="hero">
          <Hero />
        </section>

        <section id="features">
          <GridComponent />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="tokenomics">
        <TokenomicsChart/>
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
