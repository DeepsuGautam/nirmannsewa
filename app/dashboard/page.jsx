import Abt from "@/AdminComponents/Abt";
import Home from "@/AdminComponents/Home";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const top = await getLists("home", 0, 0);
  const abt = await getLists("home/about", 0, 0);
  return (
    <section className="w-full pl-[70px]">
      <Home data={top?.data} />
      <Abt data={abt?.data} />
      <Footer/>
    </section>
  );
};

export default page;
