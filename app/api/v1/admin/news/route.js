import { Auth } from "@/middleware/auth";
import news from "@/models/news";
import { predefinedObject } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const form = await req.formData();
    console.log(form)
    const coverImg = await form.get("cover");
    if (coverImg && coverImg !== "null") {
      await predefinedObject(coverImg, "covers/newsCover.jpg");
    }
    return NextResponse.json({ message: "Home Page Edited Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
};


export const POST = async (req) => {
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    await ConnectDB();
    const form = await req.formData();
    console.log(form);
    const image = await form.get("image");
    const newImage = await uploadNewImage(image, "blogs");
    if (newImage?.error) throw new Error("File handle Error");
    const title = await form.get("title");
    const description = await form.get("description");
    const content = await form.get("content");
    const newData = new news({
      title,
      description,
      content,
      image: newImage?.data,
    });
    await newData.save();
    return NextResponse.json({ message: "Added Successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
