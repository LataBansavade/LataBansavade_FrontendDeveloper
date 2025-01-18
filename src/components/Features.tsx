import React, { useEffect, useRef, useState } from 'react';
import { BarChart2, Brain, Rocket } from 'lucide-react';

export default function Features() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const featuresRef = useRef(null);

  const features = [
    {
      title: "Market Insights",
      description: "Real-time analysis and market predictions powered by advanced AI algorithms",
      icon: Brain
    },
    {
      title: "Trade Optimizer",
      description: "Automated trading strategies optimized for maximum efficiency",
      icon: BarChart2
    },
    {
      title: "Portfolio Signs",
      description: "Clear signals and indicators for portfolio management",
      icon: Rocket
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = featuresRef.current.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8 py-16" ref={featuresRef}>
      {features.map((feature, index) => (
        <div
          key={index}
          data-index={index}
          className={`bg-[#001a24] p-6 rounded-xl border border-cyan-900/30 hover-scale hover-glow opacity-0 ${
            visibleItems.has(index.toString()) ? 'animate-scale-in' : ''
          }`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}