"use client";
import { EditPageData } from "@/AdminDataHandle/AdminReq";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Abt = ({ data }) => {
  const [blob, setBlob] = useState("");
  const imageRef = useRef(null);

  const [editData, setEditData] = useState({
    newImage: null,
    experience: data?.experience || "", // Initialize with data if available
    image: data?.image || "",
  });

  useEffect(() => {
    if (data) {
      const obj = {};
      for (const key in data) {
        if (key !== "addiData") {
          obj[key] = data[key];
        }
      }
      setEditData((prev) => ({ ...prev, ...obj, ...data.addiData }));
    }
  }, [data]);

  const imageHandle = async (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const isValid = ext === "jpg" || ext === "png" || ext === "jpeg";
    if (!isValid) return alert("Enter Valid File Type!");
    setEditData((prev) => ({ ...prev, newImage: file }));
    const objectUrl = URL.createObjectURL(file);
    setBlob(objectUrl);
  };

  const changeText = (e) => {
    const { value, name } = e?.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const changeList = (e, index) => {
    const lists = editData?.list?[...editData?.list]:["", "", "", "", ""];
    const newListValue = e?.target?.value;
    lists[index] = newListValue;
    setEditData((prev) => ({ ...prev, list: lists }));
  };
  const submitData = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    for (const key in editData) {
      if (key === "list") {
        const newList = JSON.stringify(editData?.list);
        newForm.append(key, newList);
      } else {
        newForm.append(key, editData[key]);
      }
    }

    const response = await EditPageData("/abt", newForm);
    if (!response) return alert("Failed To Edit Data!");
    return alert("Page Edited Successfuly!");
  };
  return (
    <form
      onSubmit={submitData}
      className="w-full flex justify-evenly flex-wrap py-[100px]"
      style={{ gap: "20px" }}
    >
      {/* data image  */}
      <div className="h-fit w-full" style={{ maxWidth: "500px" }}>
        <div className="w-full relative h-fit">
          <Image
            src={blob || `/api/files/images/${editData?.image}`}
            alt=""
            width={800}
            height={800}
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 10px darkgray",
              cursor: "pointer",
              height: "600px",
              objectFit: "cover",
            }}
            onClick={() => {
              imageRef?.current?.click();
            }}
          />
        </div>

        <input
          type="file"
          ref={imageRef}
          onChange={imageHandle}
          className="hidden"
        />

        <div className="w-full py-[20px] flex flex-wrap around">
          <div
            className="w-1/2 h-fit flex justify-evenly shadow-lg rounded-2xl"
            style={{ minWidth: "140px", marginTop: "20px" }}
          >
            <input
              type="text"
              name="experience"
              className="w-[50px] p-[10px] font-bold"
              style={{ fontSize: "24px", width: "100px" }}
              value={editData.experience}
              onChange={changeText}
            />
            <p className="w-fit text-[16px] font-bold">
              <span>+YEARS</span>
              <br />
              <span style={{ color: "orange" }}>EXPERIENCE</span>
            </p>
          </div>

          <div
            className="w-1/2 h-fit flex justify-evenly shadow-lg rounded-2xl"
            style={{ display: "flex", minWidth: "140px", marginTop: "20px" }}
          >
            <input
              type="text"
              name="projects"
              className="w-[100px] p-[10px] font-bold"
              style={{ fontSize: "24px", width: "100px" }}
              value={editData.projects}
              onChange={changeText}
            />
            <p className="w-fit text-[16px] font-bold">
              <span>+COMPLETED</span>
              <br />
              <span style={{ color: "orange" }}>PROJECTS</span>
            </p>
          </div>
          <div
            className="w-1/2 h-fit flex justify-evenly shadow-lg rounded-2xl"
            style={{ minWidth: "140px", marginTop: "20px" }}
          >
            <input
              type="text"
              name="clients"
              className="w-[100px] p-[10px] font-bold"
              style={{ fontSize: "24px", width: "100px" }}
              value={editData.clients}
              onChange={changeText}
            />
            <p className="w-fit text-[16px] font-bold">
              <span>+HAPPY</span>
              <br />
              <span style={{ color: "orange" }}>CLIENTS</span>
            </p>
          </div>
          <div
            className="w-1/2 h-fit flex justify-evenly shadow-lg rounded-2xl"
            style={{ minWidth: "140px", marginTop: "20px" }}
          >
            <input
              type="text"
              name="team"
              className="w-[100px] p-[10px] font-bold"
              style={{ fontSize: "24px", width: "100px" }}
              value={editData.team}
              onChange={changeText}
            />
            <p className="w-fit text-[16px] font-bold">
              <span>+TEAM</span>
              <br />
              <span style={{ color: "orange" }}>MEMBERS</span>
            </p>
          </div>
        </div>
      </div>

      {/* data form */}
      <div className="w-full max-w-[600px] p-[20px]">
        <h1 className="font-bold text-[6rem] text-[orange]">ABOUT US</h1>
        <input
          className="font-bold text-[40px]"
          name="title"
          value={editData?.title}
          onChange={changeText}
        />
        <textarea
          className="text-[20px] text-gray-700"
          name="description"
          value={editData?.description}
          onChange={changeText}
          style={{ width: "100%", resize: "none", height: "200px" }}
        />
        <div className="text-[18px] font-semibold pl-[15px] text-gray-800">
          <br />
          {Array.from(Array(5)).map((_, index) => (
         
              <input
                className="p-[5px] w-full my-[15px]"
                key={index}
                value={editData?.list?.[index]}
                onChange={(e) => {
                  changeList(e, index);
                }}
                placeholder={`Enter List ${index+1}`}
              />
          ))}
        </div>
        <button
          type="submit"
          className="mt-[20px] py-[10px] px-[40px] text-[18px] text-white font-semibold bg-[orange] rounded-full hover:bg-red-400 transition-all duration-300"
        >
          Submit Changes
        </button>
      </div>
    </form>
  );
};

export default Abt;
