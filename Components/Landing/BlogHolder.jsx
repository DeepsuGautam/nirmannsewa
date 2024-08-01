import React from "react";
import BlogCard from "../Reusable/BlogCard";
import LinkerComp from "../Reusable/LinkerComp";
import { getLists } from "@/requests/GetDatas";

const BlogHolder = async () => {
  const res = await getLists("teams", 0, 4, null);
  const data = await res?.data;
 
  // will show teams blogs is cancelled
  return (
    <section className="w-full py-[50px] px-[20px] bg-[#fafafa] text-center">
      <h1 className="text-[4rem] text-gray-800 font-bold">OUR EXPERT TEAM</h1>
      <div className="w-full flex justify-center flex-wrap gap-[40px] py-[50px]">
        {data?.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
      <center>
        <LinkerComp link={"/teams"} addiStyle={{ margin: "50px auto" }}>
          <button className="w-fit text-[20px]  px-[30px] py-[10px] bg-blue-400 font-semibold text-white rounded-full hover:bg-blue-500 transition-all duration-300">
            See All Members
          </button>
        </LinkerComp>
      </center>
    </section>
  );
};

export default BlogHolder;
