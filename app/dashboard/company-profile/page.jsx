import AddAbout from "@/AdminComponents/about/AddAbout";
import CoverEditor from "@/AdminComponents/Reusables/CoverEditor";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const res = await getLists("about", 0, 0, "all");
  const data = await res?.data;
  return (
    <section className="w-full">
      <CoverEditor img={`aboutPgBg.jpg`} title={"COMPANY'S PROFILE"} />
      <AddAbout data={null} index={1} />
      {Array.isArray(data) &&
        data?.map((item, idx) => (
          <AddAbout data={item} key={idx} index={idx} />
        ))}
      <Footer />
    </section>
  );
};

export default page;
