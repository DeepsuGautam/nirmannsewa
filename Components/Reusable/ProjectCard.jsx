import Image from "next/image";
import React from "react";
import LinkerComp from "./LinkerComp";

const ProjectCard = ({ data }) => {
  const handleTextSlice=(text)=>{
     if(text.length<=200) return text;
     const splittedValue =  text?.split("").slice(0, 201)?.join("");
     return splittedValue + " ...."
  }

  return (
    <div className="w-full max-w-full lg:max-w-[320px] xl:max-w-[600px] relative bg-white shadow-xl text-left rounded-xl">
      <Image
        src={`/api/files/projects/${data?.image}`}
        width={700}
        height={700}
        loading="lazy"
        alt=""
        className="w-[full] h-[200px] rounded-xl object-cover object-center"
      />
      <div className="w-full p-[20px] pb-[100px]  text-[18px] text-gray-500">
        <h1 className="text-[3rem] font-semibold text-emerald-900">{data?.title}</h1>
        <p className="w-full h-[80px] overflow-hidden">
        {handleTextSlice(data?.description)}
        </p>
        
      </div>

      <div className=" absolute bottom-0 w-full px-[20px] pb-[30px] flex justify-start">
        <LinkerComp
          link={`/ongoing-projects/${data?._id}`}
          addiStyle={{ width: "fit-content" }}
        >
          <button className="w-fit py-[10px] text-[16px] px-[30px] bg-blue-400 text-white transition-all duration-300 hover:bg-blue-500 rounded-full">
            See Details
          </button>
        </LinkerComp>
      </div>
    </div>
  );
};

export default ProjectCard;
