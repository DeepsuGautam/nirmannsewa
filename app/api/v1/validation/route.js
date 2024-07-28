import ConnectDB from "@/DB_CONNECT/ConnectDB";
import user from "@/models/users";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
export const GET = async () => {
  await ConnectDB();
  try {
    const header = headers();
    const encryptedToken = header.get("authorization");
    console.log(encryptedToken);
    const token = encryptedToken.split(" ")[1];
    if (!token) throw new Error("Token Not Found");
    const userExist = await user.findOne({ role: "admin" });
    const _id = verify(token, process.env.JWT_TOKEN);
    const isAdmin = _id?._id === userExist._id?.toString();
    if (!isAdmin) throw new Error("Not Admin!");
    return NextResponse.json({ message: "Is Admin" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const POST = async (req) => {
  await ConnectDB();
  try {
    const body = await req.json();
    const username = body.username;
    const password = body.password;

    if (!username || !password) {
      throw new Error("Incorrect Password!");
    }

    const isUser = await user.findOne({ username });
    if (!isUser || isUser.role !== "admin") throw new Error("Not Admin");

    const isPwd = await compare(password, isUser.password);
    if (!isPwd) throw new Error("Not Correct Password");

    const newToken = sign(
      { _id: isUser._id, username, date: new Date() },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      message: "Logged in successfully!",
      cookie: newToken,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error While Verifying" },
      { status: 500 }
    );
  }
};
