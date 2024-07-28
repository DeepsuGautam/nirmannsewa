"use client";
import React from "react";
import { useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const NewsHolder = ({ children, length }) => {
  const [index, setIndex] = useState(0);

  const rightSlide = useRef(null);

  const increaseIndex = () => {
    if (index < length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(length - 1);
    }
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full h-[550px] overflow-hidden lg:h-[450px]">
      <div
        className=" flex gap-0 p-0 absolute bg-red-400 "
        style={{
          width: `${100 * length}%`,
          left: `-${index * 100}%`,
          transition: "1.5s",
        }}
      >
        {children}
      </div>
      <button
        className="absolute w-fit h-fit p-[5px] rounded-full bg-[#ff4e4e] left-[10px] text-[30px] text-white hover:shadow-xl transition-all duration-300"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={decreaseIndex}
      >
        <FaAngleLeft />
      </button>

      <button
        className="absolute w-fit h-fit p-[5px] rounded-full right-[10px] text-[30px] bg-[#ff4e4e] text-white hover:shadow-xl transition-all duration-300"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        ref={rightSlide}
        onClick={increaseIndex}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default NewsHolder;
