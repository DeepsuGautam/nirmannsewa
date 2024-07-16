import React from "react";
import LinkerComp from "./LinkerComp";
const NewsCard = ({ data }) => {
  return (
    <div
      className={`w-[100%] h-[550px] lg:h-[450px] flex lg:flex-row flex-col justify-end bg-cover bg-center`}
      style={{ backgroundImage: `url("/api/files/news/${data?.image}")` }}
    >
      <div className="w-full lg:w-[50%] lg:min-w-[700px] lg:h-[450px] h-full md:h-[350px] bg-[#ff863f] bg-opacity-80 p-[4rem]">
        <div className="w-[100%] md:w-[80%] text-left">
          <h1
            className="w-full font-bold text-[3.5rem] text-gray-800"
            style={{ textTransform: "uppercase" }}
          >
            {data?.title}
          </h1>
          <p className="w-full text-[18px] text-gray-800 py-[2.5rem]">
            {data?.description?.split(" ")?.slice(0, 39)?.join(" ")}...
          </p>
          <LinkerComp link={`/news/${data?._id}`}>
            <button className="w-fit px-[2.5rem] py-[1rem] text-[18px] text-white bg-[#ff4b4b] rounded-full shadow-xl hover:bg-red-500 transition-all duration-300">
              Read More
            </button>
          </LinkerComp>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
