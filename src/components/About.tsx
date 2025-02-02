import React from "react";
import { Brain, BarChart2, Rocket, HelpCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Stay Ahead",
      description:
        "No more guesswork—get clear, trustable insights.",
      icon: Brain,
    },
    {
      title: "Know Your Assets",
      description:
        "Always stay on top of how your investments are performing.",
      icon: BarChart2,
    },
    {
      title: "Simple, Not Overwhelming",
      description:
        "Our tools are designed to make complex market analysis easy to understand and act on.",
      icon: HelpCircle,
    },
    {
      title: "Future Proof",
      description: "We’re constantly improving, adding new features to help you make the most informed decisions possible.",
      icon: Rocket,
    },
  ];

  return (
    <div className="py-16 flex items-center justify-center flex-col px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center mb-10">
        <h2 id="Why Us" className="text-3xl sm:text-4xl font-bold mb-8">About EthAi</h2>
        <p className="text-[#B0FAFFB2] text-base sm:text-lg mx-auto mb-8 max-w-2xl">
          At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.
        </p>
        <button className="bg-[#CDFCFF] px-6 py-3 mb-12 rounded-lg font-medium transition-colors text-black shadow-inner shadow-2xl shadow-[#4CDDFD]">
          Read More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-[#08252A] p-8 sm:p-10 md:p-12 rounded-2xl w-full max-w-[1200px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-[#1D3035] rounded-xl shadow-lg flex flex-col items-start gap-4"
          >
            <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
