"use client";
import React from "react";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";

const ChartThree: React.FC = () => {
  return (
    <div className="h-auto border-solid p-6 w-full max-w-xl mx-auto rounded-[20px] bg-white shadow-lg  dark:bg-gray-dark dark:shadow-card">
      {/* Header */}
      <div className="flex justify-between gap-4 mb-6 sm:flex">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white">
          Total Credits Earned
        </h4>
        <DefaultSelectOption options={["Monthly", "Yearly"]} />
      </div>
      {/* Circular Percentage */}
      <div className="flex flex-col items-center mt-8">
        <div className="relative w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-400 rounded-full"></div>
          <div
            className="absolute top-0 left-0 w-full h-full border-4 rounded-full border-button-gpt"
            style={{
              clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)",
              transform: "rotate(252deg)",
            }}
          ></div>
          {/* Text in Circle */}
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg font-bold text-gray-700">
            21% Used
          </div>
        </div>
        <p className="mt-4 text-lg font-bold text-gray-700">600.00$ Credits</p>
      </div>
    </div>
  );
};

export default ChartThree;
