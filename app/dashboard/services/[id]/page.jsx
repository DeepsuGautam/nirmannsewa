import { getSoloData } from "@/requests/GetDatas";
import dynamic from "next/dynamic";
import React from "react";
const DataEditComp = dynamic(
  () => import("@/AdminComponents/comps/DataEditComp")
);

const page = async ({ params }) => {
  const id = params?.id;
  const data = await getSoloData("services", id);

  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <DataEditComp data={data?.data} type={"services"} id={id} />
    </main>
  );
};

export default page;