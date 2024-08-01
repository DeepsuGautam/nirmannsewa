import Footer from "@/Components/Footer/Footer";
import SubPage from "@/Components/Reusable/SubPage";
import { getSoloData } from "@/requests/GetDatas";
import React from "react";

export async function generateMetadata({ params }) {
  try {
    const res = await getSoloData("services", params?.id);;
    if (!res) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exists!",
      };
    }

    return {
      title: res?.title || "Our Services",
      description: res?.description || "Our Services",
      openGraph: {
        title: res?.title || "Our Services",
        images: `https://ramannirmansewa.com.np/api/files/services/${res?.image}`,
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
  const res = await getSoloData("services", id);
  const data = res?.data;
  return (
    <main>
      <SubPage data={data} type="services" />
      <Footer />
    </main>
  );
};

export default page;
