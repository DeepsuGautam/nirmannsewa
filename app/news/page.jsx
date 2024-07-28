import Footer from "@/Components/Footer/Footer";
import NewsInfinite from "@/Components/infiniteHolders/NewsInfinite";
import CoverMain from "@/Components/Reusable/CoverMain";
import { getLists } from "@/requests/GetDatas";
import React from "react";
const page = async () => {
  const res = await getLists("news", 0, 9);
  const data = await res?.data;
  return (
    <main className="w-full min-h-screen">
      <CoverMain
        bg={
          "linear-gradient(to bottom, rgba(255, 112, 112, 0.5), rgba(225, 225, 225, 0.25))"
        }
        image={`/api/files/covers/newsCover.jpg`}
        title={"LATEST NEWS"}
      />
      <NewsInfinite firstData={data}/>
      <br />
      <br />
      <Footer />
    </main>
  );
};

export default page;
