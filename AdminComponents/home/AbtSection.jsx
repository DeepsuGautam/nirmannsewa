"use client";
import { addNewData } from "@/AdminDataHandle/AdminReq";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AbtSection = ({ item }) => {
  const [data, setData] = useState(item);
  const [blob, setBlob] = useState("");

  const handleAddiData = (e) => {
    const { name, value } = e?.target;
    const addi = { ...data?.addiData };
    addi[name] = value;
    setData((prev) => ({ ...prev, addiData: addi }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const image = URL.createObjectURL(file);
    setData((prev) => ({ ...prev, image: file }));
    setBlob(image);
  };

  const imgref = useRef(null);

  const handleTextChange = (e) => {
    const { name, value } = e?.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleListChange = async (e) => {
    const { name, value } = e?.target;
    const index = parseInt(await name?.split("-")[1]);
    const addiData = { ...data?.addiData };
    const lists = [...addiData?.list];
    lists[index] = value;
    addiData.list = lists;
    setData((prev) => ({ ...prev, addiData: addiData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in data) {
      if (key !== "addiData") {
        form.append(key, data?.[key]);
      } else {
        form.append(key, JSON.stringify(data?.[key]));
      }
    }
    const added = await addNewData("/home/abt", form);
    if (added) return alert("Edited Successfully!");
    return alert("Could Not Edit Data!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-0 m-0 mx-auto flex flex-wrap-reverse py-[75px] px-[20px] justify-evenly bg-white gap-[20px]"
    >
      <div className="w-full max-w-[450px]">
        <Image
          onClick={() => {
            imgref?.current?.click();
          }}
          src={blob||`/api/files/images/${data?.image}`}
          loading="lazy"
          width={500}
          height={500}
          alt=""
          className="w-full h-[450px] object-cover rounded-3xl"
          onChange={handleAddiData}
        />
        <input
          type="file"
          className="hidden"
          onChange={handleImage}
          ref={imgref}
          accept="image/*"
        />
        <br />
        <br />
        <div className="w-full flex flex-wrap justify-around gap-[20px] text-[12px] font-medium text-orange-400">
          <div className="w-full p-[10px] lg:w-[200px] flex justify-evenly shadow-lg">
            <input
              type="text"
              name="experience"
              value={data?.addiData?.experience}
              className="w-full  outline-none hover:outline-none bg-transparent text-blue-950 text-[35px] p-[5px]"
              onChange={handleAddiData}
            />
            <div className="w-fit flex flex-col justify-center px-[20px]">
              YEAR
              <br />
              EXPERIENCE
            </div>
          </div>
          <div className="w-full lg:w-[200px] flex justify-evenly shadow-lg">
            <input
              type="text"
              name="projects"
              value={data?.addiData?.projects}
              className="w-full outline-none hover:outline-none bg-transparent text-blue-950 text-[35px] p-[5px]"
              onChange={handleAddiData}
            />
            <div className="w-fit flex flex-col justify-center px-[20px]">
              COMPLETED
              <br />
              PROJECTS
            </div>
          </div>
          <div className="w-full lg:w-[200px] flex justify-evenly shadow-lg">
            <input
              type="text"
              name="clients"
              value={data?.addiData?.clients}
              className="w-full outline-none hover:outline-none bg-transparent text-blue-950 text-[35px] p-[5px]"
              onChange={handleAddiData}
            />
            <div className="w-fit flex flex-col justify-center px-[20px]">
              HAPPY
              <br />
              CLIENTS
            </div>
          </div>
          <div className="w-full lg:w-[200px] flex justify-evenly shadow-lg">
            <input
              type="text"
              onChange={handleAddiData}
              name="team"
              value={data?.addiData?.team}
              className="w-full outline-none hover:outline-none bg-transparent text-blue-950 text-[35px] p-[5px]"
            />
            <div className="w-fit flex flex-col justify-center px-[20px]">
              TEAM
              <br />
              MEMBERS
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[600px] p-[20px]">
        <h1 className="font-bold text-[4rem] text-blue-400">ABOUT US</h1>
        <textarea
          required
          name="title"
          value={data?.title}
          onChange={handleTextChange}
          className="font-medium text-[3rem] text-gray-800 w-full focus:outline-none"
        />
        <textarea
          required
          name="description"
          className="text-[18px] text-gray-500 w-full h-[200px]"
          onChange={handleTextChange}
          value={data?.description}
        />
        <ul
          className="text-[18px] font-semibold pl-[15px] text-orange-400"
          style={{ listStyle: "disc" }}
        >
          {Array.from(Array(5)).map((_, index) => (
            <input
              placeholder="Enter List item"
              name={`list-${index}`}
              value={data?.addiData?.list?.[index]}
              className="my-[5px] p-[5px]"
              onChange={handleListChange}
              key={index}
            />
          ))}
        </ul>
        <button
          type="submit"
          className="mt-[20px] py-[10px] px-[30px] text-[16px] text-white font-semibold bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-300"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default AbtSection;
