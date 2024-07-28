import React from "react";
const AboutHistory = ({ data }) => {
  return (
    <section className="w-full h-fit bg-white flex flex-wrap">
      <div
        className="w-full h-fit bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url("/api/files/images/${data?.image}")`,
        }}
      >
        <div className="w-full h-fit px-[20px] text-left py-[100px] font-bold bg-gray-700 bg-opacity-80 ">
          <h1 className="text-[6rem] text-[orange] w-full max-w-[1200px] mx-auto">
            {data?.title}
          </h1>
          <br />
          <br />
          <div
            className="w-full mx-auto  max-w-[1200px] font-normal text-white bg-transparent text-[20px]"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
