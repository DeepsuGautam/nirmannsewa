"use client";
import React, { useState, useEffect } from "react";

const NavHolder = ({ children }) => {
  const [bg, setbg] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      setbg(true);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setbg(true);
      } else {
        setbg(false);
      }
    });
  }, []);
  return (
    <nav
      className="w-full h-[100px] p-[20px] fixed left-0 right-0 top-0 flex justify-between navbarAnimate"
      style={{
        zIndex: "10",
        background: bg ? "#f7f1ed" : "transparent",
        boxShadow: bg ? "0 0 10px dimgray" : "",
      }}
    >
      {children}
    </nav>
  );
};

export default NavHolder;
