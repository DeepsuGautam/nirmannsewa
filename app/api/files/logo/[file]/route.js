import { ImageSender } from "@/utility/FileGet";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const requestedUrl = req.url.split("/").pop();
    const file = await ImageSender("logo", requestedUrl);

    if (!file) {
      throw new Error("Could Not Find Data!");
    }

    const extension = requestedUrl.split(".").pop();

    return new NextResponse(file, {
      status: 200,
      cache: "no-store",
      headers: {
        "Content-Type": `image/${extension}`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
};
