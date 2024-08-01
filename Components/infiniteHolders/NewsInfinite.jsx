"use client";
import { getLists } from "@/requests/GetDatas";
import React, { useEffect, useState } from "react";
import NewsCard from "../Reusable/NewsCard";

const NewsInfinite = ({ firstData }) => {
  const [data, setData] = useState(firstData);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const call = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("projects", index, 4, "completed");
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
      className="w-full flex flex-col text-gray-800 "
      style={{
        padding: "50px 20px",
        background: "white",
        textAlign: "center",
        maxWidth: "1400px",
        padding: "80px 0 20px 0",
        gap: "40px",
        margin: "0 auto",
      }}
    >
      {data?.map((item, index) => (
        <NewsCard key={index} data={item} />
      ))}
    </section>
  );
};

export default NewsInfinite;
