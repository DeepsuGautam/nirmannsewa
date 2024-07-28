import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import Image from "next/image";
import NavHolder from "./NavHolder";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  return (
    <NavHolder>
      <LinkerComp link={"/"} addiStyle={{ width: "fit-content" }}>
        <Image
          src={`/api/files/logo/logo.png`}
          alt=""
          width={60}
          height={60}
          style={{width:"60px", height:"60px", objectFit:"cover"}}
          className="rounded-full bg-white border-2 border-[#ff9900]"
        />
      </LinkerComp>
      <div className="min-w-[700px]  text-[16px] overflow-hidden justify-between bg-white rounded-full shadow-xl hidden lg:flex">
        <div className="w-[550px] text-gray-800 flex justify-evenly">
          <LinkerComp link={"/about"} addiStyle={{ width: "fit-content" }}>
            <button className="h-[60px] w-fit p-[20px] font-semibold hover:text-red-400 transition-all duration-300">
              About
            </button>
          </LinkerComp>
          <LinkerComp link={"/services"} addiStyle={{ width: "fit-content" }}>
            <button className="h-[60px] p-[20px] font-semibold hover:text-red-400 transition-all duration-300">
              Services
            </button>
          </LinkerComp>
          <LinkerComp link={"/blogs"} addiStyle={{ width: "fit-content" }}>
            <button className="h-[60px] p-[20px] font-semibold hover:text-red-400 transition-all duration-300">
              Blogs
            </button>
          </LinkerComp>
          <LinkerComp link={"/news"} addiStyle={{ width: "fit-content" }}>
            <button className="h-[60px] p-[20px] font-semibold hover:text-red-400 transition-all duration-300">
              News
            </button>
          </LinkerComp>
        </div>
        <LinkerComp link={"/contact"} addiStyle={{ width: "150px" }}>
          <button className="w-[150px] h-[60px] bg-[#ff9900] font-semibold text-white hover:bg-red-400 transition-all duration-300 ">
            Contact
          </button>
        </LinkerComp>
      </div>
      <div className="w-fit h-fit p-[15px] bg-[orange] text-white text-[22px] rounded-full relative menuBtn block lg:hidden">
        <HiMenuAlt3 />
        <div
          className="absolute bg-[#f7f1ed] right-[-20px] top-[80px] w-[250px] menuBox text-gray-800 font-semibold"
          style={{ boxShadow: "0 0 10px gray" }}
        >
          <LinkerComp
            link={"/about"}
            addiStyle={{ width: "100%", fontSize: "18px" }}
          >
            <button
              className="p-[15px] w-full"
              style={{ borderBottom: "2px solid gray" }}
            >
              About
            </button>
          </LinkerComp>
          <br />
          <LinkerComp
            link={"/services"}
            addiStyle={{ width: "100%", fontSize: "18px" }}
          >
            <button
              className="p-[15px] w-full"
              style={{ borderBottom: "2px solid gray" }}
            >
              Services
            </button>
          </LinkerComp>
          <br />
          <LinkerComp
            link={"/news"}
            addiStyle={{ width: "100%", fontSize: "18px" }}
          >
            <button
              className="p-[15px] w-full"
              style={{ borderBottom: "2px solid gray" }}
            >
              News
            </button>
          </LinkerComp>
          <br />
          <LinkerComp
            link={"/blogs"}
            addiStyle={{ width: "100%", fontSize: "18px" }}
          >
            <button
              className="p-[15px] w-full"
              style={{ borderBottom: "2px solid gray" }}
            >
              Blogs
            </button>
          </LinkerComp>
          <br />
          <LinkerComp
            link={"/contact"}
            addiStyle={{ width: "100%", fontSize: "18px" }}
          >
            <button className="p-[15px] w-full">Contact</button>
          </LinkerComp>
        </div>
      </div>
    </NavHolder>
  );
};

export default Nav;
