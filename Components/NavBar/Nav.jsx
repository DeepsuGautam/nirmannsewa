import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import Image from "next/image";
import NavHolder from "./NavHolder";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <NavHolder>
      <LinkerComp link={"/"} addiStyle={{ width: "fit-content" }}>
        <Image
          src={`/api/files/logo/logo.png`}
          alt=""
          width={500}
          height={500}
          style={{ width: "fit-content", height: "60px"}}
          className="h-[60px] w-fit bg-transparent"
        />
      </LinkerComp>
      <div className="min-w-[700px]  text-[16px] justify-between bg-white rounded-full shadow-xl hidden lg:flex">
        <div className="w-[550px] text-gray-800 flex justify-evenly">
          <div className="h-[60px] relative menuBtn w-fit p-[20px] font-semibold transition-all duration-300">
            <button className="flex gap-[10px]">
              About
              <FaAngleDown style={{ margin: "3px 0" }} />
            </button>
            <div
              className="w-[300px] absolute bg-transparent menuBox lg py-[30px] "
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <div className="w-full bg-white rounded-lg shadow-2xl flex flex-col">
                <LinkerComp link={"/teams"} addiStyle={{ width: "100%" }}>
                  <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                    Our Team
                  </button>
                </LinkerComp>
                <LinkerComp
                  link={"/company-profile"}
                  addiStyle={{ width: "100%" }}
                >
                  <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                    Company Profile
                  </button>
                </LinkerComp>
              </div>
            </div>
          </div>
          <div className="h-[60px] relative menuBtn w-fit p-[20px] font-semibold transition-all duration-300">
            <button className="flex gap-[10px]">
              Projects
              <FaAngleDown style={{ margin: "3px 0" }} />
            </button>
            <div
              className="w-[300px] absolute bg-transparent menuBox lg py-[30px] "
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <div className="w-full bg-white rounded-lg shadow-2xl flex flex-col">
                <LinkerComp
                  link={"/ongoing-projects"}
                  addiStyle={{ width: "100%" }}
                >
                  <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                    Ongoing Projects
                  </button>
                </LinkerComp>
                <LinkerComp
                  link={"/completed-projects"}
                  addiStyle={{ width: "100%" }}
                >
                  <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                    Completed Projects
                  </button>
                </LinkerComp>
              </div>
            </div>
          </div>{" "}
          <LinkerComp link={"/services"} addiStyle={{ width: "fit-content" }}>
            <button className="h-[60px] p-[20px] font-semibold hover:text-blue-400 transition-all duration-300">
              Services
            </button>
          </LinkerComp>
        </div>
        <LinkerComp link={"/contact"} addiStyle={{ width: "150px" }}>
          <button
            className="w-[150px] h-[60px] bg-blue-400 font-semibold text-white hover:bg-blue-500 transition-all duration-300 "
            style={{ borderRadius: "0 100px 100px 0" }}
          >
            Contact
          </button>
        </LinkerComp>
      </div>


      <div className="h-[60px] relative menuBtn text-[25px] text-center w-fit p-[20px] font-semibold transition-all duration-300 block lg:hidden">
        <button  className="text-gray-600 hover:text-blue-400 transition-all duration-300">
          <HiMenuAlt3 />
        </button>
        <div
          className="w-[250px] text-[16px] absolute bg-transparent menuBox lg py-[30px] "
          style={{ right: "0px" }}
        >
          <div className="w-full bg-white rounded-lg shadow-2xl flex flex-col">
            <LinkerComp link={"/teams"} addiStyle={{ width: "100%" }}>
              <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                Our Team
              </button>
            </LinkerComp>
            <LinkerComp link={"/company-profile"} addiStyle={{ width: "100%" }}>
              <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                Company Profile
              </button>
            </LinkerComp>
            <LinkerComp link={"/services"} addiStyle={{ width: "100%" }}>
              <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                Servies
              </button>
            </LinkerComp>
            <LinkerComp
              link={"/completed-projects"}
              addiStyle={{ width: "100%" }}
            >
              <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                Completed Projects
              </button>
            </LinkerComp>
            <LinkerComp
              link={"/ongoing-projects"}
              addiStyle={{ width: "100%" }}
            >
              <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                Ongoing Projects
              </button>
            </LinkerComp>
            <LinkerComp link={"/contact"} addiStyle={{ width: "100%" }}>
              <button className="w-full px-[30px] py-[20px] transition-all duration-300 hover:text-blue-400">
                Contact
              </button>
            </LinkerComp>
          </div>
        </div>
      </div>
    </NavHolder>
  );
};

export default Nav;
