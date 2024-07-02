import React from "react";

const CoverMain = ({ image, title, bg }) => {
  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-fixed bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div
        className="w-full text-center bg-fixed px-[20px] py-[150px] pt-[200px] font-bold text-[6rem] text-gray-800"
        style={{ background: bg }}
      >
        {title}
      </div>
    </section>
  );
};

export default CoverMain;
