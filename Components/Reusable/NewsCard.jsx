import React from "react";
import LinkerComp from "./LinkerComp";
const NewsCard = ({ data }) => {


  const handleTextSlice=(text)=>{
    if(text.length<=200) return text;
    const splittedValue =  text?.split("").slice(0, 201)?.join("");
    return splittedValue + " ...."
 }
  return (
    <div
      className={`w-[100%] h-[550px] lg:h-[450px] flex lg:flex-row flex-col text-left justify-end bg-cover bg-center`}
      style={{ backgroundImage: `url("/api/files/projects/${data?.image}")` }}
    >
      <div className="w-full lg:w-[50%] lg:min-w-[700px] lg:h-[450px] text-left h-full md:h-[350px] bg-[#0180a7] bg-opacity-70 p-[4rem]">
        <div className="w-[100%] md:w-[80%]">
          <h1
            className="w-full font-bold text-[3.5rem] text-white"
            style={{ textTransform: "uppercase" }}
          >
            {data?.title}
          </h1>
          <p className="w-full text-[20px] text-white py-[2.5rem]">
            {handleTextSlice(data?.description)}
          </p>
          <LinkerComp link={`/completed-projects/${data?._id}`}>
            <button className="w-fit px-[2.5rem] py-[1rem] text-[18px] text-white bg-orange-400 rounded-full shadow-xl hover:bg-orange-500 transition-all duration-300">
              Read More
            </button>
          </LinkerComp>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
