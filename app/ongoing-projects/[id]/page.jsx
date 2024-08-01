import Footer from "@/Components/Footer/Footer";
import SubPage from "@/Components/Reusable/SubPage";
import { getSoloData } from "@/requests/GetDatas";
import React from "react";

export async function generateMetadata({ params }) {
  try {
    const res = await getSoloData("projects", params?.id);;
    if (!res) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exists!",
      };
    }

    return {
      title: res?.title || "Our Projects",
      description: res?.description || "Our Projects",
      openGraph: {
        title: res?.title || "Our Projects",
        images: `https://ramannirmansewa.com.np/api/files/projects/${res?.image}`,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      title: "not found",
      description: "The Page You are looking for doesn't exists!",
    };
  }
}


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
