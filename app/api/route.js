import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ msg: "NEXT JS is Working!" });
};
