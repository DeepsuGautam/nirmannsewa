"use client";
import { deleteData } from "@/AdminDataHandle/AdminReq";
import LinkerComp from "@/Components/Reusable/LinkerComp";
import Image from "next/image";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const EditorComp = ({ data, type }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are You Sure You want to delete this item!"
    );
    if (!confirmed) return;
    const deleted = await deleteData(`/${type}/${data?._id}`);
    if (deleted) {
      alert("Deleted Successfully!");
      return window.location.reload();
    } else return alert("Failed To Delete!");
  };

  return (
    <div
      className="w-full relative bg-slate-50 rounded-2xl shadow-xl"
      style={{
        maxWidth: "280px",
        overflow: "hidden",
        boxShadow: "0 0 5px darkgray",
        height: "550px",
      }}
    >
      <Image
        src={`/api/files/${type}/${data?.image}`}
        width={350}
        height={350}
        style={{
          width: "100%",
          height: "200px",
          objectFit: type === "services" ? "contain" : "cover",
          padding: type === "services" ? "30px" : "0",
        }}
      />
      <div
        className="w-full p-[20px] h-full text-gray-800 bg-[#ebebeb]"
        style={{ fontSize: "16px", background: "#ebebeb" }}
      >
        <h1 className="font-bold text-[24px]" style={{ fontSize: "24px" }}>
          {data?.title}
        </h1>
        <p>{data?.description?.split(" ").slice(0, 19).join(" ")}</p>
        <div
          className="absolute w-full flex justify-center"
          style={{
            width: "100%",
            gap: "20px",
            fontSize: "20px",
            bottom: "20px",
            right: 0,
            left: 0,
          }}
        >
          <LinkerComp
            link={`/admin/${type}/${data?._id}`}
            addiStyle={{
              width: "fit-content",
              height: "fit-content",
              padding: "0",
            }}
          >
            <button
              className="bg-blue-400 rounded-2xl text-white mx-[20px] hover:bg-blue-500 transition-all duration-300"
              style={{ padding: "15px" }}
            >
              <FaPen />
            </button>
          </LinkerComp>
          <button
            className="bg-red-400 rounded-2xl text-white mx-[20px] hover:bg-red-500 transition-all duration-300"
            style={{ padding: "15px" }}
            onClick={handleDelete}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorComp;
