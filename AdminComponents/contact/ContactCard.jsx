import Link from "next/link";
import React from "react";
const ContactCard = ({ data}) => {

  return (
    <Link
      href={`/dashboard/contact/${data?._id}`}
      className="text-[14px] w-full flex text-gray-600 p-[10px] px-[20px] border-b duration-300 transition-all hover:bg-slate-100 gap-[25px]"
    >
      <h2 className="font-bold w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">
        {data?.fullname}
      </h2>
      <h2 className="font-normal text-gray-500 w-0 sm:w-full overflow-hidden whitespace-nowrap text-ellipsis">
        {data?.message?.split("").slice(0, 100).join("")}
      </h2>
      <h2 className="w-[70px] min-w-[50px] overflow-hidden font-normal whitespace-nowrap">
        {data?.date?.split("T")[0]?.split("-").slice(1, 3).join("/")}
      </h2>
    </Link>
  );
};

export default ContactCard;
