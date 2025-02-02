import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const TokenomicsChart: React.FC = () => {
  // Data for the chart
  const data = {
    labels: ["Liquidity Pool (90%)", "Team (35%)", "Marketing (5%)"],
    datasets: [
      {
        data: [5, 35, 90],
        backgroundColor: ["#00B4D877", "#00B4D855", "#00B4D8"],
        borderWidth: 5,
        borderColor: "transparent", // Transparent border
        hoverBorderColor: "rgba(255, 255, 255, 1)",
        borderRadius: 10, // Rounded corners for segments
        spacing: 10, // Adds gap between segments
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    cutout: "70%", // Makes it a donut chart
  };

  return (
    <div className=" flex flex-col lg:flex-col gap-8 p-8 rounded-lg items-center justify-center"

    >
      <h1 id="Tokinomics" className="text-4xl lg:text-6xl font-semibold text-center lg:text-center w-full">
        Tokenomics
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full items-center lg:justify-around justify-center ">
        {/* Chart */}
        <div className="flex items-center justify-center w-full sm:w-96 md:w-96 lg:w-96 xl:w-[24rem] h-[24rem] sm:h-[20rem] md:h-[24rem] lg:h-[24rem] xl:h-[28rem]">
          <Doughnut data={data} options={options} />
        </div>

        {/* Tokenomics Details */}
        <div className="bg-[#08252A] p-6 sm:w-full md:w-96 lg:w-[30vw] xl:w-[25vw] rounded-lg text-white text-sm sm:text-lg shadow-md space-y-4 w-full">
          <div className="flex justify-between">
            <p>Name:</p>
            <p>EthAI</p>
          </div>
          <div className="flex justify-between">
            <p>Token Name:</p>
            <p>$EthAI</p>
          </div>
          <div className="flex justify-between">
            <p>Token Standard:</p>
            <p>ERC20</p>
          </div>
          <div className="flex justify-between">
            <p>Blockchain:</p>
            <p>Ethereum</p>
          </div>
          <div className="flex justify-between">
            <p>Total Supply:</p>
            <p>100 Million</p>
          </div>
          <div className="flex justify-between">
            <p>Tax:</p>
            <p>5%/5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;
