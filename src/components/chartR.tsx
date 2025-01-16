/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import React from "react";
// import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";
import TotalIncomeLightCard from "./cards/TotalIncomeLightCard";
import PropTypes from "prop-types";

const ChartThree = ({ user }: any) => {
  console.log(user);
  return (
    <div className="h-auto border-solid p-6 w-full max-w-xl mx-auto rounded-[20px] bg-white shadow-lg  dark:bg-gray-dark dark:shadow-card">
      {/* Header */}
      <div className="flex justify-between gap-4 mb-6 sm:flex">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white">
          Available Credits
        </h4>
        {/* <DefaultSelectOption options={["Monthly", "Yearly"]} /> */}
      </div>
      {/* Circular Percentage */}
      <TotalIncomeLightCard isLoading={false} user={user} buttons={false} />
      {/* <div className="flex flex-col items-center ">
        <p className="mt-4 text-lg font-bold text-gray-700">$600.00 Credits</p>
      </div> */}
    </div>
  );
};
ChartThree.propTypes = {
  user: PropTypes.object,
};

export default ChartThree;
