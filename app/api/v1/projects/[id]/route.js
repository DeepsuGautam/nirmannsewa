import ConnectDB from "@/DB_CONNECT/ConnectDB";
import project from "@/models/projects";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await ConnectDB();
  try {
    const urlReq = await req.url?.split("/")?.pop();
    const data = await project.findOne({ _id: urlReq });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};