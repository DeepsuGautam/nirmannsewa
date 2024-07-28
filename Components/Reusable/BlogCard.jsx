import Image from "next/image";
import React from "react";
import LinkerComp from "./LinkerComp";


const BlogCard = ({ data }) => {
  return (
    <div className="w-[40%] min-w-[300px] relative bg-white shadow-xl text-left">
      <Image
        src={`/api/files/blogs/${data?.image}`}
        width={1000}
        height={1000}
        alt=""
        className="w-[full] h-[200px] object-cover object-center"
      />
      <div className="w-full p-[20px] pb-[100px]  text-[20px] text-gray-800">
        <h1 className="text-[3.5rem] font-semibold">{data?.title}</h1>
        {data?.description?.split(" ")?.slice(0, 19)?.join(" ")}...
      </div>

      <div className=" absolute bottom-0 w-full px-[20px] pb-[30px] flex justify-end">
        <LinkerComp
          link={`/blogs/${data?._id}`}
          addiStyle={{ width: "fit-content" }}
        >
          <button className="w-fit py-[10px] text-[18px] px-[30px] bg-[orange] text-white transition-all duration-300 hover:bg-red-400 rounded-full">
            Read Blog
          </button>
        </LinkerComp>
      </div>
    </div>
  );
};

export default BlogCard;
