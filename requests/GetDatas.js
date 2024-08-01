"use server";

const DOMAIN = process.env.DOMAIN;

export const getLists = async (type, page, elems, status) => {
  try {
    console.log(page, elems)
    const res = await fetch(`${DOMAIN}/api/v1/${type}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        page: page?.toString(),
        elems: elems?.toString(),
        status: status ? status?.toString() : "",
      },
    });
    if (!res.ok) throw new Error("Error While Fetching Data");
    const data = await res.json();
    
    return {
      error: false,
      data,
    };
  } catch (error) {
    console.log(error)?.message;
    return {
      error: true,
      msg: error?.message,
      data: [],
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
    if(!res.ok) throw new Error("Failed To Fetch Data!")
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
      data:{}
    };
  }
};
