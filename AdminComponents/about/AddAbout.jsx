"use client";
import {
  addNewData,
  deleteData,
  EditPageData,
} from "@/AdminDataHandle/AdminReq";
import Image from "next/image";

import React, { useRef, useState } from "react";

const AddAbout = ({ data, index}) => {
  const [edits, setEdits] = useState(
    data || { image: "", title: "", description: "" }
  );
  const [blob, setBlob] = useState("");

  const handleImage = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    setEdits((prev) => ({ ...prev, image: file }));
    const url = URL.createObjectURL(file);
    setBlob(url);
  };

  const imageRef = useRef(null);

  const handleText = (e) => {
    const { name, value } = e?.target;
    setEdits((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if(!edits?.image) return alert("Add Image")
    const newForm = new FormData();
    for (const key in edits) {
      newForm.append(key, edits?.[key]);
    }
    if (data) {
      const edited = await EditPageData(`/about/${data?._id}`, newForm);
      if (!edited) return alert("Could Not Edit!");
      alert("Edited Successfully!");
      return window.location.reload()
    } else {
      const added = await addNewData(`/about`, newForm);
      if (!added) return alert("Could Not Add!");
      else {
        alert("Added Successfully!")
        return window.location.reload();
      }
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete This Section!");
    if (!confirmed) return;
    const del = await deleteData(`/about/${data?._id}`);
    if (!del) return alert("Could Not Delete!");
    alert("Deleted Successfully!");
    return window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit py-[80px] flex flex-wrap-reverse justify-evenly gap-[4rem]"
      style={{
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        background: index % 2 === 0 ? "white" : "#f0f3f5",
      }}
    >
      <Image
        src={blob ?blob:edits?.image?`/api/files/abouts/${edits?.image}`:"/add.png"}
        width={500}
        alt="about"
        onClick={() => {
          imageRef?.current?.click();
        }}
        height={500}
        loading="lazy"
        style={{
          objectFit: data?.image || blob ? "cover" : "contain",
        }}
        className="w-[calc(100%-40px)] h-fit min-h-[300px] max-h-[500px] max-w-[500px] object-center rounded-3xl shadow-xl"
      />
      <input
        type="file"
        onChange={handleImage}
        ref={imageRef}
        accept="image/*"
        className="hidden"
      />
      <div className="w-full p-[2rem] max-w-[500px] flex flex-col justify-center text-gray-600 ">
        <input
        placeholder="Enter Title"
          onChange={handleText}
          value={edits?.title}
          name="title"
          required
          className="text-[5rem] w-full focus:outline-none bg-transparent"
        />
        <br />
        <textarea
        required
        placeholder="Enter Description"
          onChange={handleText}
          value={edits?.description}
          name="description"
          className="text-[16px] h-[150px] bg-transparent resize-none w-full focus:outline-none text-gray-500"
        />
        <br />
        <div className="w-full flex flex-wrap gap-[20px]">
          <button
            type="submit"
            className="w-fit px-[20px] py-[10px] text-[14px] bg-blue-400 text-white transition-all duration-300 rounded-xl hover:bg-blue-500"
          >
            {data ? "Submit Changes" : "Save"}
          </button>
          {data && (
            <button
              onClick={handleDelete}
              type="button"
              className="w-fit px-[20px] py-[10px] text-[14px] bg-red-400 text-white transition-all duration-300 rounded-xl hover:bg-red-500"
            >
              Delete Section
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddAbout;
