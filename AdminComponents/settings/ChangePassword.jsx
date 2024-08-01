"use client";
import { addNewData } from "@/AdminDataHandle/AdminReq";
import React, { useState } from "react";

const ChangePassword = () => {
  const [pwds, setPwds] = useState({
    oldpassword: "",
    password: "",
    repassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e?.target;
    setPwds((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pwds?.password !== pwds?.repassword) return alert("Enter Same Passwords!");
    const change = await addNewData("/change-password", JSON.stringify(pwds));
    if (!change) return alert("Enter Correct Credentials!");
    setPwds({ oldpassword: "", password: "", repassword: "" });
    return alert("Password Changed!");
  };

  return (
    <form className="w-full p-[20px]" onSubmit={handleSubmit}>
      <h1 className="w-full text-[25px] text-gray-600">Change Password</h1>
      <br />
      <br />
      <input
        name="oldpassword"
        required
        onChange={handlePasswordChange}
        value={pwds?.oldpassword}
        type="text"
        className="w-full text-[16px] py-[10px] px-[10px] shadow-md rounded-xl"
        placeholder="Enter Old Password"
      />
      <br />
      <br />
      <input
        required
        name="password"
        onChange={handlePasswordChange}
        value={pwds?.password}
        type="text"
        className="w-full text-[16px] py-[10px] px-[10px] shadow-md rounded-xl"
        placeholder="Enter New Password"
      />
      <br />
      <br />
      <input
        name="repassword"
        required
        onChange={handlePasswordChange}
        value={pwds?.repassword}
        type="text"
        className="w-full text-[16px] py-[10px] px-[10px] shadow-md rounded-xl"
        placeholder="Re-Enter Password"
      />
      <br />
      <br />
      <button
        type="submit"
        className="w-fit px-[20px] py-[10px] text-[16px] bg-blue-400 text-white rounded-lg transition-all duration-300 hover:bg-blue-500"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
