import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";
import { predefinedObject } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const form = await req.formData();

    const bg = await form?.get("bgCover");

    const video = await form?.get("video");
    console.log(video);

    const home = await unstruct.findOne({ relation: "home" });

    home.title = await form?.get("title");

    home.description = await form?.get("description");

    home.facebook = await form?.get("facebook");

    home.instagram = await form?.get("instagram");

    home.twitter = await form?.get("twitter");

    await home.save();

    if (bg && bg !== "null") {
      await predefinedObject(bg, "covers/main_landing_background.jpg");
    }

    if (video && video!== "null") {
      await predefinedObject(video, "videos/homeVDO.mp4");
    }

    return NextResponse.json({ message: "Home Edited Successfully!" });
  } catch (error) {
    console.log(error);

    return NextResponse({ message: "Internal Error" }, { status: 500 });
  }
};
