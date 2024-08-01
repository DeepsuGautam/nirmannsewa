import React from "react";
import LinkerComp from "../Reusable/LinkerComp";
import ServiceCard from "../Reusable/ServiceCard";
import { getLists } from "@/requests/GetDatas";

const ServComp = async () => {
  const res = await getLists("services", 0, 6, null);
  const data = await res?.data;
  return (
    <section className="w-full bg-slate-50 py-[50px]">
      <h1 className="w-full text-center text-blue-950 font-semibold text-[4rem]">
        OUR SERVICES
      </h1>
      <div className="w-full flex justify-center mt-[20px] mb-[50px] flex-wrap max-w-[1000px] gap-[20px] mx-auto">
        {Array.isArray(data) && data?.map((item, idx) => (
          <LinkerComp
            link={`/services/${item?._id}`}
            key={idx}
            addiStyle={{ width: "320px", marginTop: "30px" }}
          >
            <ServiceCard data={item} />
          </LinkerComp>
        ))}
      </div>
      <center>
        <LinkerComp link={"/services"} addiStyle={{ margin: "0 auto" }}>
          <button className="w-fit text-[20px]  px-[30px] py-[10px] bg-blue-400 font-semibold text-white rounded-full hover:bg-blue-500 transition-all duration-300">
            See All Services
          </button>
        </LinkerComp>
      </center>
    </section>
  );
};

export default ServComp;
