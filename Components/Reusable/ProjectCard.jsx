import Image from "next/image";
import React from "react";
import LinkerComp from "./LinkerComp";

const ProjectCard = ({ data }) => {
  return (
    <div className="w-[40%] min-w-[300px] relative bg-white shadow-xl text-left rounded-3xl overflow-hidden">
      <Image
        src={`/api/files/projects/${data?.image}`}
        width={1000}
        height={1000}
        alt=""
        className="w-[full] h-[200px] object-cover object-center"
      />
      <div className="w-full p-[20px] pb-[100px]  text-[20px] text-gray-800">
        <h1 className="text-[3.5rem] font-semibold">{data?.title}</h1>
        {data?.description?.split(" ")?.slice(0, 19)?.join(" ")}...
      </div>

      <div className=" absolute bottom-0 w-full px-[20px] pb-[30px] flex justify-start">
        <LinkerComp
          link={`/about/projects/${data?._id}`}
          addiStyle={{ width: "fit-content" }}
        >
          <button className="w-fit py-[10px] text-[18px] px-[30px] bg-green-500 text-white transition-all duration-300 hover:bg-blue-500 rounded-full">
            See Details
          </button>
        </LinkerComp>
      </div>
    </div>
  );
};

export default ProjectCard;
