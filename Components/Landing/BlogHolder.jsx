import React from "react";
import BlogCard from "../Reusable/BlogCard";
import LinkerComp from "../Reusable/LinkerComp";
import { getLists } from "@/requests/GetDatas";

const BlogHolder = async () => {
  const res = await getLists("blogs", 0, 4);
  const data = await res?.data;

  return (
    <section className="w-full py-[50px] px-[20px] bg-[#fafafa] text-center">
      <h1 className="text-[6rem] text-gray-800 font-bold">READ BLOGS</h1>
      <div className="w-full flex justify-center flex-wrap gap-[40px] py-[50px]">
        {data?.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
      <center>
        <LinkerComp link={"/blogs"} addiStyle={{ margin: "50px auto" }}>
          <button className="w-fit text-[20px]  px-[30px] py-[10px] bg-[orange] font-semibold text-white rounded-full hover:bg-red-400 transition-all duration-300">
            See All Blogs
          </button>
        </LinkerComp>
      </center>
    </section>
  );
};

export default BlogHolder;
