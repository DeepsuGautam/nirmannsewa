"use client";
import { deleteData } from "@/AdminDataHandle/AdminReq";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EditCard = ({ type, data, index, handleDels }) => {
  const handleData = async () => {
    const confirmed = window.confirm("Delete This Data");
    if (!confirmed) return;
    const deleted = await deleteData(`/${type}/${data?._id}`);
    if (!deleted) return alert("Data Not Deleted!");
    return handleDels(index);
  };

  return (
    <div className="w-full max-w-[35rem] p-0 rounded-3xl shadow-2xl ">
      <Image
        src={`/api/files/${type}/${
          data?.image || data?.icon || data?.cover || data?.banner
        }`}
        width={350}
        height={200}
        loading="lazy"
        className="w-full h-[200px] object-cover rounded-3xl"
        style={{ objectFit: type === "services" ? "contain" : "cover" }}
      />

      <div className="w-full p-[20px]">
        <h1 className="w-full h-[40px] overflow-hidden text-[22px]">
          {data?.title || data?.name}
        </h1>
        <h2 className="w-full h-[22px] font-semibold overflow-hidden text-blue-400 text-[16px]">
          {data?.subtitle || data?.occupation}
        </h2>
        <p className="w-full h-[100px] overflow-hidden text-[16px]">
          {data?.description}
        </p>
        <div className="w-full flex flex-wrap gap-[20px] py-[20px]">
          <Link href={`/dashboard/${type}/${data?._id}`}>
            <button className="w-fit p-[10px] text-[14px] rounded-xl text-white bg-blue-400 transition-all duration-200 hover:bg-blue-500">
              Edit
            </button>
          </Link>
          <button
            onClick={handleData}
            className="w-fit p-[10px] text-[14px] rounded-xl text-white bg-red-400 transition-all duration-200 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
