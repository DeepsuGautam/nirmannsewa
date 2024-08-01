import ConnectDB from "@/DB_CONNECT/ConnectDB";
import message from "@/models/contact";
import unstruct from "@/models/unstructs";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();

    const dataToSend = await unstruct.findOne({ relation: "contact" });
    if (!dataToSend) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    return NextResponse.json(dataToSend);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await ConnectDB();
    const data = await req.json();
    const newContact = new message(data);
    await newContact.save();
    return NextResponse.json({ message: "Message Sent Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Could Not Send Message!" },
      { status: 500 }
    );
  }
};