import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";
import {UploadFiles }from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    // authenticate
    if (!auth) throw new Error("Error In Authentication!");
    const form = await req.formData();
    const recievedData = {
      title: null,
      description: null,
      facebook: null,
      instagram: null,
      twitter: null,
      video: "videos/homeVDO.mp4",
      background: "covers/main_landing_background.jpg",
    };

    // handling data and uploading data
    for (const key in recievedData) {
      const data = await form.get(key);
      if (key !== "video" && key !== "background" && !data) {
        throw new Error("Data Not Found!");
      } else if (
        (key === "video" || key === "background") &&
        data instanceof File
      ) {
        const splitted = recievedData[key]?.split("/");
        await UploadFiles(data, splitted[0], splitted[1]);
      }
      recievedData[key] = data;
    }
    delete recievedData.background;
    delete recievedData.video;

    // editing data
    const storedData = await unstruct.findOne({ relation: "home" });

    // make new collection if not exists
    if (!storedData) {
      const newEdit = { ...recievedData, relation: "home" };
      const newHomeData = new unstruct(newEdit);
      await newHomeData.save();
      return NextResponse.json({ message: "Data Saved Successfully!" });
    }

    // for existing data
    for (const key in recievedData) {
      storedData[key] = recievedData?.[key];
    }

    // save
    await storedData.save();

    // send response
    return NextResponse.json({ message: "Data Saved Successfully!" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({}, { status: 500 });
  }
};
