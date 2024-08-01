import React from "react";

const CoverMain = ({ image, title}) => {
  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-fixed bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div
        className="w-full text-center bg-gradient-to-t from-black via-blue-950 to-transparent bg-fixed px-[20px] py-[150px] pt-[200px] font-bold text-[4rem] text-white"
      >
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default CoverMain;
