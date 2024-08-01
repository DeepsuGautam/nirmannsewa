"use client";
import { addNewData } from "@/AdminDataHandle/AdminReq";
import React, { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TopSection = ({ item }) => {
  const [data, setData] = useState(item || {});
  const [imageBlob, setImageBlob] = useState("");
  const [vdoBlob, setVdoBlob] = useState("");

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const imageRef = useRef(null);
  const videoRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const uri = URL.createObjectURL(file);
    setImageBlob(uri);
    setData((prev) => ({ ...prev, background: file }));
  };

  const handleVideo = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const uri = URL.createObjectURL(file);
    setVdoBlob(uri);
    setData((prev) => ({ ...prev, video: file }));
  };

  const handlePrompt = (name) => {
    const value = window.prompt(data[name] || `Enter ${name} Link`);
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData();
    for (const key in data) {
      newForm.append(key, data[key]);
    }
    const posted = addNewData("/home", newForm);
    if (posted) return alert("Data Added Successfully!");
    return alert("Could not add data!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit bg-cover bg-no-repeat p-0 m-0 bg-fixed bg-center"
      style={{
        backgroundImage: imageBlob
          ? `url("${imageBlob}")`
          : `url("/api/files/covers/main_landing_background.jpg")`,
      }}
    >
      <div className="w-full h-fit pt-[60px] pb-[60px] text-[20px] flex flex-wrap justify-between bg-white text-gray-800 bg-opacity-75 gap-[50px] md:gap-0">
        <div className="w-full md:w-1/2 md:min-w-[350px] p-[20px] mx-auto">
          <div className="w-full max-w-[600px] mx-auto">
            <textarea
              className="text-[2.5rem] md:text-[5rem] h-[16rem] text-gray-800 font-semibold resize-none bg-transparent focus:outline-none"
              style={{ lineHeight: "5rem", md: { lineHeight: "8rem" } }}
              value={data.title}
              name="title"
              onChange={handleTextChange}
            />
            <textarea
              className="text-[1.6rem] md:text-[2rem] mt-[20px] w-full h-[150px] bg-transparent resize-none focus:outline-none"
              style={{ lineHeight: "30px" }}
              name="description"
              value={data.description}
              onChange={handleTextChange}
            />
            <button
              type="button"
              onClick={() => {
                imageRef.current.click();
              }}
              className="w-fit px-[20px] py-[10px] mt-[40px] bg-blue-400 hover:bg-blue-500 transition-all duration-300 text-white font-semibold rounded-full"
              style={{ fontSize: "16px" }}
            >
              Change Background
            </button>
            <input
              type="file"
              onChange={handleImage}
              ref={imageRef}
              className="hidden"
              accept="image/*"
            />
            <input
              type="file"
              onChange={handleVideo}
              ref={videoRef}
              className="hidden"
              accept="video/mp4"
            />
            <div
              className="w-full mt-[40px] text-[30px] flex flex-wrap"
              style={{ gap: "40px" }}
            >
              <button
                onClick={() => {
                  handlePrompt("facebook");
                }}
                name="facebook"
                type="button"
                className="w-fit p-[10px] text-[20px] border-4 border-gray-800 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                <FaFacebookF />
              </button>
              <button
                onClick={() => {
                  handlePrompt("instagram");
                }}
                name="instagram"
                type="button"
                className="w-fit p-[10px] text-[20px] border-4 border-gray-800 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                <FaInstagram />
              </button>
              <button
                onClick={() => {
                  handlePrompt("twitter");
                }}
                name="twitter"
                type="button"
                className="w-fit p-[10px] text-[20px] border-4 border-gray-800 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                <FaTwitter />
              </button>
            </div>
            <br />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white text-[16px] font-medium py-[5px] px-[20px] rounded-xl transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
        <div
          style={{
            borderRadius: "400px 0 0 400px",
          }}
          className="min-h-[40rem] relative shadow-xl w-full md:w-1/2 md:min-w-[350px] bg-cover bg-no-repeat p-0 bg-center overflow-hidden"
        >
          <video
            key={vdoBlob}
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover object-center"
          >
            <source
              src={vdoBlob || `/api/files/videos/homeVDO.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute w-full h-full bg-black bg-opacity-50"
            onClick={() => {
              videoRef.current.click();
            }}
          ></div>
        </div>
      </div>
    </form>
  );
};

export default TopSection;
