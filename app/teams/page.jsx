"use server"
import Footer from "@/Components/Footer/Footer";
import BlogInfinite from "@/Components/infiniteHolders/BlogInfinite";
import CoverMain from "@/Components/Reusable/CoverMain";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const res = await getLists("teams", 0, 4, null);
  const data = await res?.data;

  return (
    <main className="w-full min-h-screen">
      <CoverMain
        image={`/api/files/covers/blogCoverImage.jpg`}
        title={"MEET OUR TEAM MEMBERS"}
      />
      <BlogInfinite firstData={data} />
      <Footer />
    </main>
  );
};

export default page;
