import React from "react";

const PageDes = ({ title, description }) => {
  return (
    <section className="w-full mx-auto max-w-[1400px] py-[50px] px-[30px]">
      <h1
        className="text-[4.5rem] text-red-400 font-bold"
        style={{ textTransform: "uppercase" }}
      >
        {title}
      </h1>
      <br />
      <p
        className="text-[2.8rem] text-gray-600"
        style={{ lineHeight: "4.5rem" }}
      >
        {description}
      </p>
    </section>
  );
};

export default PageDes;
