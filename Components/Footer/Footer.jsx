import React from "react";
import { getLists } from "@/requests/GetDatas";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = async () => {
  const contact = await getLists("contact",0 ,0 ,"")
  const data = await contact?.data
  const newData = await contact?.data

  return (
    <footer className="w-full flex flex-wrap text-[16px] text-white bg-gray-900 justify-evenly pt-[30px] gap-[40px]">
      <div className="w-full max-w-[500px] p-[20px]">
        <h1 className="w-full text-[30px] font-normal text-blue-400">
          Raman Nirman Sewa
        </h1>
        <br />
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using {"'"}Content here,
          content here{"'"}, making it look like readable English.
        </p>
        <br />
        <div className="w-full py-[10px] flex flex-wrap gap-[20px]">
          <Link href={data?.facebook || "#"}>
            <button className="bg-blue-400 text-black p-[10px] rounded-full transition-all duration-300 hover:text-blue-400 hover:bg-black">
              <FaFacebookF />
            </button>
          </Link>
          <Link href={data?.instagram || "#"}>
            <button className="bg-blue-400 text-black p-[10px] rounded-full transition-all duration-300  hover:text-blue-400 hover:bg-black">
              <FaInstagram />
            </button>
          </Link>
          <Link href={data?.linkedin || "#"}>
            <button className="bg-blue-400 text-black p-[10px] rounded-full transition-all duration-300  hover:text-blue-400 hover:bg-black">
              <FaLinkedinIn />
            </button>
          </Link>
          <Link href={data?.twitter || "#"} >
            <button className="bg-blue-400 text-black p-[10px] rounded-full transition-all duration-300  hover:text-blue-400 hover:bg-black">
              <FaTwitter />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[200px] p-[20px]">
         <h1 className="text-[20px] text-blue-400">Quick Links</h1>
         <br />
         <p className="w-full flex flex-col gap-[10px]">
         <Link href={"/"} className="">Home</Link>
         <Link href={"/teams"}>Teams</Link>
         <Link href={"/services"}>Services</Link>
         <Link href={"/completed-projects"}>Projects</Link>
         <Link href={"/contact"}>Contact</Link>
         </p>
      </div>
      <div className="w-full max-w-[300px] p-[20px]">
        <h1 className="text-blue-400 text-[20px]">Get In Touch</h1>
        <br />
        <p className=" flex flex-col gap-[10px] ">
          <button className="w-fit">{newData?.location}</button>
          <button className="w-fit">{newData?.email}</button>
          <button className="w-fit">{newData?.phone}</button>
        </p>
      </div>
      <div className="w-full text-[16px] p-[20px] text-center bg-gray-800 text-white">
      © {new Date().getFullYear()} Raman Nirman Sewa | NepaTronix
      </div>
    </footer>
  );
};

export default Footer;
