import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";
import { newImageUpload, predefinedObject } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const form = await req.formData();
    console.log(form);
    const exp = await form.get("experience");
    const title = await form.get("title");
    const des = await form.get("description");
    const history = await JSON.parse(await form.get("history"));
    const projects = await form.get("projects");
    const clients = await form.get("clients");
    const team = await form.get("team");

    const coverImg = await form.get("coverImage");
    const historyImage = await form.get("historyImage");
    const abt = await unstruct.findOne({ relation: "about" });

    const addiData = { ...abt?.addiData };

    if (coverImg && coverImg !== "null") {
      await predefinedObject(coverImg, "covers/aboutPgBg.jpg");
    }

    // history Bg image
    if (historyImage && historyImage !== "null") {
      const imageName = await newImageUpload(
        historyImage,
        "images",
        abt?.addiData?.history?.image
      );
      if (!imageName?.error) {
        history.image = imageName?.data;
      }
    }

    addiData.experience = exp;
    addiData.history = history;
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