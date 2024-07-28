"use client";

import React, { useEffect, useState } from "react";
import CoverAdmin from "./CoverAdmin";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { EditPageData } from "@/AdminDataHandle/AdminReq";

const ContactHandler = ({ data }) => {
  const [blob, setBlob] = useState("");
  const [editData, setEditData] = useState({
    newImage: null,
  });

  console.log(data);

  useEffect(() => {
    if (data) {
      setEditData((prev) => ({ ...prev, ...data }));
    }
  }, [data]);

  const imageHandler = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    setEditData((prev) => ({ ...prev, newImage: file }));
    const url = URL.createObjectURL(file);
    setBlob(url);
  };

  const textHandler = (e) => {
    const { name, value } = e?.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinks = (key, text) => {
    const newPrompt = window.prompt(text);
    setEditData((prev) => ({ ...prev, [key]: newPrompt }));
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    const dataTo = new FormData();
    for(const key in editData){
      dataTo.append(key, editData[key])
    }
    const edited = await EditPageData("/contact", dataTo)
    if(edited){
      return alert("Contact Page Edited Successfully!")
    }else{
      return alert("Could not edit contact page!")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      {/* cover */}
      <CoverAdmin
        title={"CONTACT US"}
        bg={blob || `/api/files/covers/contactCover.jpg`}
        gradient={
          "linear-gradient(to bottom, rgba(112, 255, 150, 0.5), rgba(255, 255, 255, 0.25))"
        }
        imageHandler={imageHandler}
      />

      <div className="w-full lg:flex gap-0 justify-center text-gray-800">
        <div
          className="contactBox"
          style={{ padding: "40px", background: "#58a38e" }}
        >
          <h1 className="text-[30px] font-bold">Contact Information</h1>
          <br />
          <br />
          <br />
          <span
            className="px-[10px] text-[18px] font-semibold"
            style={{ padding: "0 10px" }}
          >
            Enter Email :{" "}
          </span>
          <input
            type="email"
            name="email"
            className="w-full"
            style={{
              padding: "10px",
              background: "transparent",
              fontSize: "20px",
            }}
            value={editData?.email}
            onChange={textHandler}
          />
          <br />
          <br />
          <br />
          <span
            className="px-[10px] text-[18px] font-semibold"
            style={{ padding: "0 10px" }}
          >
            Enter Phone :{" "}
          </span>
          <input
            type="text"
            name="phone"
            className="w-full"
            style={{
              padding: "10px",
              background: "transparent",
              fontSize: "20px",
            }}
            value={editData?.phone}
            onChange={textHandler}
          />
          <br />
          <br />
          <br />
          <span
            className="px-[10px] text-[18px] font-semibold"
            style={{ padding: "0 10px" }}
          >
            Enter location :{" "}
          </span>
          <input
            type="text"
            name="location"
            className="w-full"
            style={{
              padding: "10px",
              background: "transparent",
              fontSize: "20px",
            }}
            value={editData?.location}
            onChange={textHandler}
          />
          <br />
          <br />
          <div
            className="flex flex-wrap"
            style={{ padding: "10px", gap: "20px" }}
          >
            <button
              type="button"
              style={{ fontSize: "35px", padding: "5px", width: "fit-content" }}
              onClick={() => {
                handleLinks(
                  "facebook",
                  editData?.facebook || "Enter Facebook Link!"
                );
              }}
            >
              <FaFacebook />
            </button>
            <button
              type="button"
              style={{ fontSize: "35px", padding: "5px", width: "fit-content" }}
              onClick={() => {
                handleLinks(
                  "instagram",
                  editData?.instagram || "Enter Instagram Link!"
                );
              }}
            >
              <FaInstagram />
            </button>
            <button
              type="button"
              style={{ fontSize: "35px", padding: "5px", width: "fit-content" }}
              onClick={() => {
                handleLinks(
                  "twitter",
                  editData?.twitter || "Enter Twitter Link!"
                );
              }}
            >
              <FaTwitter />
            </button>
          </div>
          <br />
          <br />
          <button className="w-full bg-blue-400 font-bold text-[18px] transition-all duration-300 p-[15px] rounded-full hover:bg-blue-500">
            Send Data
          </button>
        </div>
        <div className="w-full" style={{ padding: "20px" }}>
          <span
            className="px-[10px] text-[18px] font-semibold"
            style={{ padding: "0 10px" }}
          >
            Enter Googlemap embed:
          </span>
          <br />
          <input
            type="text"
            value={editData?.addiEmbeds}
            name="addiEmbeds"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "18px",
              border: "2px solid",
            }}
            onChange={textHandler}
          />
          <br />
          <br />
          <div
          className="mapAdminHolder"
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{ __html: editData?.addiEmbeds || "" }}
          ></div>
        </div>
      </div>
    </form>
  );
};

export default ContactHandler;
