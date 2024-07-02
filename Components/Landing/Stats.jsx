"use client"
import React from "react";

const Stats = ({ stat, children }) => {
  return (
    <div className="w-[calc(50%-20px)] p-[10px] flex min-w-[210px] rounded-2xl shadow-lg gap-[15px]">
      <div className="font-bold text-[35px] text-gray-800">{stat}+</div>
      <div className="text-[14px] text-[orange] font-semibold">
        {children}
      </div>
    </div>
  );
};

export default Stats;
