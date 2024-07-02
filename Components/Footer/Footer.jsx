import Image from "next/image";
import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { getLists } from "@/requests/GetDatas";

const Footer = async () => {
  const res = await getLists("footer", 0, 0);
  const data = await res?.data;

  return (
    <footer className="w-full px-[20px] py-[50px] bg-[orange] text-gray-800 flex flex-wrap justify-around gap-[40px]">
      {/* logo part */}
      <div className="flex gap-[20px]">
        <Image
          src={`/api/files/logo/logo.png`}
          width={100}
          height={100}
          alt=""
          style={{width:"100px", height:"100px"}}
          className="rounded-full bg-white border-4 border-gray-600 object-cover"
        />
        <div>
          <h1 className="text-[3.5rem] text-gray-800 font-bold">Nirman Sewa</h1>
          <h3 className="text-[16px] text-gray-700 font-semibold">
            © {new Date().getFullYear()}, All rights reserved by NepaTronix.
          </h3>
        </div>
      </div>

      {/* link */}
      <div className="py-[20px] font-semibold text-[2rem] flex gap-[2rem]">
        <LinkerComp link={"/"}>
          <button>Home</button>
        </LinkerComp>
        <LinkerComp link={"/about"}>
          <button>About</button>
        </LinkerComp>
        <LinkerComp link={"/services"}>
          <button>Services</button>
        </LinkerComp>
        <LinkerComp link={"/contact"}>
          <button>Contact</button>
        </LinkerComp>
      </div>
      {/* link */}
      <div className="py-[20px] font-semibold text-[2rem] flex gap-[2rem]">
        <LinkerComp link={data?.facebook || ""}>
          <button className="p-[10px] text-[16px] border-4 border-gray-800 rounded-full hover:text-white hover:bg-gray-800 transition-all duration-300">
            <FaFacebookF />
          </button>
        </LinkerComp>
        <LinkerComp link={data?.instagram || ""}>
          <button className="p-[10px] text-[16px] border-4 border-gray-800 rounded-full hover:text-white hover:bg-gray-800 transition-all duration-300">
            <FaInstagram />
          </button>
        </LinkerComp>
        <LinkerComp link={data?.twitter || ""}>
          <button className="p-[10px] text-[16px] border-4 border-gray-800 rounded-full hover:text-white hover:bg-gray-800 transition-all duration-300">
            <FaTwitter />
          </button>
        </LinkerComp>
        <LinkerComp link={data?.linkedin || ""}>
          <button className="p-[10px] text-[16px] border-4 border-gray-800 rounded-full hover:text-white hover:bg-gray-800 transition-all duration-300">
            <FaLinkedin />
          </button>
        </LinkerComp>
      </div>
    </footer>
  );
};

export default Footer;
