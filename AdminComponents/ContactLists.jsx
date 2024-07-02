"use client";

import { makeGetReqs } from "@/AdminDataHandle/AdminReq";
import React, { useEffect, useState } from "react";

const ContactLists = ({ data }) => {
  // all contact lists
  const [all, setAll] = useState([]);
  const [index, setIndex] = useState(1);

  //   use effect for initial data
  useEffect(() => {
    if (data) {
      setAll(data);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (all?.length > 0) {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          const fetchData = async () => {
            const newData = await makeGetReqs(`/contact`, index, 0);

            setAll((prev) => [...prev, ...newData?.data]);
            setIndex((prev) => prev + 1);
          };
          fetchData();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [all, index]);
  return (
    <section
      className="w-full"
      style={{ padding: "20px", backgroundColor: "#e6e6e6" }}
    >
      {all?.length > 0 ? (
        all?.map((item, index) => (
          <div
            key={index}
            className="w-full p-[20px] shadow-lg text-gray-800 text-[20px] bg-white rounded-2xl"
            style={{ background: "white", marginBottom:"20px" }}
          >
            <strong>Name : </strong> {item?.fullname}
            <br />
            <strong>Email : </strong> {item?.email}
            <br />
            <strong>Phone : </strong> {item?.phone}
            <br />
            <strong>Message : </strong> {item?.message}
            <br />
          </div>
        ))
      ) : (
        <h1
          style={{
            width: "100%",
            fontSize: "25px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          No Contacts To Show Yet
        </h1>
      )}
    </section>
  );
};

export default ContactLists;
