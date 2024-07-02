import AdminControl from "@/AdminComponents/AdminControl";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const data = await getLists("services", 0, 12);
  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <AdminControl
        data={data?.data}
        title={"SERVICES WE OFFER"}
        gradient={
          "linear-gradient(to bottom,rgba(255, 0, 0, 0.5), rgba(255,255,255,0.5))"
        }
        bg={"servCover.jpg"}
        type={"services"}
      />
      <Footer />
    </main>
  );
};

export default page;
