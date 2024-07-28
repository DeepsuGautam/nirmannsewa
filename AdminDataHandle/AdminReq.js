"use server";

import { cookies } from "next/headers";

const domain = process.env.DOMAIN;

export const EditPageData = async (type, data) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/admin${type}`, {
      cache: "no-store",
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: data,
    });
    if (!res.ok) throw new Error("Not Responding Proper!");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addNewData = async (type, data) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/admin${type}`, {
      cache: "no-store",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: data,
    });
    if (!res.ok) throw new Error("Not Responding Proper!");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteData = async (url) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/admin${url}`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Not Responding Proper!");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const makeGetReqs = async (url, page, elems) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/admin${url}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        page,
        elems,
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return { error: false, data };
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};

export const handlePwdChange = async (newData) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/admin/change-password`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        newpassword: newData?.newPwd,
        oldpassword: newData?.oldPwd,
      }),
    });
    if (res?.ok) return true;
    throw new Error(res?.msg);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const loginPost = async (data) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/validation`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const data = await res.json();
      const cookie = data?.cookie;
      cookies().set("token", cookie, { maxAge: 86400 * 7 });
      return true;
    }
    throw new Error("Failed To Login");
  } catch (e) {
    console.log(e);
    return false;
  }
};
