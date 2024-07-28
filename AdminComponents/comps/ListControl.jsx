"use client";

import { getLists } from "@/requests/GetDatas";
import React, { useState, useEffect } from "react";
import EditorComp from "./EditorComp";
import LinkerComp from "@/Components/Reusable/LinkerComp";

const ListControl = ({ data, type }) => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    if (data) {
      setDataList(data);
    }
  }, [data]);

  const [index, setIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (dataList?.length > 0) {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          const fetchData = async () => {
            const newData = await getLists(`/${type}`, index, 12);

            setDataList((prev) => [...prev, ...newData?.data]);
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
  }, [dataList, index]);

  return (
    <section
      className="w-full py-[100px] flex flex-wrap justify-evenly bg-white px-[25px]"
      style={{ maxWidth: "1400px", margin: "0 auto", gap: "20px" }}
    >
      <LinkerComp link={`/admin/${type}/create`} style={{width:"100%"}}> <button
        className="w-full font-bold rounded-2xl hover:shadow-xl mb-[40px] transition-all duration-300"
        style={{
          fontSize: "100px",
          background: "#ededed",
          marginBottom: "40px",
          color: "dimgray",
        }}
      >
        +
      </button>
      </LinkerComp>
     
      {/* Your content here */}
      {dataList?.map((item, idx) => (
        <EditorComp key={idx} data={item} type={type} />
      ))}
    </section>
  );
};

export default ListControl;
