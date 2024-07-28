import AdminControl from "@/AdminComponents/AdminControl";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const data = await getLists("projects", 0, 12);
  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <AdminControl
        data={data?.data}
        title={"PROJECTS WE ARE PROUD OF"}
        gradient={"linear-gradient(to bottom,aliceblue, rgba(255,255,255,0.5))"}
        bg={"blogCoverImage.jpg"}
        type={"projects"}
      />
      <Footer />
    </main>
  );
};

export default page;
