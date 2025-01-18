import React from "react";
import roadmap1 from "../images/roadmap1.png";
import roadmap3 from "../images/roadmap3.png";

export default function Roadmap() {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Kicking Off",
      details: [
        "Launch of EthAi: Officially",
        "Development of Core AI Agents",
        "User Onboarding Campaign",
        "Community Engagement Initiatives",
      ],
      image: roadmap1,
    },
    {
      phase: "Phase 2",
      title: "Scaling Up",
      details: [
        "Expansion of AI Capabilities",
        "Introduction of Advanced Analytics",
        "Partnering with Key Players",
        "Global Marketing Campaign",
      ],
      image: roadmap3,
    },
    {
      phase: "Phase 3",
      title: "Future Forward",
      details: [
        "Launch of New Features",
        "Scaling User Base Globally",
        "Innovating for Sustainability",
        "Fostering Community Growth",
      ],
      image: roadmap3,
    },
  ];

  return (
    <div className="py-16 bg-[#010F14] text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Roadmap</h2>

      {/* Roadmap Items */}
      {roadmapData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between mb-16 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="flex flex-col gap-4 p-4 md:p-8 w-full md:w-1/2">
            <button className="bg-white text-black px-5 py-2 rounded-lg self-start font-medium">
              {item.phase}
            </button>
            <h1 className="text-2xl md:text-4xl font-semibold">{item.title}</h1>
            <ol className="text-lg md:text-xl space-y-3">
              {item.details.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ol>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg"
            />
            {/* Gradient Blur Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
