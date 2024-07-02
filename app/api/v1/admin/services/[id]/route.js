import ConnectDB from "@/DB_CONNECT/ConnectDB";
import service from "@/models/services";
import { deleteFile } from "@/utility/DeleteFile";
import { newImageUpload } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await ConnectDB();
  try {
    const urlReq = await req.url?.split("/")?.pop();
    const data = await service.findOne({ _id: urlReq });
    const form = await req.formData();
    const newImage = await form.get("newImage");
    const title = await form.get("title");
    const description = await form.get("description");
    const content = await form.get("content");
    if (newImage && newImage !== "null") {
      const image = await newImageUpload(newImage, "services", data?.image);
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
    const urlReq = await req.url?.split("/")?.pop();
    const data = await service.findOne({ _id: urlReq });
    const image = await data?.image;
    await deleteFile(`services/${image}`);
    await service.deleteOne(data);
    return NextResponse.json({ msg: "Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  }
};
