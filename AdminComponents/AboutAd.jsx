"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CoverAdmin from "./comps/CoverAdmin";
import AboutEditor from "./comps/AboutEditor";
import dynamic from "next/dynamic";
import { EditPageData } from "@/AdminDataHandle/AdminReq";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AboutAd = ({ data }) => {
  const [blobs, setBlobs] = useState({
    coverImage: "",
    historyImage: "",
  });

  const [edit, setEdit] = useState({
    coverImage: null,
    historyImage: null,
    history: { title: "", content: "" },
  });

  useEffect(() => {
    if (data) {
      const obj = {};
      for (const key in data) {
        if (key !== "addiData") {
          obj[key] = data[key];
        }
      }
      setEdit((prev) => ({ ...prev, ...obj, ...data.addiData }));
    }
  }, [data]);

  const imageRef = useRef(null);

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

  const textHandler = (e) => {
    const { name, value } = e?.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
  };

  const historyTitleHandle = (e) => {
    const historyObj = { ...edit?.history };
    historyObj.title = e?.target?.value;
    setEdit((prev) => ({ ...prev, history: historyObj }));
  };

  const joditConfig = useMemo(
    () => ({
      width: "100%",
      minHeight: "700px",
      style: {
        background: "rgba(22, 29, 41)",
        fontSize: "20px", // Custom background color
      },
    }),
    [data]
  );

  const handleJoditChange = (newContent) => {
    const historyObj = { ...edit?.history };
    historyObj.content = newContent;
    setEdit((prev) => ({ ...prev, history: historyObj }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    for (const key in edit) {
      if (key === "history") {
        const newList = JSON.stringify(edit?.history);
        newForm.append(key, newList);
      } else {
        newForm.append(key, edit[key]);
      }
    }

    const response = await EditPageData("/about", newForm);
    if (!response) return alert("Failed To Edit Data!");
    return alert("Page Edited Successfuly!");
  };

  return (
    <form className="w-full" onSubmit={submitData}>
      <CoverAdmin
        title={"ABOUT US"}
        imageHandler={imageHandler}
        bg={blobs?.coverImage || `/api/files/covers/aboutPgBg.jpg`}
        gradient={
          "linear-gradient(to bottom, rgba(255,180, 0, 0.5), rgba(255, 255, 255, 0.5))"
        }
      />
      <AboutEditor data={edit} textHandler={textHandler} />
      <div
        className="w-full bg-cover bg-fixed"
        style={{
          backgroundImage: blobs?.historyImage
            ? `url("${blobs?.historyImage}")`
            : `url("/api/files/images/${edit?.history?.image}")`,
        }}
      >
        <div
          className="w-full px-[20px] py-[150px]"
          style={{ background: "rgba(22, 29, 41, 0.8)", padding: "100px 20px" }}
        >
          <div
            className="w-full mx-auto text-white"
            style={{ maxWidth: "1400px" }}
          >
            <input
              type="text"
              value={edit?.history?.title}
              onChange={historyTitleHandle}
              className="w-full p-[20px] text-[6rem] font-bold text-orange-400 bg-transparent"
              style={{ color: "orange" }}
            />
            <br />
            <br />
            <button
              type="button"
              className="w-fit"
              style={{
                padding: "20px 50px",
                fontSize: "20px",
                border: "2px solid white",
                borderRadius: "20px",
              }}
              onClick={() => {
                imageRef?.current?.click();
              }}
            >
              Choose Image
            </button>
            <input
              type="file"
              name="historyImage"
              onChange={imageHandler}
              ref={imageRef}
              className="hidden"
            />
            <br />
            <br />
            <br />
            <br />
            <JoditEditor
              config={joditConfig}
              value={edit?.history?.content}
              onChange={handleJoditChange}
            />
            <br />
            <br />
            <br />
            <br />
            <button
              className="bg-blue-400 hover:bg-blue-500 rounded-full transition-all duration-300"
              style={{ fontSize: "20px", width: "100%", padding: "10px" }}
            >
              Edit About Page
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AboutAd;
