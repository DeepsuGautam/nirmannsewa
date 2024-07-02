"use server";

const DOMAIN = process.env.DOMAIN;

export const getLists = async (type, page, elems) => {
  try {
    const res = await fetch(`${DOMAIN}/api/v1/${type}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        page,
        elems,
      },
    });
    const data = await res.json();
    return {
      error: false,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      msg: error?.message,
    };
  }
};

export const getSoloData = async (type, id) => {
  try {
    const res = await fetch(`${DOMAIN}/api/v1/${type}/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return {
      error: false,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      msg: error?.message,
    };
  }
};
