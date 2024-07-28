"use client";
import { EditPageData } from "@/AdminDataHandle/AdminReq";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const GeneralSettings = ({ data, image }) => {
  const [newEdit, setNewEdit] = useState({
    logo: null,
  });

  const [blob, setBlob] = useState("");

  const handleText = (e) => {
    const { name, value } = e?.target;
    setNewEdit((prev) => ({ ...prev, [name]: value }));
  };

  const ref = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBlob(url);
    setNewEdit((prev) => ({ ...prev, logo: file }));
  };

  useEffect(() => {
    if (data) {
      setNewEdit((prev) => ({ ...prev, ...data }));
    }
  }, [data]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    for (const key in newEdit) {
      newForm.append(key, newEdit[key] ?? "");
    }
    const success = await EditPageData("/footer", newForm);
    if (success) {
      alert("Edited Successfully!");
      return window.location.reload();
    } else {
      return alert("Something Went wrong!");
    }
  };
  return (
    <form onSubmit={handleSubmission}>
      <Image
        src={blob || image}
        className="rounded-full"
        width={200}
        height={200}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          margin: "20px",
          boxShadow: "0 0 5px darkgray",
        }}
      />
      <button
        type="button"
        className="w-fit rounded-full transition-all duration-300 hover:shadow-lg font-semibold"
        style={{
          padding: "15px",
          margin: "20px",
          fontSize: "18px",
          background: "#dedede",
        }}
        onClick={() => {
          ref?.current?.click();
        }}
      >
        Choose new Logo
      </button>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImage}
        ref={ref}
      />
      <br />
      <br />
      <input
        style={{ margin: "0 20px", padding: "10px", fontSize: "18px" }}
        className="mx-[20px] border-2 border-gray-700 rounded-2xl"
        type="text"
        name="facebook"
        value={newEdit?.facebook}
        onChange={handleText}
        placeholder="Enter Facebook Link"
      />
      <br />
      <br />
      <input
        style={{ margin: "0 20px", padding: "10px", fontSize: "18px" }}
        className="mx-[20px] border-2 border-gray-700 rounded-2xl"
        type="text"
        name="instagram"
        value={newEdit?.instagram}
        onChange={handleText}
        placeholder="Enter Instagram Link"
      />
      <br />
      <br />
      <input
        style={{ margin: "0 20px", padding: "10px", fontSize: "18px" }}
        className="mx-[20px] border-2 border-gray-700 rounded-2xl"
        type="text"
        name="twitter"
        value={newEdit?.twitter}
        onChange={handleText}
        placeholder="Enter Twitter Link"
      />
      <br />
      <br />
      <input
        style={{ margin: "0 20px", padding: "10px", fontSize: "18px" }}
        className="mx-[20px] border-2 border-gray-700 rounded-2xl"
        type="text"
        name="linkedin"
        value={newEdit?.linkedin}
        onChange={handleText}
        placeholder="Enter Linkedin Link"
      />
      <br />
      <button
        type="submit"
        className="h-fit bg-blue-400 rounded-full text-white"
        style={{ padding: "10px 30px", fontSize: "18px", margin: "20px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default GeneralSettings;
