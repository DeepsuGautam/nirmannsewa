"use server";
import { headers } from "next/headers";

const domain = process.env.DOMAIN;

export const Auth = async () => {
  try {
    const header = headers();
    const token = header.get("authorization")?.split(" ")[1];
    console.log(token);
    if (!token) throw new Error("Cookie not found!");
    const res = await fetch(`${domain}/api/v1/validation`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Validation Error!");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
