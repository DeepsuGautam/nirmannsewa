import ConnectDB from "@/DB_CONNECT/ConnectDB";
import service from "@/models/services";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const headerData = headers();
    await ConnectDB();

    const dataToSend = await service.find().select("-content");
    if (!dataToSend) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    return NextResponse.json(dataToSend);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
};
