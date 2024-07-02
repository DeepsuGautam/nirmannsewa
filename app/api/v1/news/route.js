import ConnectDB from "@/DB_CONNECT/ConnectDB";
import news from "@/models/news";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const headerData = headers();
    await ConnectDB();
    const page = parseInt(headerData.get("page") || "0") || 0;
    const elems = parseInt(headerData.get("elems") || "3") || 3;

    const dataToSend = await news
      .find().sort({_id:-1})
      .skip(page * elems)
      .limit(elems).select("-content");
    if (!dataToSend) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    return NextResponse.json(dataToSend);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
