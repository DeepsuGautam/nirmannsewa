import ConnectDB from "@/DB_CONNECT/ConnectDB";
import unstruct from "@/models/unstructs";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const dataToSend = await unstruct.findOne({ relation: "abt" });
    return NextResponse.json(dataToSend);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
