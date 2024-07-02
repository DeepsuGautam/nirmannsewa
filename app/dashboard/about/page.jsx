import AboutAd from "@/AdminComponents/AboutAd";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
    const data = await getLists("about",0,0);
  return (
    <main className="w-full" style={{paddingLeft:"70px"}}>
        <AboutAd data={data?.data}/>
        <Footer/>
    </main>
  );
};

export default page;
