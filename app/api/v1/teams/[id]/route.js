import ConnectDB from "@/DB_CONNECT/ConnectDB";
import team from "@/models/teams";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await ConnectDB();
  try {
    const urlReq = await req.url?.split("/")?.pop();
    const data = await team.findOne({ _id: urlReq });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};