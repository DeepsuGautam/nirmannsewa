"use client";
import { getLists } from "@/requests/GetDatas";
import React, { useEffect, useState } from "react";
import BlogCard from "../Reusable/BlogCard";

const BlogInfinite = ({ firstData }) => {
  const [data, setData] = useState(firstData);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const call = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("teams", index, 4, null);
        const newdata = await fetched?.data;
        if (!fetched.error && newdata?.length > 0) {
          setData((prev) => [...prev, ...newdata]);
          setIndex((prev) => prev + 1);
        }
      }
    };

    if (data?.length > 0) {
      window.addEventListener("scroll", call);

      return () => {
        window.removeEventListener("scroll", call);
      };
    }
  }, [data, index]);

  return (
    <section
      className="w-full"
      style={{
        padding: "50px 20px",
        background: "#fafafa",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          padding: "20px 0",
        }}
      >
        {data?.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogInfinite;
