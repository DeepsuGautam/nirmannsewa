import Image from "next/image";
import React from "react";
import Stats from "./Stats";
import LinkerComp from "../Reusable/LinkerComp";
import { getLists } from "@/requests/GetDatas";

const AbtComp = async () => {
  const res = await getLists("home/about", 0, 0, null);
  const data = await res?.data;

  return (
    <section className="w-full mx-auto flex flex-wrap-reverse py-[75px] px-[20px] justify-evenly bg-white gap-[20px]">
      <div className="w-full max-w-[450px]">
        <Image
          src={`/api/files/images/${data?.image}`}
          loading="lazy"
          width={500}
          height={500}
          alt=""
          className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
        />
        <br />
        <br />
        <div className="w-full flex flex-wrap justify-around gap-[20px]">
          <Stats stat={data?.addiData?.experience}>
            YEARS
            <br />
            EXPERIENCE
          </Stats>
          <Stats stat={data?.addiData?.projects}>
            COMPLETED
            <br />
            PROJECTS
          </Stats>
          <Stats stat={data?.addiData?.clients}>
            HAPPY
            <br />
            CLIENTS
          </Stats>
          <Stats stat={data?.addiData?.team}>
            TEAM
            <br />
            MEMBERS
          </Stats>
        </div>
      </div>
      <div className="w-full max-w-[600px] p-[20px] flex flex-col justify-center">
        <h1 className="font-bold text-[4rem] text-blue-400">ABOUT US</h1>
        <h2 className="font-medium text-[3rem] text-gray-800">{data?.title}</h2>
        <p className="text-[20px] text-gray-500">{data?.description}</p>
        <ul
          className="text-[18px] font-semibold pl-[15px] text-orange-400"
          style={{ listStyle: "disc" }}
        >
          {data?.addiData?.list?.map((item, index) => item?(
            <li className="my-[20px]" key={index}>
              {item}
            </li>
          ):"")}
        </ul>
        <LinkerComp link={"/about"}>
          <button className="mt-[20px] py-[10px] px-[30px] text-[16px] text-white font-semibold bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-300">
            Learn More
          </button>
        </LinkerComp>
      </div>
    </section>
  );
};

export default AbtComp;
