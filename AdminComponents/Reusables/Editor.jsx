"use client";
import { addNewData, EditPageData } from "@/AdminDataHandle/AdminReq";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
const JodtiEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Editor = ({ oldData, type, request }) => {
  const projectStructure = {
    title: "",
    description: "",
    content: "",
    image: "",
    status: "ongoing",
  };

  const teamStructure = {
    name: "",
    occupation: "",
    description: "",
    details: "",
    image: "",
  };

  const serviceStructure = {
    title: "",
    description: "",
    content: "",
    image: "",
  };

  const [imageBlob, setImageBlob] = useState("");
  const imageRef = useRef(null);

  const [data, setData] = useState(
    oldData !==null
      ? oldData
      : type === "teams"
      ? teamStructure
      : type === "projects"
      ? projectStructure
      : serviceStructure
  );

  const handleImage = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    setData((prev) => ({ ...prev, image: file }));
    const url = URL.createObjectURL(file);
    setImageBlob(url);
  };

  const handleText = (e) => {
    const { name, value } = e?.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const redirects = useRouter();

  const handleSubmit = async (e) => {
    e?.preventDefault();

    const contentValidation = data?.content || data?.details;
    const image = data?.image;

    if (!contentValidation || !image) return alert("Enter all data");

    const newData = new FormData();
    for (const key in data) {
      newData.append(key, data?.[key]);
    }

    if (request === "put") {
      const updated = await EditPageData(`/${type}/${oldData?._id}`, newData);
      if (updated) {
        return alert("Edited Successfully");
      } else {
        return alert("Could Not Edit. Enter all Data!");
      }
    } else if (request === "post") {
      const posted = await addNewData(`/${type}`, newData);
      if (posted) {
        alert("Data Added Successfully!");
        return redirects.push(`/dashboard/${type}`);
      } else {
        return alert("Could Not Add. Enter All Data!");
      }
    }
  };
  return (
    <form className="w-full p-[0px]" onSubmit={handleSubmit}>
      {/* make image secton */}
      <div className="w-full p-0 h-fit bg-blue-400">
        <Image
          width={1900}
          height={1900}
          style={{
            height: "600px",
            objectFit:
              type === "services"
                ? "contain"
                : !imageBlob && !oldData?.image
                ? "contain"
                : "cover",
          }}
          className="w-full"
          src={
            imageBlob
              ? imageBlob
              : oldData?.image
              ? `/api/files/${type}/${oldData?.image}`
              : "/add.png"
          }
          onClick={() => {
            imageRef?.current?.click();
          }}
        />
        <input
          type="file"
          onChange={handleImage}
          ref={imageRef}
          accept="image/*"
          className="hidden"
        />
      </div>
      {/* make text edits */}
      <div className="w-full p-[20px] max-w-[1040px] mx-auto py-[20px]">
        {type === "projects" ? (
          //forproject type select
          <>
            <select
              name="status"
              onChange={handleText}
              value={data?.status}
              className="px-[20px] py-[10px] text-[18px] rounded-xl focus:outline-none"
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </>
        ) : (
          ""
        )}
        {/* for title or name */}
        <input
          type="text"
          className="w-full p-[10px] focus:outline-none text-[35px] text-gray-800"
          name={type === "teams" ? "name" : "title"}
          onChange={handleText}
          placeholder={`Enter ${type === "teams" ? "name" : "title"}`}
          value={type === "teams" ? data?.name : data?.title}
          required
        />
        {/* for input of occupations */}
        {type === "teams" ? (
          <>
            <br />
            <br />
            <input
              type="text"
              name="occupation"
              className="w-full p-[10px] focus:outline-none text-[18px] text-blue-400"
              value={data?.occupation}
              placeholder="Enter occupation"
              onChange={handleText}
              required={type === "teams" ? true : false}
            />
          </>
        ) : (
          ""
        )}
        <br />
        <br />
        <textarea
          required
          name="description"
          value={data?.description}
          onChange={handleText}
          placeholder="Enter Short Description"
          className="w-full p-[10px] text-[16px] text-gray-800 h-[200px] resize-none focus:outline-none"
        />
        <br />
        <br />
        <JodtiEditor
          value={type === "teams" ? data?.details : data?.content}
          onChange={(newContent) => {
            setData((prev) => ({
              ...prev,
              [type === "teams" ? "details" : "content"]: newContent,
            }));
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          className="w-fit text-[16px] py-[10px] px-[40px] bg-blue-400 text-white rounded-xl tranbsition-all duration-300 hover:bg-blue-500"
        >
          {oldData ? "Save Changes" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Editor;
