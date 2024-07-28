"use client";
import { getLists } from "@/requests/GetDatas";
import React, { useEffect, useState } from "react";
import BlogCard from "../Reusable/BlogCard";

const BlogInfinite = ({ firstData }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (firstData && data?.length <= 0) {
      setData(firstData);
    }
    const handleScroll = () => {
      if (data?.length > 0) {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          const fetchData = async () => {
            const newData = await getLists(`blogs`, index, 4);

            setData((prev) => [...prev, ...newData?.data]);
            setIndex((prev) => prev + 1);
          };
          fetchData();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstData, data]);
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
