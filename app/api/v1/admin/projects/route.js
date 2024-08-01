import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import projects from "@/models/projects";
import { UploadFiles } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if (!auth) throw new Error("Not Authorized");
    const form = await req.formData();
    console.log(form)
    const dataStruct = {
      title: null,
      description: null,
      content: null,
      image: null,
      status: null,
    };
    for (const key in dataStruct) {
      const data = await form.get(key);
      if (key === "image" && data instanceof File) {
        const uploaded = await UploadFiles(data, "projects", null);
        dataStruct.image = uploaded?.path;
      } else {
        dataStruct[key] = data;
      }
    }
    console.log(dataStruct)
    const updates = new projects(dataStruct);
    await updates.save();
    return NextResponse.json({ msg: "Edited" });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error: false }, { status: 400 });
  }
};
