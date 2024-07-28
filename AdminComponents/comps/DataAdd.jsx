"use client";
import { addNewData, EditPageData } from "@/AdminDataHandle/AdminReq";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const DataAdd = ({ type }) => {
  const [editorData, setEditorData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [blob, setBlob] = useState("");

  const imageRef = useRef(null);

  const imageHandler = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setBlob(imageUrl);
    setEditorData((prev) => ({ ...prev, image: file }));
  };

  const textChange = (e) => {
    const { name, value } = e?.target;
    setEditorData((prev) => ({ ...prev, [name]: value }));
  };

  const contentEditor = (value) => {
    setEditorData((prev) => ({ ...prev, content: value }));
  };

  const config = useMemo(
    () => ({
      width: "100%",
      minHeight: "500px",
      height: "fit-content",
      style: { fontSize: "20px" },
    }),
    [EditPageData]
  );

  const submitData = async (e) => {
    e?.preventDefault();
    if (
      !editorData?.title ||
      !editorData?.description ||
      !editorData?.content ||
      !editorData?.image
    ) {
      return alert("Enter All Fields!");
    }
    const newFormData = new FormData();
    for (const key in editorData) {
      newFormData.append(key, editorData[key]);
    }
    const edited = await addNewData(`/${type}`, newFormData);
    if (edited) {
      return alert(`Data Added Successfully!`);
    } else {
      return alert(`Failed to Add!`);
    }
  };

  return (
    <form onSubmit={submitData}>
      <Image
        src={blob || `/add.png`}
        width={4000}
        height={4000}
        className="w-full h-[500px]"
        style={{
          width: "100%",
          height: "500px",
          objectFit: type !== "services" || blob ? "cover" : "contain",
          padding: type === "services" || !blob ? "50px" : "0",
          background: "#69b4ff",
        }}
        onClick={() => {
          imageRef?.current?.click();
        }}
      />
      <input
        type="file"
        accept={type === "services" ? "image/png" : "image/*"}
        ref={imageRef}
        onChange={imageHandler}
        className="hidden"
      />
      <br />
      <div className="w-full p-[20px] mx-auto" style={{ maxWidth: "1400px" }}>
        <input
          name="title"
          type="text"
          value={editorData?.title}
          onChange={textChange}
          placeholder="Enter Title"
          required
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "40px",
            fontWeight: "700",
          }}
        />
        <br />
        <br />
        <textarea
          name="description"
          id=""
          value={editorData?.description}
          onChange={textChange}
          placeholder="Enter Description"
          style={{
            width: "100%",
            height: "150px",
            resize: "none",
            padding: "15px",
            fontSize: "20px",
          }}
          required
        />
        <br />
        <br />
        <JoditEditor
          config={config}
          value={editorData?.content}
          onChange={contentEditor}
        />

        <button
          type="submit"
          className="rounded-full"
          style={{
            width: "100%",
            margin: "20px auto",
            fontSize: "18px",
            background: "#69b4ff",
            color: "white",
            fontWeight: "600",
            padding: "15px",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DataAdd;
