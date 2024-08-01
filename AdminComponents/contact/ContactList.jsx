"use client";
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { makeGetReqs } from "@/AdminDataHandle/AdminReq";

const ContactList = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (data?.length === 0) {
      const call = async () => {
        const fetched = await makeGetReqs("/contact", 0, 40);
        const newdata = await fetched?.data;
        setData(newdata);
      };
      
      call();
    }
  }, []);

  useEffect(() => {
    const call = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await makeGetReqs("/contact", index, 40);
        const newdata = await fetched?.data;
        if (!fetched.error && newdata?.length > 0) {
          setData((prev) => [...prev, ...newdata]);
          setIndex((prev) => prev + 1);
        }
      }
    };

    if (data?.length > 0) {
      window.addEventListener("scroll", call);

      return () => {
        window.removeEventListener("scroll", call);
      };
    }
  }, [data, index]);

  return (
    <div className="w-full p-[20px]">
      {Array.isArray(data) &&
        data?.map((item, idx) => (
          <ContactCard data={item} key={idx}/>
        ))}
    </div>
  );
};

export default ContactList;
