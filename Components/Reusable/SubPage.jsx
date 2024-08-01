import Image from "next/image";
import React from "react";

const SubPage = ({ data, type }) => {
  return (
    <div className="w-full p-0">
      <Image
        width={2500}
        height={2500}
        loading="lazy"
        src={`/api/files/${type}/${data?.image}`}
        alt=""
        style={{
          width: "100%",
          padding: type === "services" ? "100px" : 0,
          height: type==="teams"?"auto":"500px",
          maxHeight:"800px",
          background: "#4fb6ff",
          objectFit: type === "services" ? "contain" : "cover",
          objectPosition: "center",
        }}
      />
      <br />
      <br />
      <section
        className="w-full text-gray-800"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          {data?.title || data?.name}
        </h1>
        <br />
        <br />
        {(data?.occupation || data?.subtitle) && (
          <h2 className="text-[18px] pb-[30px] text-blue-500 font semibold">
            {data?.occupation || data?.subtitle}
          </h2>
        )}
        <p style={{ fontSize: "16px", fontWeight: "500" }}>
          {data?.description}
        </p>
        <br />
        <br />
        <div
          style={{ fontSize: "16px" }}
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        ></div>
      </section>
    </div>
  );
};

export default SubPage;
