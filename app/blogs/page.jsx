import Footer from "@/Components/Footer/Footer";
import BlogInfinite from "@/Components/infiniteHolders/BlogInfinite";
import CoverMain from "@/Components/Reusable/CoverMain";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const res = await getLists("blogs", 0, 4);
  const data = await res?.data;

  return (
    <main className="w-full min-h-screen">
      <CoverMain
        image={`/api/files/covers/blogCoverImage.jpg`}
        title={"READ OUR BLOGS"}
        bg={
          "linear-gradient(to bottom, rgba(97, 173, 255, 0.75), rgba(255,255,255, 0.25))"
        }
      />
      <BlogInfinite firstData={data} />
      <Footer />
    </main>
  );
};

export default page;
