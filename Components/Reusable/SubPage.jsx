import Image from "next/image";
import React from "react";

const SubPage = ({ data, type }) => {
  return (
    <div className="w-full p-0">
      <Image
        width={4000}
        height={4000}
        src={`/api/files/${type}/${data?.image}`}
        alt=""
        style={{
          width: "100%",
          padding: type === "services" ? "100px" : 0,
          height: "500px",
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
          maxWidth: "1400px",
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
          {data?.title}
        </h1>
        <br />
        <br />
        <p style={{ fontSize: "2.5rem", fontWeight: "500" }}>
          {data?.description}
        </p>
        <br />
        <br />
        <div
          style={{ fontSize: "1.8rem" }}
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        ></div>
      </section>
    </div>
  );
};

export default SubPage;
