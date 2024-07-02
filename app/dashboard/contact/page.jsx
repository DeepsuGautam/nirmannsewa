import ContactHandler from "@/AdminComponents/comps/ContactHandler";
import ContactLists from "@/AdminComponents/ContactLists";
import { makeGetReqs } from "@/AdminDataHandle/AdminReq";
import Footer from "@/Components/Footer/Footer";
import { getLists } from "@/requests/GetDatas";
import React from "react";

const page = async () => {
  const res = await getLists("contact", 0, 0);
  const contact = await makeGetReqs("/contact", 0, 0);
  const data = await res?.data;
  return (
    <main className="w-full" style={{ width: "100%", paddingLeft: "70px" }}>
      <ContactHandler data={data} />
      <ContactLists data={contact?.data}/>
      <Footer />
    </main>
  );
};

export default page;
