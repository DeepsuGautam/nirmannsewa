import { getSoloData } from "@/requests/GetDatas";
import dynamic from "next/dynamic";
import React from "react";
const DataEditComp = dynamic(
  () => import("@/AdminComponents/comps/DataEditComp")
);

const page = async ({ params }) => {
  const id = params?.id;
  const data = await getSoloData("news", id);

  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <DataEditComp data={data?.data} type={"news"} id={id} />
    </main>
  );
};

export default page;
