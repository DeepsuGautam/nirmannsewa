import React from "react";

const Stats = ({ stat, children }) => {
  return (
    <div className="w-[calc(50%-20px)] p-[10px] bg-slate-50 flex min-w-[210px] rounded-2xl justify-center shadow-lg gap-[15px]">
      <div className="font-bold text-[35px] text-orange-400">{stat}+</div>
      <div className="text-[14px] font-bold text-blue-950 ">
        {children}
      </div>
    </div>
  );
};

export default Stats;
