import React from "react";
import ContactUs from "./ContactUs";
import { getLists } from "@/requests/GetDatas";

const SubMainComp = async () => {
  const res = await getLists("contact", 0, 0);
  const data = await res?.data;
  return (
    <section>
      <ContactUs data={data ? data : {}} />
      <div
        className="w-full h-fit"
        dangerouslySetInnerHTML={{ __html: data?.addiEmbeds || "" }}
      ></div>
    </section>
  );
};

export default SubMainComp;
