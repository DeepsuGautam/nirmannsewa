import React from "react";
import NewsHolder from "./NewsHolder";
import NewsCard from "../Reusable/NewsCard";
import { getLists } from "@/requests/GetDatas";

const NewsComp = async () => {
  const res = await getLists("news", 0, 3);
  const data = await res?.data;

  return (
    <NewsHolder length={data?.length}>
      {data?.map((item, index) => (
        <NewsCard data={item} key={index} length={data?.length} />
      ))}
    </NewsHolder>
  );
};

export default NewsComp;
