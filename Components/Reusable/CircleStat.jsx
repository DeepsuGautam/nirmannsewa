import React from "react";

const CircleStat = ({ number, detail }) => {
  return (
    <div
      className="w-[180px] h-[180px] flex flex-col justify-center font-bold p-[20px] rounded-full text-center text-gray-700"
      style={{ boxShadow: "0 0 10px rgba(0,0,0,0.25)" }}
    >
      <h1 className="text-[5rem]">{number}+</h1>
      <p className="text-red-400 text-[16px]">{detail}</p>
    </div>
  );
};

export default CircleStat;
