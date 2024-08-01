"use client";
import { addNewData } from "@/AdminDataHandle/AdminReq";
import React, { useRef, useState } from "react";

const CoverEditor = ({ img, title }) => {
  const [image, setImage] = useState(null);
  const [blob, setBlob] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    const form = new FormData();
    form.append("cover", image);
    form.append("name", img);
    const posted = await addNewData("/covers", form);
    if (posted) return;
    return alert("Could Not Change Cover Image!");
  };

  const imgref = useRef(null);

  const handleImageChange = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const uri = URL.createObjectURL(file);
    setImage(file);
    setBlob(uri);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit bg-cover bg-center"
      style={{ backgroundImage:blob?`url("${blob}")`: `url("/api/files/covers/${img}")` }}
    >
      <div className="w-full text-center bg-gradient-to-t from-black via-blue-950 to-transparent bg-fixed px-[20px] py-[100px]  font-bold text-[4rem] text-white">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={imgref}
          onChange={handleImageChange}
        />
        <h1 className="w-full h-fit text-[40px] text-white py-[40px]">{title}</h1>
        <div className="w-full flex flex-row flex-wrap justify-center gap-[20px]">
          <button
            type="button"
            onClick={() => {
              imgref?.current?.click();
            }}
            className=" text-[16px] w-fit py-[10px] px-[30px] bg-transparent text-white"
            style={{ border: "2px solid white", borderRadius: "20px" }}
          >
            Change Image
          </button>
          <button
            type="submit"
            className="text-[16px]  w-fit py-[10px] px-[30px] bg-transparent text-blue-200"
            style={{ border: "2px solid skyblue", borderRadius: "20px" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default CoverEditor;
