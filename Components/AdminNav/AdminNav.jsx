import React from "react";
import LinkerComp from "../Reusable/LinkerComp";

const AdminNav = () => {
  return (
    <div
      className="w-[100px] lg:w-[250px] fixed top-[100px] left-0 bottom-0 bg-gray-900 text-center text-[11px] lg:text-[18px] text-white"
      style={{ zIndex: "5" }}
    >
      <LinkerComp link={"/dashboard"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          HOME
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/projects"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          PROJECTS
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/services"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          SERVICES
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/teams"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          TEAMS
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/company-profile"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          COMPANY PROFILE
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/contact"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          CONTACT
        </button>
      </LinkerComp>
      <br />
      <LinkerComp link={"/dashboard/settings"}>
        <button className="w-full text-left px-[20px] py-[15px] hover:bg-blue-400 transition-all duration-300">
          SETINGS
        </button>
      </LinkerComp>
    </div>
  );
};

export default AdminNav;
