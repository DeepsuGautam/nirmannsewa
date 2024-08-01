import { headers } from "next/headers";
import { NextResponse } from "next/server";
import contact from "@/models/contact";
import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";

export const GET = async () => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if (!auth) throw new Error("Authentication Error!");
    const page = parseInt(headers().get("page") || "0") ?? 0;
    const elems = parseInt(headers().get("elems") || "40") ?? 40;
    const data = await contact
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems);
    if (!data) throw new Error("Not Foud Data!");
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if (!auth) throw new Error("Error While Authenticating!");
    const data = await req.json();
    if (!data) throw new Error("Could Not Find Data!");
    const saves = await unstruct.findOne({relation:"contact"});
    for(const key in data){
      saves[key] = data?.[key];
    }
    await saves.save();
    return NextResponse.json({ error: false });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
