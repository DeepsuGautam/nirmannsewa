import { ImageSender } from "@/utility/FileGet";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const requestedUrl = await req.url?.split("/")?.pop();
    const file = await ImageSender("blogs", requestedUrl);
    if (!file) {
      throw new Error("Could Not Find Data!");
    }
    const extention = await requestedUrl?.split(".")?.pop();

    return new NextResponse(file, {
      "Content-Type": `image/${extention}`,
    });
  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 404 });
  }
};
