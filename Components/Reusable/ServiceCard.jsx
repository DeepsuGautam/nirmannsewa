import Image from "next/image";
import React from "react";
const ServiceCard = async ({ data }) => {
  const des = async (text) => {
    if(text?.length<=100) return text;
    const txt = await text?.split("")?.slice(0, 100).join("");
    return txt  + "....";
  };
  return (
    <div className="w-[100%] relative h-[400px]">
      <div className="w-full h-full absolute  bg-white rounded-md p-[20px] py-[40px] shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
        <Image
          src={`/api/files/services/${data?.image}`}
          width={100}
          height={100}
        loading="lazy"
          className="h-[100px] object-contain"
          alt=""
        />
        <br />
        <br />
        <h2
          className={
            "w-full text-left text-[22px] text-[#133d66] font-bold h-[62px] overflow-hidden"
          }
        >
          {data?.title}
        </h2>
        <br />
        <p className="w-full h-[96px] text-[16px] overflow-hidden text-gray-600 text-left">
          {await des(data?.description)}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
