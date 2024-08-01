import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { getLists } from "@/requests/GetDatas";


const TopComp = async () => {
  const recieve = await getLists("home", null, null, null);
  const data = await recieve?.data;
  const text = data?.title?.split(" ")?.slice(1)?.join(" ");
  return (
    <section
      className="w-full h-fit bg-cover bg-no-repeat bg-fixed bg-center"
      style={{
        backgroundImage: `url("/api/files/covers/main_landing_background.jpg")`,
      }}
    >
      <div className="w-full h-fit pt-[180px] pb-[100px] text-[20px] flex justify-between flex-wrap bg-white text-gray-800  bg-opacity-85 gap-[50px] md:gap-0">
        <div className="w-1/2 min-w-[350px] p-[20px] mx-auto">
          <div className="w-full max-w-[600px] mx-auto">
            <h1
              className="text-[7rem] text-orange-400 font-bold"
              style={{ lineHeight: "8rem" }}
            >
              {data?.title?.split(" ")[0]}
            </h1>
            <h2
              className="text-[5rem] text-gray-800 font-semibold"
              style={{ lineHeight: "6rem" }}
            >
              {text}
            </h2>
            <p className="text-[20px] mt-[20px]" style={{ lineHeight: "30px" }}>
              {data?.description}
            </p>
            <LinkerComp
              link={"/contact"}
              addiStyle={{ width: "fit-content", height: "fit-content" }}
            >
              <button
                className="w-fit px-[20px] py-[10px] mt-[40px] bg-blue-400 hover:bg-blue-500 transition-all duration-300 text-white font-semibold rounded-full"
                style={{fontSize:"16px"}}
              >
                Contact Us Now!
              </button>
            </LinkerComp>
            <div
              className="w-full mt-[100px] text-[30px] flex flex-wrap"
              style={{ gap: "40px" }}
            >
              <LinkerComp
                link={data?.facebook || "#"}
                addiStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <button className="w-fit p-[10px] text-[20px] border-4 border-gray-800 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300">
                  <FaFacebookF />
                </button>
              </LinkerComp>
              <LinkerComp
                link={data?.instagram || "#"}
                addiStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <button className="w-fit p-[10px] text-[20px] border-4 border-gray-800 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300">
                  <FaInstagram />
                </button>
              </LinkerComp>
              <LinkerComp
                link={data?.twitter || "#"}
                addiStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <button className="w-fit p-[10px] text-[20px] border-4 border-gray-800 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300">
                  <FaTwitter />
                </button>
              </LinkerComp>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "400px 0 0 400px",
          }}
          className=" min-h-[400px] relative shadow-xl md:w-1/2 min-w-[350px] bg-cover bg-no-repeat p-0 w-full bg-center overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover object-center"
          >
            <source src={`/api/files/videos/homeVDO.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default TopComp;
