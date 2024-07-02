"use client";
import { sendMessage } from "@/requests/PostForm";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendMessage("contact", formData);
    if (!success) return alert("Failed to send message!");
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
    return alert("Message sent successfully!");
  };

  return (
    <form className="w-full mx-auto " onSubmit={handleSubmit}>
      <input
        name="fullname"
        type="text"
        value={formData?.fullname}
        onChange={changeHandler}
        className="contactInput"
        placeholder="Enter Full Name"
        required
      />
      <br />
      <br />
      <input
        name="email"
        type="email"
        value={formData?.email}
        onChange={changeHandler}
        className="contactInput"
        placeholder="Enter Email"
        required
      />
      <br />
      <br />

      <input
        name="phone"
        type="text"
        value={formData?.phone}
        onChange={changeHandler}
        className="contactInput"
        placeholder="Enter Phone No."
        required
      />
      <br />
      <br />

      <textarea
        name="message"
        value={formData?.message}
        onChange={changeHandler}
        placeholder="Enter Message"
        className="contactMsg"
        required
      />
      <br />
      <br />
      <input
        type="submit"
        className="w-fit bg-blue-400 text-white text-[18px] rounded-full px-[40px] py-[12.5px] transition-all duration-300 hover:bg-blue-500"
      />
    </form>
  );
};

export default ContactForm;
