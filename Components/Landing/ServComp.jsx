import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import ServiceCard from "../Reusable/ServiceCard";
import { getLists } from "@/requests/GetDatas";

const ServComp = async () => {
  const res = await getLists("services", 0, 4);
  const data = await res?.data;
  return (
    <section className="w-full bg-[#fffaf8] py-[50px]">
      <h1 className="w-full text-center text-gray-800 font-bold text-[6rem]">
        OUR SERVICES
      </h1>
      <div className="w-full flex justify-evenly mt-[20px] mb-[50px] flex-wrap max-w-[1400px] mx-auto">
        {Array.isArray(data) && data?.map((item, idx) => (
          <LinkerComp
            link={`/services/${item?._id}`}
            key={idx}
            addiStyle={{ width: "80%", maxWidth: "290px", marginTop: "30px" }}
          >
            <ServiceCard data={item} />
          </LinkerComp>
        ))}
      </div>
      <center>
        <LinkerComp link={"/services"} addiStyle={{ margin: "0 auto" }}>
          <button className="w-fit text-[20px]  px-[30px] py-[10px] bg-[orange] font-semibold text-white rounded-full hover:bg-red-400 transition-all duration-300">
            See All Services
          </button>
        </LinkerComp>
      </center>
    </section>
  );
};

export default ServComp;
