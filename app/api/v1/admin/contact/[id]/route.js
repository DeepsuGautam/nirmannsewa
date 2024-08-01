import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import contact from "@/models/contact";
import { NextResponse } from "next/server";
export const GET = async (req) => {
  await ConnectDB();
  const auth = await Auth();
  if (!auth) throw new Error("Un authorized access!");
  try {
    const urlReq = await req.url?.split("/")?.pop();
    const data = await contact.findOne({ _id: urlReq });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
