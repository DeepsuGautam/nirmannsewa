import React from "react";

const AboutEditor = ({ data, textHandler }) => {
  return (
    <div
      className="w-full p-[30px]"
      style={{ maxWidth: "1400px", margin: "20px auto" }}
    >
      <input
        name="title"
        type="text"
        value={data?.title}
        onChange={textHandler}
        placeholder="Enter A Title"
        className="w-full p-[15px] text-[6rem] font-bold text-red-400"
      />
      <br />
      <br />
      <textarea
        className="w-full p-[15px]"
        style={{ fontSize: "30px", height: "250px" }}
        name="description"
        type="text"
        value={data?.description}
        onChange={textHandler}
        placeholder="Enter A Short Description!"
      />
      <br />
      <br />
      <div className="w-full flex flex-wrap justify-around">
        <div
          style={{
            width: "160px",
            padding: "20px",
            height: "160px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 0 5px darkgray",
            borderRadius: "50%",
          }}
        >
          <input
            type="text"
            name="experience"
            value={`${data?.experience}`}
            onChange={textHandler}
            className="w-full text-[20px]"
            style={{
              fontSize: "35px",
              fontWeight: "800",
              width: "75px",
              margin: " 0 auto",
            }}
          />
          <p
            className="text-red-400"
            style={{ margin: "10px auto", fontSize: "16px", fontWeight: 600 }}
          >
            EXPERIENCE
          </p>
        </div>
        <div
          style={{
            width: "160px",
            padding: "20px",
            height: "160px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 0 5px darkgray",
            borderRadius: "50%",
          }}
        >
          <input
            type="text"
            name="projects"
            value={`${data?.projects}`}
            onChange={textHandler}
            className="w-full text-[20px]"
            style={{
              fontSize: "35px",
              fontWeight: "800",
              width: "75px",
              margin: " 0 auto",
            }}
          />
          <p
            className="text-red-400"
            style={{ margin: "10px auto", fontSize: "16px", fontWeight: 600 }}
          >
            PROJECTS
          </p>
        </div>
        <div
          style={{
            width: "160px",
            padding: "20px",
            height: "160px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 0 5px darkgray",
            borderRadius: "50%",
          }}
        >
          <input
            type="text"
            name="clients"
            value={`${data?.clients}`}
            onChange={textHandler}
            className="w-full text-[20px]"
            style={{
              fontSize: "35px",
              fontWeight: "800",
              width: "75px",
              margin: " 0 auto",
            }}
          />
          <p
            className="text-red-400"
            style={{
              margin: "10px auto",
              fontSize: "16px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            HAPPY CLIENTS
          </p>
        </div>
        <div
          style={{
            width: "160px",
            padding: "20px",
            height: "160px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 0 5px darkgray",
            borderRadius: "50%",
          }}
        >
          <input
            type="text"
            name="team"
            value={`${data?.team}`}
            onChange={textHandler}
            className="w-full text-[20px]"
            style={{
              fontSize: "35px",
              fontWeight: "800",
              width: "75px",
              margin: " 0 auto",
            }}
          />
          <p
            className="text-red-400"
            style={{
              margin: "10px auto",
              fontSize: "16px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            TEAM MEMBERS
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AboutEditor;
