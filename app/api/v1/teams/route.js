import ConnectDB from "@/DB_CONNECT/ConnectDB";
import teams from "@/models/teams";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const headerData = headers();
    await ConnectDB();
    const page = parseInt(headerData.get("page") ?? "0") ?? 0;
    const elems = parseInt(headerData.get("elems") ?? "4") ?? 4;

    const dataToSend = await teams
      .find({})
      .skip(page * elems)
      .limit(elems)
      .select("-content");
    if (!dataToSend || dataToSend.length === 0) {
      return NextResponse.json([]);
    }
    return NextResponse.json(dataToSend);
  } catch (err) {
    console.error(err.message);
    return NextResponse.json([], { status: 500 });
  }
};
