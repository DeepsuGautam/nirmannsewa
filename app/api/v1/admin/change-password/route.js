import ConnectDB from "@/DB_CONNECT/ConnectDB";
import user from "@/models/users";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { Auth } from "@/middleware/auth";

export const POST = async (req) => {
  await ConnectDB();
  try {
    const auth = await Auth();
    if(!auth) throw new Error("Validation Failed")
    const body = await req.json();
    const oldPwd = body?.oldpassword;
    const newPwd = body.newpassword;
    const userData = await user.findOne({ role: "admin" });
    const isValidPwd = await bcryptjs.compare(oldPwd, userData?.password);
    if (!isValidPwd) throw new Error("Incorrect Password!");
    const hashedPwd = await bcryptjs.hash(newPwd, 10);
    userData.password = hashedPwd;
    await userData.save();
    return NextResponse.json({ msg: "Updated Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error?.message || "Internal Error" },
      { status: 500 }
    );
  }
};
