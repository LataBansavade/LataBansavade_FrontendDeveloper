import React, { useEffect, useState, useRef } from 'react';

export default function Tokenomics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [chartProgress, setChartProgress] = useState(0);

  const stats = [
    { label: "Supply Space", value: "$10.2M" },
    { label: "Market Share", value: "$25.4k" },
    { label: "Total Supply", value: "100M" },
    { label: "Circulating", value: "60%" },
    { label: "Marketing", value: "15%" },
    { label: "Liquidity Pool", value: "25%" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          let progress = 0;
          const interval = setInterval(() => {
            progress += 2;
            if (progress <= 60) {
              setChartProgress(progress);
            } else {
              clearInterval(interval);
            }
          }, 20);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16" ref={sectionRef}>
      <h2 className={`text-3xl font-bold mb-8 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
        Tokenomics
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative flex justify-center">
          <div className="w-64 h-64 rounded-full border-8 border-gray-800 relative overflow-hidden">
            <div 
              className="absolute inset-0 border-8 border-cyan-400 rounded-full transition-all duration-1000"
              style={{ 
                clipPath: `inset(0 ${100 - chartProgress}% 0 0)`,
                transform: `rotate(${chartProgress * 3.6}deg)`
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">{chartProgress}%</div>
                <div className="text-gray-400">Circulating</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-[#001a24] p-4 rounded-lg hover-scale opacity-0 ${
                isVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-gray-400">{stat.label}</div>
              <div className="text-xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}