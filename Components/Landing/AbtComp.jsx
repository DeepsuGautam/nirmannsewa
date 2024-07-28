import Image from "next/image";
import React from "react";
import Stats from "./Stats";
import LinkerComp from "../Reusable/LinkerComp";
import { getLists } from "@/requests/GetDatas";

const AbtComp = async () => {
  const res = await getLists("home/about", 0, 0);
  const data = await res?.data;

  return (
    <section className="w-full mx-auto flex flex-wrap-reverse py-[75px] px-[20px] justify-evenly bg-white gap-[20px]">
      <div className="w-full max-w-[450px]">
        <Image
          src={`/api/files/images/${data?.addiData?.image}`}
          width={500}
          height={500}
          alt=""
          className="w-full h-[450px] object-cover rounded-3xl"
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
      <div className="w-full max-w-[600px] p-[20px]">
        <h1 className="font-bold text-[6rem] text-[orange]">ABOUT US</h1>
        <h2 className="font-bold text-[40px]">{data?.title}</h2>
        <p className="text-[20px] text-gray-700">{data?.description}</p>
        <ul
          className="text-[18px] font-semibold pl-[15px] text-gray-800"
          style={{ listStyle: "disc" }}
        >
          {data?.addiData?.list?.map((item, index) => (
            <li className="my-[20px]" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <LinkerComp link={"/about"}>
          <button className="mt-[20px] py-[10px] px-[40px] text-[18px] text-white font-semibold bg-[orange] rounded-full hover:bg-red-400 transition-all duration-300">
            Learn More
          </button>
        </LinkerComp>
      </div>
    </section>
  );
};

export default AbtComp;
