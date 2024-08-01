import { makeGetReqs } from "@/AdminDataHandle/AdminReq";
import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const page = async ({ params }) => {
  const data = await makeGetReqs(`/contact/${params?.id}`, 0, 0);
  if (data?.error)
    return (
      <div className="w-full min-h-[calc(100vh-100px)] relative">
        <div className="text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1>Could Not Find This Message {":("}</h1>
          <Link
            href={`/dashboard/contact`}
            className="w-full my-[40px] justify-center flex gap-[10px] text-[18px]  font-medium text-blue-400 transition-all duration-300 hover:text-blue-600"
          >
            <FaAngleLeft style={{ marginTop: "5px", fontSize: "14px" }} /> Back
            to contact lists
          </Link>
        </div>
      </div>
    );

  const { fullname, email, phone, message, date } = data?.data;
  return (
    <div className="w-full p-[20px]">
      <Link
        href={`/dashboard/contact`}
        className="w-fit flex gap-[10px] text-[18px] font-medium text-blue-400 transition-all duration-300 hover:text-blue-600"
      >
        <FaAngleLeft style={{ marginTop: "5px", fontSize: "14px" }} /> Back to
        contact lists
      </Link>
      <br />
      <br />
      <h2 className="w-fit text-[16px] pt-[40px] px-[20px] text-gray-600">
        Date : &nbsp;&nbsp; {date?.split("T")[0]}
      </h2>
      <h2 className="w-fit text-[16px] py-[30px] px-[20px] text-gray-600">
        Phone : &nbsp;&nbsp; {phone}
      </h2>
      <h1 className="w-fit text-[16px] py-[10px] px-[80px] text-gray-700 bg-gray-100 border rounded-full">
        {email} &nbsp;&nbsp; {"( " + fullname + " )"}
      </h1>
      <h2 className="w-fit text-[18px] p-[20px] text-gray-600">Message:</h2>
      <p className="w-full h-fit min-h-[300px] text-[18px] px-[20px] text-gray-600">
        {message}
      </p>

    </div>
  );
};
export default page;
