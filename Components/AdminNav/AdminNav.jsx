import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaPen,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineProduct} from "react-icons/ai"

const AdminNav = () => {
  return (
    <div className="w-fit fixed top-[100px] left-0 bottom-0 bg-gray-900 text-center text-[30px] text-white" style={{zIndex:"5"}}>
      <LinkerComp link={"/dashboard"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <FaHome />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/about"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <FaInfoCircle />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/projects"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <AiOutlineProduct />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/services"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <IoMdSettings />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/blogs"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <FaPen />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/news"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <FaNewspaper />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/contact"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <FaPhoneAlt />
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/settings"}>
        <button className="w-full p-[20px] hover:bg-red-400 transition-all duration-300">
          <GiHamburgerMenu />
        </button>
      </LinkerComp>
    </div>
  );
};

export default AdminNav;
