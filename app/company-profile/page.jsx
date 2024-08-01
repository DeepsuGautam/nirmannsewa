import AboutCard from "@/Components/About/AboutCard";
import Footer from "@/Components/Footer/Footer";
import CoverMain from "@/Components/Reusable/CoverMain";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const res = await getLists("about", 0, 0, "all");
  const data = await res?.data;
  return (
    <main className="w-full pt-[100px]">
      <CoverMain
        image={`/api/files/covers/aboutPgBg.jpg`}
        title={"COMPANY'S PROFILE"}
      />
      {Array.isArray(data) &&
        data?.map((item, idx) => (
          <AboutCard data={item} key={idx} index={idx} />
        ))}
      <Footer/>
    </main>
  );
};

export default page;
