import ChangePwd from "@/AdminComponents/comps/ChangePwd";
import Footer from "@/Components/Footer/Footer";
import React from "react";
const domain = process.env.DOMAIN;
const page = () => {
  return (
    <main>
      <section
        className="w-full relative"
        style={{
          padding: "20px",
          paddingLeft: "90px",
          background: "#e6e6e6",
          minHeight: "calc(100vh - 100px)",
        }}
      >
        <ChangePwd dmain={domain}/>
      </section>
      <Footer />
    </main>
  );
};

export default page;
