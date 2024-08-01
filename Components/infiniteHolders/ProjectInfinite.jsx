"use client";
import { getLists } from "@/requests/GetDatas";
import React, { useEffect, useState } from "react";
import ProjectCard from "../Reusable/ProjectCard";

const ProjectInfinite = ({ firstData }) => {
  const [data, setData] = useState(firstData);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const call = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("projects", index, 4, "ongoing");
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
      className="w-full text-gray-800 "
      style={{
        padding: "50px 20px",
        background: "white",
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
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectInfinite;
