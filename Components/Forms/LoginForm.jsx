"use client";
import { loginPost } from "@/AdminDataHandle/AdminReq";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const textHandler = (e) => {
    const { name, value } = e?.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e?.preventDefault();
    const handled = await loginPost(data);
    if (handled) return router.push("/dashboard");
    return alert("Could not login! Enter correct username and password!");
  };
  return (
    <form
      onSubmit={submit}
      className="absolute shadow-xl text-gray-800"
      style={{
        position:"absolute",
        padding: "15px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "300px",
        fontSize: "25px",
        fontWeight: 600,
      }}
    >
      <h1 className="my-[10px]">Login To Continue!</h1>
      <input
        className="w-full my-[10px] border-2"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "7.5px",
          fontSize: "18px",
        }}
        type="text"
        name="username"
        value={data?.username}
        onChange={textHandler}
        placeholder="Username"
        required
      />
      <input
      type="password"
        className="w-full my-[20px] border-2"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "7.5px",
          fontSize: "18px",
        }}
        name="password"
        value={data?.password}
        onChange={textHandler}
        placeholder="Password"
        required
      />
      <button
        className="w-full bg-blue-400 hover:bg-blue-500 transition-all text-white duration-300 rounded-full"
        style={{ padding: "10px", fontSize:"18px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
