import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import LinkerComp from "./LinkerComp";
import ContactForm from "../Forms/ContactForm";
const ContactUs = ({ data }) => {
  return (
    <section className="w-full flex flex-wrap bg-white around">
      <div className="w-full max-w-[500px] bg-[#008064] p-[20px] xl:p-[40px] py-[80px] text-white">
        <h1 className="text-[3.5rem] font-bold">Contact Information</h1>
        <br />
        <div className="text-[1.8rem] font-semibold">
          <p className="flex my-[30px] flex-wrap">
            <IoMdMail className="m-[5px]" />
            {data?.email || ""}
          </p>
          <p className="flex my-[30px] flex-wrap">
            <FaPhoneAlt className="m-[5px]" />
            {data?.phone || ""}
          </p>
          <p className="flex my-[30px] flex-wrap">
            <FaLocationDot className="m-[5px]" />
            {data?.location || ""}
          </p>
        </div>
        <div className="text-[30px] font-semibold flex gap-[40px] justify-start mt-[80px]">
          <LinkerComp
            addiStyle={{ width: "fit-content" }}
            link={data?.facebook || ""}
          >
            <FaFacebook className="transition-all duration-300 hover:text-white" />
          </LinkerComp>
          <LinkerComp
            addiStyle={{ width: "fit-content" }}
            link={data?.instagram || ""}
          >
            <FaInstagram className="transition-all duration-300 hover:text-white" />
          </LinkerComp>
          <LinkerComp
            addiStyle={{ width: "fit-content" }}
            link={data?.linkedin || ""}
          >
            <FaLinkedin className="transition-all duration-300 hover:text-white" />
          </LinkerComp>
        </div>
      </div>
      {/* div */}
      <div className="w-full max-w-[600px] p-[40px] mx-auto text-gray-800">
        <h1 className="font-bold text-[3.5rem]">Message Us</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
