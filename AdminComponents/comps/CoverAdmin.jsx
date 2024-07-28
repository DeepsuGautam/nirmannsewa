"use client";
import React, { useRef } from "react";

const CoverAdmin = ({ gradient, title, bg, imageHandler }) => {
  const imageRef = useRef(null);
  return (
    <div
      className="w-full bg-cover bg-fixed"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div
        className="w-full py-[150px] text-center"
        style={{
          background: gradient,
        }}
      >
        <h1 className="text-[6rem] font-bold text-gray-800">{title}</h1>
        <br />
        <br />
        <button
        type="button"
          className="w-fit bg-transparent font-bold text-gray-800 border-4 border-gray-800 text-[18px] rounded-2xl hover:bg-white"
          style={{ padding: "10px 30px" }}
          onClick={() => {
            imageRef?.current?.click();
          }}
        >
          Change Background
        </button>
        <input
          type="file"
          name="coverImage"
          className="hidden"
          ref={imageRef}
          onChange={imageHandler}
        />
      </div>
    </div>
  );
};

export default CoverAdmin;
