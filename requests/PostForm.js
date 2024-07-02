"use server";

const DOMAIN = process.env.DOMAIN;

export const sendMessage = async (type, data) => {
  try {
    const res = await fetch(`${DOMAIN}/api/v1/${type}`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) return true;
    else throw new Error("Not Okay Response");
  } catch (error) {
    console.log(error);
    return false;
  }
};
