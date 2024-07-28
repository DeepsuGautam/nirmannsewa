import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";
import { predefinedObject } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
    try {
      const auth = await Auth();
      if(!auth) throw new Error("Validation Failed")
      await ConnectDB();
      const data = await unstruct.findOne({ relation: "footer" });
      const form = await req.formData();
      const facebook = await form.get("facebook");
      const instagram = await form.get("instagram");
      const twitter = await form.get("twitter");
      const linkedin = await form.get("linkedin")
      const image = await form.get("logo");
      if (image && image !== "null") {
        await predefinedObject(image, "logo/logo.png");
      }
      data.facebook = facebook;
      data.instagram = instagram;
      data.linkedin = linkedin;
      data.twitter = twitter;
      await data.save();
      return NextResponse.json({ msg: "Edited Successfully!" });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }
  };