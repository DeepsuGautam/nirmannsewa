import AdminControl from "@/AdminComponents/AdminControl";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const data = await getLists("blogs", 0, 12);
  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <AdminControl
        data={data?.data}
        title={"READ OUR BLOGS"}
        gradient={
          "linear-gradient(to bottom,rgba(13, 134, 255, 0.5), rgba(255,255,255,0.5))"
        }
        bg={"blogCoverImage.jpg"}
        type={"blogs"}
      />
      <Footer />
    </main>
  );
};

export default page;
