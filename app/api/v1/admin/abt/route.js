import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";
import { newImageUpload } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const form = await req.formData();
    const exp = await form.get("experience");
    const title = await form.get("title");
    const des = await form.get("description");
    const list = await JSON.parse(await form.get("list"));
    const projects = await form.get("projects");
    const clients = await form.get("clients");
    const team = await form.get("team");

    const newImage = await form.get("newImage");
    const abt = await unstruct.findOne({ relation: "abt" });

    const addiData = { ...abt?.addiData };

    if (newImage && newImage !== "null") {
      const imageName = await newImageUpload(
        newImage,
        "images",
        abt?.addiData?.image
      );
      if (!imageName?.error) {
        addiData.image = imageName?.data;
      }
    }

    addiData.experience = exp;
    addiData.list = list;
    addiData.projects = projects;
    addiData.clients = clients;
    addiData.team = team;

    abt.title = title;
    abt.description = des;
    abt.addiData = addiData;
    await abt.save();

    return NextResponse.json({ message: "Home Page Edited Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
};
