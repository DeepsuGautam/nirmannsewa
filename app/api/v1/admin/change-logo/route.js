import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import { UploadFiles } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if (!auth)
      return NextResponse.json(
        { message: "Not Authorized" },
        { status: "401" }
      );
    const log = await req.formData();
    const logo = await log.get("logo");
    if (logo && logo instanceof File) {
      const saved = await UploadFiles(logo, "logo", "logo.png");
      if (!saved) throw new Error("Could Not Save Image!");
      return NextResponse.json({ error: false }, { status: 200 });
    } else {
      throw new Error("Image Not Found!");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
