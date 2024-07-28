"use client";
import { handlePwdChange } from "@/AdminDataHandle/AdminReq";
import React, { useState } from "react";

const ChangePwd = ({ domain }) => {
  const [newData, setNewData] = useState({
    oldPwd: "",
    newPwd: "",
    rePwd: "",
  });

  console.log(domain);

  const handleText = (e) => {
    const { name, value } = e?.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newData?.oldPwd || !newData?.newPwd || !newData?.rePwd) {
      return alert("Enter All Field!");
    }

    if (newData?.newPwd !== newData?.rePwd)
      return alert("New passwords Didnt match!");
    const success = await handlePwdChange(newData);
    if (success) return alert("Password Changed Successfully!");
    return alert(
      "Could not change password. Check If You Entered Incorrect Password!"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute w-fit rounded-2xl shadow-xl"
      style={{
        padding: "20px",
        background: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 style={{ margin: "20px 0", fontSize: "22px", fontWeight: "600" }}>
        Change Password
      </h1>
      <input
        type="text"
        name="oldPwd"
        value={newData?.oldPwd}
        onChange={handleText}
        placeholder="Enter Old Password"
        style={{
          width: "300px",
          padding: "5px 10px",
          border: "2px solid dimgray",
          fontSize: "18px",
          borderRadius: "10px",
        }}
        required
      />
      <br />
      <br />
      <input
        type="password"
        name="newPwd"
        value={newData?.newPwd}
        onChange={handleText}
        placeholder="Enter Old Password"
        style={{
          width: "300px",
          padding: "5px 10px",
          border: "2px solid dimgray",
          fontSize: "18px",
          borderRadius: "10px",
        }}
        required
      />
      <br />
      <br />
      <input
        type="password"
        name="rePwd"
        value={newData?.rePwd}
        onChange={handleText}
        placeholder="Re-Enter Password"
        style={{
          width: "300px",
          padding: "5px 10px",
          border: "2px solid dimgray",
          fontSize: "18px",
          borderRadius: "10px",
        }}
        required
      />
      <br />
      <br />
      <button
        className="bg-blue-400 text-white rounded-full hover:bg-blue-500"
        style={{ padding: "10px 20px", fontSize: "18px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default ChangePwd;
