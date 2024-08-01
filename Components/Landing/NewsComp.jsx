import React from "react";
import NewsHolder from "./NewsHolder";
import NewsCard from "../Reusable/NewsCard";
import { getLists } from "@/requests/GetDatas";

const NewsComp = async () => {
  const res = await getLists("projects", 0, 3, "completed");
  const data = await res?.data;

  // this components is used to display completed projecrts.
  // news is cancelled
  return (
    <NewsHolder length={data?.length}>
      {Array.isArray(data) &&
        data?.map((item, index) => (
          <NewsCard data={item} key={index} />
        ))}
    </NewsHolder>
  );
};

export default NewsComp;
