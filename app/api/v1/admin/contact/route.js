import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import message from "@/models/contact";
import unstruct from "@/models/unstructs";
import { predefinedObject } from "@/utility/UploadFiles";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const data = await unstruct.findOne({ relation: "contact" });
    const form = await req.formData();
    const email = await form.get("email");
    const phone = await form.get("phone");
    const location = await form.get("location");
    const addiEmbeds = await form.get("addiEmbeds");
    const facebook = await form.get("facebook");
    const instagram = await form.get("instagram");
    const twitter = await form.get("twitter");
    const image = await form.get("newImage");
    if (image && image !== "null") {
      await predefinedObject(image, "covers/contactCover.jpg");
    }
    data.email = email;
    data.phone = phone;
    data.location = location;
    data.addiEmbeds = addiEmbeds;
    data.facebook = facebook;
    data.instagram = instagram;
    data.twitter = twitter;
    await data.save();
    return NextResponse.json({ msg: "Edited Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};



export const GET = async () => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const head = headers();
    const page = parseInt(head.get("page") || "0") || 0;
    const contactData = await message
      .find({})
      .sort({ _id: -1 })
      .skip(page * 25)
      .limit(25);

    return NextResponse.json(contactData)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  }
};
