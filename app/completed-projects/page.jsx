import Footer from "@/Components/Footer/Footer";
import NewsInfinite from "@/Components/infiniteHolders/NewsInfinite";
import CoverMain from "@/Components/Reusable/CoverMain";
import { getLists } from "@/requests/GetDatas";
import React from "react";
const page = async () => {
  const res = await getLists("projects", 0, 4, "completed");
  const data = await res?.data;
  return (
    <main className="w-full min-h-screen">
      <CoverMain
        image={`/api/files/covers/projectsCover.jpg`}
        title={"PROJECTS WE ARE PROUD OF"}
      />
      <NewsInfinite firstData={data}/>
      <br />
      <br />
      <Footer />
    </main>
  );
};

export default page;
