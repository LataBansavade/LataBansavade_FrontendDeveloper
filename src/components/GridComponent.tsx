import React from "react";
import rectangle1 from "../images/Rectangle 1.png"

const GridComponent: React.FC = () => {
  return (
    <div className="bg-[#00161D] min-h-screen flex items-center justify-center px-4 ">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-4xl rounded-[4rem] overflow-hidden">
        {/* Trade Optimizer */}
        <div className="bg-[#09242A] shadow shadow-inner shadow-[#1b454f] rounded-lg p-6 flex flex-col items-center justify-between shadow-md row-span-2">
          <img src={rectangle1} className="w-16 h-16"/>
          <h2 className="text-lg font-bold text-white mb-2">Trade Optimizer</h2>
          <p className="text-sm text-gray-400 text-center">
            Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
          </p>
        </div>

        {/* Market Insight */}
        <div className="bg-[#09242A]  shadow-md col-span-2 shadow shadow-inner shadow-[#1b454f] rounded-lg p-6 flex flex-col items-center justify-between shadow-md">
          <h2 className="text-lg font-bold text-white mb-2">Market Insight</h2>
          <p className="text-sm text-gray-400 ">
            Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
          </p>
        </div>

        {/* Risk Guard */}
        <div className="bg-[#09242A] rounded-lg p-6 shadow-md shadow shadow-inner shadow-[#1b454f] rounded-lg p-6 flex flex-col items-center justify-between shadow-md row-span-2">
        <img src={rectangle1} className="w-16 h-16"/>
          <h2 className="text-lg font-bold text-white mb-2">Risk Guard</h2>
          <p className="text-sm text-gray-400 text-center">
            Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
          </p>
        </div>

        {/* Center Sync */}
        <div className="bg-[#09242A] rounded-lg p-6 shadow-md shadow shadow-inner shadow-[#1b454f] rounded-lg p-6 flex flex-col items-center justify-between shadow-md col-span-2">
          <h2 className="text-3xl font-bold text-white mt-7 text-center"> Our Features</h2>
          
        </div>
        

        {/* Portfolio Sync */}
        <div className="bg-[#09242A] rounded-lg p-6 shadow-md shadow shadow-inner shadow-[#1b454f] rounded-lg p-6 flex flex-col justify-between shadow-md col-span-2">
          <h2 className="text-lg font-bold text-white">Portfolio Sync</h2>
          <p className="text-sm text-gray-400 ">
            Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
          </p>
        </div>

        {/* Opportunity Scout */}
        <div className="bg-[#09242A] rounded-lg p-6 shadow-md shadow shadow-inner shadow-[#1b454f] rounded-lg p-6 flex flex-col  justify-between shadow-md col-span-2">
          <h2 className="text-lg font-bold text-white">Opportunity Scout</h2>
          <p className="text-sm text-gray-400">
            Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early ensures you never miss out on the next big thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
