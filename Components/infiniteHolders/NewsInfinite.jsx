"use client";
import { getLists } from "@/requests/GetDatas";
import React, { useEffect, useState } from "react";
import NewsCard from "../Reusable/NewsCard";

const NewsInfinite = ({ firstData }) => {
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
            const newData = await getLists(`projects`, index, 4);

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
