import LinkerComp from "@/Components/Reusable/LinkerComp";
import { MdOutlinePassword } from "react-icons/md";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Footer from "@/Components/Footer/Footer";
import GeneralSettings from "@/AdminComponents/comps/GeneralSettings";
import { getLists } from "@/requests/GetDatas";

const page = async () => {
  const data = await getLists("footer", 0, 0);

  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <h1
        className="text-gray-800"
        style={{ fontSize: "40px", fontWeight: "700", padding: "20px" }}
      >
        General Settings
      </h1>
      <div className="w-full" style={{ padding: "20px" }}>
        <LinkerComp
          link={"/dashboard/settings/change-password"}
          addiStyle={{ width: "100%" }}
        >
          <button
            className="w-full p-[20px] flex text-gray-700 font-semibold justify-between rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            style={{ fontSize: "20px", gap: "20px", background: "#fbfbfb" }}
          >
            <span
              style={{ display: "flex", gap: "20px", width: "fit-content" }}
            >
              Change Password <MdOutlinePassword style={{ margin: "5px" }} />
            </span>
            <FaAngleRight style={{ marginTop: "5px" }} />
          </button>
        </LinkerComp>
      </div>
      <br />
      <GeneralSettings data={data?.data} image={`/api/files/logo/logo.png`} />
      <Footer />
    </main>
  );
};

export default page;
