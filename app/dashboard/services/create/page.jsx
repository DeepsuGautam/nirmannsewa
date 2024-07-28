import { getSoloData } from "@/requests/GetDatas";
import dynamic from "next/dynamic";
import React from "react";
const DataAdd = dynamic(() => import("@/AdminComponents/comps/DataAdd"));

const page = async ({ params }) => {
  const id = params?.id;
  const data = await getSoloData("services", id);

  return (
    <main className="w-full" style={{ paddingLeft: "70px" }}>
      <DataAdd data={data?.data} type={"services"} id={id} />
    </main>
  );
};

export default page;
