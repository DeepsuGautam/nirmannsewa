"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const domain = process.env.DOMAIN;

export async function middleware(req) {
  try {
    const adminReq = req?.url?.includes("dashboard");
    if (!adminReq) return;

    const cookie = cookies();
    const token = cookie.get("token");
    console.log(token);
    if (!token || !token?.value) throw new Error("Token Required!");

    const res = await fetch(`${domain}/api/v1/validation`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token.value}`,
      },
    });

    if (!res.ok) throw new Error("Validation Error!");
    return;
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(domain + "/login");
  }
}
