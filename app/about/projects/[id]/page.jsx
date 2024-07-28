import Footer from "@/Components/Footer/Footer";
import SubPage from "@/Components/Reusable/SubPage";
import { getSoloData } from "@/requests/GetDatas";
import React from "react";

const page = async ({ params }) => {
  const id = params?.id;
  const res = await getSoloData("projects", id);
  const data = res?.data;
  return (
    <main>
      <SubPage data={data} type="projects" />
      <Footer />
    </main>
  );
};

export default page;
