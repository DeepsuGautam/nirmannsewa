"use client";
import React, { useEffect, useState } from "react";
import EditCard from "./EditCard";
import { getLists } from "@/requests/GetDatas";
import { useRouter } from "next/navigation";

const CardHolder = ({ type, initial }) => {
  const [data, setData] = useState(initial);
  const [index, setIndex] = useState(1);
  const [filter, setFilter] = useState("all");

  const handleData = (idx) => {
    const copiedData = [...data];
    copiedData.splice(idx, 1);
    setData(copiedData);
  };

  useEffect(() => {
    const call = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight && type!=="services"
      ) {
        const fetched = await getLists(type, index, 20, "all");
        const newdata = await fetched?.data;
        if (!fetched.error && newdata?.length > 0) {
          setData((prev) => [...prev, ...newdata]);
          setIndex((prev) => prev + 1);
        }
      }
    };

    if (data.length > 0) {
      window.addEventListener("scroll", call);

      return () => {
        window.removeEventListener("scroll", call);
      };
    }
  }, [data, index]);

  const redirect = useRouter();
  const handleLinks = () => {
    return redirect.push(`/dashboard/${type}/add`);
  };

  return (
    <section className="w-full flex flex-wrap justify-center gap-[20px] py-[80px]">
      {type === "projects" && (
        <div
          className="w-full px-[80px] flex justify-end"
          style={{ padding: "20px 100px" }}
        >
          <select
            onChange={(e) => {
              setFilter(e?.target?.value);
            }}
            value={filter}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "18px",
            }}
            className="bg-gray-100 text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm"
          >
            <option value="all">All</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      )}
      <button
        onClick={handleLinks}
        className="w-full max-w-[35rem] rounded-3xl shadow-2xl min-h-[300px] bg-white transition-all duration-200 hover:bg-gray-100 text-gray-700 p-[40px] text-[10rem]"
      >
        {"+"}
      </button>
      {Array.isArray(data) &&
        data?.map((item, index) => {
          if (filter === "all") {
            return (
              <EditCard
                type={type}
                data={item}
                key={index}
                index={index}
                handleDels={handleData}
              />
            );
          } else {
            if (item?.status === filter) {
              return (
                <EditCard
                  type={type}
                  data={item}
                  key={index}
                  index={index}
                  handleDels={handleData}
                />
              );
            }
          }
        })}
    </section>
  );
};

export default CardHolder;
