import Footer from "@/Components/Footer/Footer";
import CoverMain from "@/Components/Reusable/CoverMain";
import SubMainComp from "@/Components/Reusable/SubMainComp";
import React from "react";

const page = async () => {
  return (
    <main className="w-full min-h-screen">
      <CoverMain
        title={"CONTACT US"}
        image={"/api/files/covers/contactCover.jpg"}
        bg={
          "linear-gradient( rgba(158, 255, 176, 0.5), rgba(225,225,225,0.25))"
        }
      />
      {/* Contact main */}
       <SubMainComp/>
     
      <Footer />
    </main>
  );
};

export default page;
