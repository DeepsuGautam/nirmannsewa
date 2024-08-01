"use client"
import Link from "next/link";
import React from "react";

const LinkerComp = ({ children, link, addiStyle }) => {
  return (
    <Link href={link || "/"} className={"w-full h-fit"} style={addiStyle}>
      {children}
    </Link>
  );
};

export default LinkerComp;
