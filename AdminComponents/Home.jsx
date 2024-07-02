"use client";

import { EditPageData } from "@/AdminDataHandle/AdminReq";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = ({ data }) => {
  const [editData, setEditData] = useState({
    bgCover: null,
    video: null,
  });

  console.log(editData?.video);
  const [blobs, setBlobs] = useState({
    bgCover: "",
    video: "",
  });

  const videoElementRef = useRef(null);

  useEffect(() => {
    if (data) {
      setEditData((prev) => ({ ...prev, ...data }));
    }
  }, [data]);

  const textChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const videoUploadHandle = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const path = file.name.split(".").pop();
    const valid = path === "mp4";
    if (!valid) return alert("Enter .mp4 file!");
    setEditData((prev) => ({ ...prev, video: file }));
    const newBlobVideo = URL.createObjectURL(file);
    setBlobs((prev) => ({ ...prev, video: newBlobVideo }));
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const path = file.name.split(".").pop();
    const valid = path === "png" || path === "jpg" || "jpeg";
    if (!valid) return alert("Enter image file!");
    setEditData((prev) => ({ ...prev, bgCover: file }));
    const newBlobBgCover = URL.createObjectURL(file);
    setBlobs((prev) => ({ ...prev, bgCover: newBlobBgCover }));
  };

  const promptEdit = async (name, text) => {
    const value = window.prompt(text);
    if (!value) return;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (videoElementRef.current && blobs.video) {
      videoElementRef.current.load();
    }
  }, [blobs.video]);

  const submitData = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    for (const key in editData) {
      newForm.append(key, editData[key]);
    }

    const response = await EditPageData("", newForm);
    if (!response) return alert("Failed To Edit Data!");
    return alert("Page Edited Successfuly!");
  };

  return (
    <form
      className="w-full bg-cover bg-fixed bg-center"
      onSubmit={submitData}
      style={{
        backgroundImage: blobs.bgCover
          ? `url("${blobs.bgCover}")`
          : `url("/api/files/covers/main_landing_background.jpg")`,
      }}
    >
      <div className="w-full py-[80px] bg-white bg-opacity-80 flex">
        <div className="w-1/2 min-w-[350px] p-[20px]">
          <textarea
            name="title"
            value={editData.title}
            className="w-full h-[350px] font-bold text-[5rem] text-gray-800 bg-transparent p-[20px]"
            style={{ resize: "none" }}
            onChange={textChangeHandler}
          />
          <br />
          <textarea
            name="description"
            value={editData.description}
            className="w-full h-[200px] text-[2rem] text-gray-800 bg-transparent p-[20px]"
            style={{ resize: "none" }}
            onChange={textChangeHandler}
          />
          <button
            type="button"
            className="w-fit px-[30px] py-[15px] mx-[20px] bg-[#ff9900] hover:bg-red-400 transition-all duration-300 text-white font-semibold rounded-full text-[16px] mt-[20px]"
          >
            Contact Us Now!
          </button>
          <br />
          <br />
          <br />
          <div className="w-full p-[20px] flex gap-[20px] text-[25px]">
            <button
              type="button"
              className="w-fit p-[15px] border-4 text-gray-800 rounded-full border-gray-800"
              onClick={() => {
                promptEdit(
                  "facebook",
                  editData.facebook || "Enter Facebook Link:"
                );
              }}
            >
              <FaFacebookF />
            </button>
            <button
              type="button"
              className="w-fit p-[15px] border-4 text-gray-800 rounded-full border-gray-800"
              onClick={() => {
                promptEdit(
                  "instagram",
                  editData.instagram || "Enter Instagram Link:"
                );
              }}
            >
              <FaInstagram />
            </button>
            <button
              type="button"
              className="w-fit p-[15px] border-4 text-gray-800 rounded-full border-gray-800"
              onClick={() => {
                promptEdit(
                  "twitter",
                  editData.twitter || "Enter Twitter Link:"
                );
              }}
            >
              <FaTwitter />
            </button>
          </div>
          <br />
          <br />
          <input
            type="file"
            ref={imageRef}
            onChange={imageUpload}
            className="hidden"
          />
          <button
            onClick={() => {
              imageRef.current.click();
            }}
            type="button"
            style={{ padding: "15px 50px" }}
            className="w-fit py-[15px] px-[50px] border-4 border-gray-700 text-gray-700 rounded-full m-[20px] text-[16px] font-semibold bg-white bg-opacity-80"
          >
            Change Background
          </button>
          <br />
          <br />
          <button
            type="submit"
            style={{ padding: "15px 50px" }}
            className="w-fit py-[15px] px-[50px] border-4 border-gray-800 text-gray-700 rounded-full m-[20px] text-[16px] font-semibold bg-blue-400"
          >
            Save
          </button>
        </div>
        <div
          style={{
            borderRadius: "500px 0 0 500px",
            cursor: "pointer",
          }}
          className="min-h-[400px] relative shadow-xl md:w-1/2 min-w-[350px] bg-cover bg-no-repeat p-0 w-full bg-center overflow-hidden cursor-pointer"
          onClick={() => {
            videoRef.current.click();
          }}
        >
          <input
            type="file"
            className="hidden"
            onChange={videoUploadHandle}
            ref={videoRef}
          />
          <video
            ref={videoElementRef}
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover object-center cursor-pointer"
          >
            <source
              src={blobs.video || `/api/files/videos/homeVDO.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute w-full h-full bg-black bg-opacity-50">
            <h1
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "24px",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[24px] text-white"
            >
              Click To Change Video
            </h1>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Home;
