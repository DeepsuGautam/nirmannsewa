import React from "react";
import ProjectCard from "./ProjectCard";
import LinkerComp from "./LinkerComp";
import { getLists } from "@/requests/GetDatas";

const ProjectsCardHolder = async () => {
  const res = await getLists("projects", 0, 4);
  const data = await res?.data;

  return (
    <section
      className="w-full  text-gray-800 bg-cover bg-center bg-fixed"
    >
      <div className="w-full px-[20px] py-[75px] bg-blue-100 bg-opacity-80 bg-cover">
        <center>
          <h1 className="text-[5rem] font-bold">
            Projects We&apos;ve Completed
          </h1>
        </center>
        <br />
        <br />
        <br />
        <div className="w-full flex flex-wrap justify-center gap-[20px] mx-auto pb-[75px]">
          {data?.map((item, index) => (
            <ProjectCard data={item} key={index} />
          ))}
        </div>
        <center>
          <LinkerComp
            link={`/about/projects`}
            addiStyle={{ width: "fit-content", margin: "0 auto" }}
          >
            <button className="w-fit py-[10px] shadow-xl text-[18px] px-[30px] bg-[orange] text-white transition-all duration-300 hover:bg-red-400 rounded-full">
              See All Projects
            </button>
          </LinkerComp>
        </center>
      </div>
    </section>
  );
};

export default ProjectsCardHolder;
