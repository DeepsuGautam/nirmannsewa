import Image from "next/image";
import React from "react";
import LinkerComp from "./LinkerComp";



const BlogCard = ({ data }) => {

  // conver to team card
const handleTextSlice =  (text) => {
  if (text.length <= 150) return text;
  const splittedValue =  text?.split("").slice(0, 151)?.join("");
  return splittedValue + " ....";
};

  return (
    <div className="w-full max-w-full md:max-w-[320px] xl:max-w-[600px] relative bg-white shadow-xl text-left rounded-xl">
      <Image
        src={`/api/files/teams/${data?.image}`}
        width={700}
        height={700}
        loading="lazy"
        alt=""
        className="w-[full] h-[300px] rounded-xl object-cover object-center"
      />
      <div className="w-full p-[20px] pb-[100px]  text-[18px] text-gray-800">
        <h1 className="text-[3rem] font-semibold">{data?.name}</h1>
        <h3 className="text-[18px] font-medium text-blue-400">{data?.occupation}</h3>
        <p className="w-full h-[80px] overflow-hidden">
        {handleTextSlice(data?.description)}
        </p>
        
      </div>

      <div className=" absolute bottom-0 w-full px-[20px] pb-[30px] flex justify-end">
        <LinkerComp
          link={`/teams/${data?._id}`}
          addiStyle={{ width: "fit-content" }}
        >
          <button className="w-fit py-[10px] text-[16px] px-[30px] bg-orange-400 text-white transition-all duration-300 hover:bg-orange-500 rounded-full">
            About Me
          </button>
        </LinkerComp>
      </div>
    </div>
  );
};

export default BlogCard;
