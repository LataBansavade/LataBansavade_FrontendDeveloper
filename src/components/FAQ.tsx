import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "What is EthAi?", answer: "EthAi is a platform that leverages AI to assist traders in making informed decisions." },
  { question: "How can EthAi help me as a Trader?", answer: "EthAi provides market insights, tracks smart money flow, and ensures data security to help traders optimize their strategies." },
  { question: "Who can use EthAi?", answer: "Anyone looking to leverage AI for trading, including beginners, experienced traders, and institutions." },
  { question: "How does EthAi track smart money flow?", answer: "EthAi uses advanced algorithms to analyze transactions and movements in the blockchain." },
  { question: "How does EthAi ensure data security?", answer: "EthAi employs encryption and secure protocols to protect user data and maintain privacy." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white min-h-screen flex justify-center items-center px-4 py-20 sm:py-24">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A1929] p-6 sm:p-8 rounded-lg shadow-md transition-all"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-sm sm:text-lg md:text-xl font-medium">{item.question}</h3>
                <span
                  className={`text-cyan-400 font-bold text-xl sm:text-2xl md:text-3xl transition-transform ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
