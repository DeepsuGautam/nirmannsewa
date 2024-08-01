"use client";
import { addNewData } from "@/AdminDataHandle/AdminReq";
import React, { useState } from "react";

const ContactEdit = ({ data }) => {
  const [newData, setNewData] = useState(data);

  const handleText = (e) => {
    const { name, value } = e?.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const posted = await addNewData("/contact", JSON.stringify(newData));
    if (!posted) return alert("Could not make changes!");
    return alert("Successfully made changes!");
  };

  return (
    <form className="w-full p-[20px]" onSubmit={handleSubmit}>
      <h1 className="text-[35px]">Edit Contact Page</h1>
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter Email</h1>
      <input
        type="email"
        onChange={handleText}
        name="email"
        className="max-w-[400px] w-full p-[10px] rounded-xl outline outline-1 text-gray-700 text-[18px]"
        placeholder="Enter Email address"
        value={newData?.email}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter Phone No.</h1>
      <input
        type="text"
        onChange={handleText}
        name="phone"
        className="max-w-[400px] w-full p-[10px] rounded-xl outline outline-1 text-gray-700 text-[18px]"
        placeholder="Enter Phone address"
        value={newData?.phone}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter Location</h1>
      <input
        type="text"
        onChange={handleText}
        name="location"
        className="max-w-[400px] w-full p-[10px] rounded-xl outline outline-1 text-gray-700 text-[18px]"
        placeholder="Enter Email address"
        value={newData?.location}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter Facebook Link</h1>
      <input
        type="text"
        onChange={handleText}
        name="facebook"
        className="max-w-[400px] w-full p-[10px] outline rounded-xl outline-1 text-gray-700 text-[18px]"
        placeholder="Enter facebook link"
        value={newData?.facebook}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter Instagram Link</h1>
      <input
        type="text"
        onChange={handleText}
        name="instagram"
        className="max-w-[400px] w-full p-[10px] rounded-xl outline outline-1 text-gray-700 text-[18px]"
        placeholder="Enter instagram link"
        value={newData?.instagram}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter twitter Link</h1>
      <input
        type="text"
        onChange={handleText}
        name="twitter"
        className="max-w-[400px] w-full p-[10px] rounded-xl outline outline-1 text-gray-700 text-[18px]"
        placeholder="Enter twitter link"
        value={newData?.twitter}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter Linkedin Link</h1>
      <input
        type="text"
        onChange={handleText}
        name="linkedin"
        className="max-w-[400px] w-full rounded-xl p-[10px] outline outline-1 text-gray-700 text-[18px]"
        placeholder="Enter linkedin link"
        value={newData?.linkedin}
      />
      <br />
      <br />
      <br />
      <h1 className="text-[16px]">Enter goodlemap link</h1>
      <textarea
        name="addiEmbeds"
        onChange={handleText}
        className="max-w-[400px] w-full p-[10px] outline outline-1 h-[150px] resize-none rounded-xl text-gray-700 text-[18px]"
        placeholder="Enter googlemaps link"
        value={newData?.addiEmbeds}
      />
      <br />
      <br />
      <br />
      <button
        type="submit"
        className="w-fit rounded-full text-[16px] bg-blue-400 hover:bg-blue-500 text-white transition-all duration-300 py-[5px] px-[20px]"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ContactEdit;
