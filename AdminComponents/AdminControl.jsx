"use client";
import React, { useEffect, useState } from "react";
import CoverAdmin from "./comps/CoverAdmin";
import { EditPageData } from "@/AdminDataHandle/AdminReq";
import ListControl from "./comps/ListControl";

const AdminControl = ({ data, title, gradient, bg, type }) => {
  const [blobs, setBlobs] = useState({
    coverImage: "",
  });

  const [edit, setEdit] = useState({
    coverImage: null,
  });

  const imageHandler = (e) => {
    const file = e?.target?.files[0];
    const name = e?.target?.name;
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const isValid = ext === "jpg" || ext === "png" || ext === "jpeg";
    if (!isValid) return alert("Invalid File Type!");
    setEdit((prev) => ({ ...prev, [name]: file }));
    const url = URL.createObjectURL(file);
    setBlobs((prev) => ({ ...prev, [name]: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!edit?.coverImage) return alert("Change Cover Image!");
    const newForm = new FormData();
    newForm.append("cover", edit?.coverImage);
    const response = await EditPageData(`/${type}`, newForm);
    if (response) {
      return alert("Cover Changed Successfully!");
    } else {
      return alert("Failed To Change Cover Image");
    }
  };

  return (
    <section>
      <form className="w-full" onSubmit={handleSubmit}>
        <CoverAdmin
          title={title}
          imageHandler={imageHandler}
          bg={blobs?.coverImage || `/api/files/covers/${bg}`}
          gradient={gradient}
        />
        <button
          type="submit"
          className="w-full p-[15px] text-[18px] font-semibold text-white bg-red-400 hover:bg-red-500 transition-all duration-500"
        >
          Save Cover
        </button>
      </form>
      <ListControl data={data} type={type} />
    </section>
  );
};

export default AdminControl;
