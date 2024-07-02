import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import project from "@/models/projects";
import { deleteFile } from "@/utility/DeleteFile";
import { newImageUpload } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const urlReq = await req.url?.split("/")?.pop();
    const data = await project.findOne({ _id: urlReq });
    const form = await req.formData();
    const newImage = await form.get("newImage");
    const title = await form.get("title");
    const description = await form.get("description");
    const content = await form.get("content");
    if (newImage && newImage !== "null") {
      const image = await newImageUpload(newImage, "projects", data?.image);
      if (!image.error) {
        data.image = image?.data;
      }
    }
    data.title = title;
    data.description = description;
    data.content = content;
    await data.save();
    return NextResponse.json({ message: "Edited!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const urlReq = await req.url?.split("/")?.pop();
    const data = await project.findOne({ _id: urlReq });
    const image = await data?.image;
    await deleteFile(`projects/${image}`);
    await project.deleteOne(data);
    return NextResponse.json({ msg: "Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  }
};

