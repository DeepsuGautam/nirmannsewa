import ConnectDB from "@/DB_CONNECT/ConnectDB";
import about from "@/models/abouts";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const dataToSend = await about.find();
    return NextResponse.json(dataToSend);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
