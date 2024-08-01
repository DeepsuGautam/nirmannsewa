"use client"
import { addNewData } from "@/AdminDataHandle/AdminReq";
import Image from "next/image";
import React, { useRef, useState } from "react";

const ChangeLogo = () => {
  const [image, setImage] = useState();
  const [blob, setBlob] = useState("");
  const imageref = useRef(null);
  const handleImage = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    setImage(file);
    const url = URL.createObjectURL(file);
    setBlob(url);
  };

  const handleSubmission = async(e)=>{
    e?.preventDefault();
    if(!image) return;
    const newImage= new FormData();
    newImage.append("logo", image);
    const added = await addNewData("/change-logo", newImage);
    if(!added) return alert("Could Not Change Logo");
    return alert("Logo Changed!")
  }

  return (
    <form className="w-full p-[20px]" onSubmit={handleSubmission}>
        <h1 className="text-[25px]">Change Logo</h1>
        <br />
      <Image
        src={blob || `/api/files/logo/logo.png` || `/add.png`}
        width={800}
        height={800}
        className="w-full h-[300px] p-[30px] border-dashed border-2 rounded-xl bg-slate-50 object-contain object-center"
        onClick={() => {
          imageref?.current?.click();
        }}
      />
      <input
        type="file"
        accept="image/png"
        onChange={handleImage}
        ref={imageref}
        className="hidden"
      />
      <br />
      <br />
      <button disabled={image?false:true} className="px-[20px] py-[10px] text-[16px] bg-blue-400 transition-all duration-300 ng-blue-500 text-white rounded-xl">
        Save Changes
      </button>
    </form>
  );
};

export default ChangeLogo;
