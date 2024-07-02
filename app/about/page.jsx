import Footer from "@/Components/Footer/Footer";
import AboutHistory from "@/Components/Reusable/AboutHistory";
import CircleStat from "@/Components/Reusable/CircleStat";
import CoverMain from "@/Components/Reusable/CoverMain";
import PageDes from "@/Components/Reusable/PageDes";
import ProjectsCardHolder from "@/Components/Reusable/ProjectsCardHolder";
import { getLists } from "@/requests/GetDatas";
import React from "react";


const page = async () => {
  const res = await getLists("about", 0, 0);
  const data = await res?.data;

  return (
    <main className="w-full min-h-screen">
      <CoverMain
        title={"ABOUT US"}
        image={`/api/files/covers/aboutPgBg.jpg`}
        bg={
          "linear-gradient(to bottom, rgba(255,180, 0, 0.5), rgba(255, 255, 255, 0.5))"
        }
      />
      {/* main image */}
      <PageDes
        title={data?.title}
        description={data?.description}
      />
      <section className="w-full mx-auto max-w-[1400px] p-[20px]  pb-[60px] flex flex-wrap justify-evenly gap-[20px]">
        <CircleStat
          number={data?.addiData?.experience}
          detail={"EXPERIENCE"}
        />
        <CircleStat
          number={data?.addiData?.projects}
          detail={"PROJECTS"}
        />
        <CircleStat
          number={data?.addiData?.clients}
          detail={"HAPPY CLIENTS"}
        />
        <CircleStat
          number={data?.addiData?.team}
          detail={"TEAM MEMBERS"}
        />
      </section>

      {/* cover secondary cover */}
      <ProjectsCardHolder />
      <AboutHistory data={data?.addiData?.history} />
      <Footer />
    </main>
  );
};

export default page;
