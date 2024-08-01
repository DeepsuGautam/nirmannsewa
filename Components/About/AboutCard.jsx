import Image from "next/image";
import React from "react";

const AboutCard = ({ data, index }) => {
  const { image, title, description } = data;
  return (
    <section
      className="w-full h-fit py-[80px] flex flex-wrap-reverse justify-evenly gap-[4rem]"
      style={{
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        background: index % 2 === 0 ? "white" : "#f0f3f5",
      }}
    >
      <Image
        src={`/api/files/abouts/${image}`}
        width={500}
        alt="about"
        height={500}
        loading="lazy"
        className="w-[calc(100%-40px)] h-fit min-h-[300px] max-h-[500px] max-w-[500px] object-cover object-center rounded-3xl shadow-xl"
      />
      <div className="w-full p-[2rem] max-w-[500px] flex flex-col justify-center text-gray-600">
        <h1 className="text-[5rem]">{title}</h1>
        <br />
        <p className="text-[16px] text-gray-500">{description}</p>
      </div>
    </section>
  );
};

export default AboutCard;
