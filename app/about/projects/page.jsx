import Footer from "@/Components/Footer/Footer";
import ProjectInfinite from "@/Components/infiniteHolders/ProjectInfinite";
import CoverMain from "@/Components/Reusable/CoverMain";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const res = await getLists("projects", 0, 4);
  const data = await res?.data;
  return (
    <main className="w-full min-h-screen">
      <CoverMain
        title={"PROJECTS WE ARE PROUD OF"}
        bg={"linear-gradient(to bottom, lightblue, rgba(225, 225, 225, 0.5))"}
        image={`/api/files/covers/projectsCover.jpg`}
      />
      <ProjectInfinite firstData={data} />
      <Footer />
    </main>
  );
};

export default page;
