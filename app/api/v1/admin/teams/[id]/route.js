import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import teams from "@/models/teams";
import { deleteFile } from "@/utility/DeleteFile";
import { UploadFiles } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";
import { join } from "path";

export const PUT = async (req) => {
  try {
    await ConnectDB();
    const id = await req?.url?.split("/")?.pop();

    const auth = await Auth();
    if (!auth) throw new Error("Not Authorized");
    const form = await req.formData();
    const updates = await teams.findOne({ _id: id });
    const dataStruct = {
      name: null,
      description: null,
      details: null,
      image: null,
      occupation: null,
    };
    for (const key in dataStruct) {
      const data = await form.get(key);
      if (key === "image" && data instanceof File) {
        const uploaded = await UploadFiles(data, "teams", updates?.image);
        dataStruct.image = uploaded?.path;
      } else if (key === "image" && typeof data === "string") {
        dataStruct.image = data;
      } else {
        if (!data || data === "undefined" || data === "null") {
          throw new Error("Data Is Required!");
        } else {
          dataStruct[key] = data;
        }
      }
    }

    for (const key in dataStruct) {
      updates[key] = dataStruct?.[key];
    }
    await updates.save();
    return NextResponse.json({ msg: "Edited" });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error: false }, { status: 400 });
  }
};
export const DELETE = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if (!auth) throw new Error("Not Authorized");
    const url = await req?.url?.split("/")?.pop();
    const data = await teams.findOne({ _id: url });
    const filePath = join("teams", data?.image);
    await deleteFile(filePath);
    await teams.findOneAndDelete({_id:url});
    return NextResponse.json({ message: "deleted" });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
