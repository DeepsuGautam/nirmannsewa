import Footer from "@/Components/Footer/Footer";
import CoverMain from "@/Components/Reusable/CoverMain";
import LinkerComp from "@/Components/Reusable/LinkerComp";
import ServiceCard from "@/Components/Reusable/ServiceCard";
import { getLists } from "@/requests/GetDatas";
import React from "react";
const page = async () => {
  const res = await getLists("services", 0, 0, null);
  const data = await res?.data;
  return (
    <main className="w-full min-h-screen bg-[#fffaf8]">
      <CoverMain
        image={`/api/files/covers/servCover.jpg`}
        title={"SERVICES WE OFFER"}
      />

      <section className="w-full bg-[#fffaf8] py-[50px]">
        <div className="w-full flex justify-evenly my-[15px] flex-wrap max-w-[1400px] mx-auto">
          {data?.map((item, idx) => (
            <LinkerComp
              link={`/services/${item?._id}`}
              key={idx}
              addiStyle={{ width: "80%", maxWidth: "290px", marginTop: "30px" }}
            >
              <ServiceCard data={item} />
            </LinkerComp>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
