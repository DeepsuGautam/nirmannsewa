import Image from "next/image";
import React from "react";
const ServiceCard = async ({ data }) => {
  const des = await data?.description?.split(" ")?.slice(0, 9).join(" ");
  return (
    <div className="w-[100%] relative h-[400px]">
      <div className="w-full h-full absolute  bg-white rounded-md p-[20px] py-[40px] shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
        <Image
          src={`/api/files/services/${data?.image}`}
          width={100}
          height={100}
          className="mx-auto h-[100px] object-contain"
          alt=""
        />
        <br />
        <br />
        <h2
          className={"w-full text-center text-[25px] text-[orange] font-bold"}
        >
          {data?.title}
        </h2>
        <br />
        <p className="w-full h-fit text-[18px] text-gray-800 text-center">
          {des}...
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
