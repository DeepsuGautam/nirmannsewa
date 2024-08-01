import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import unstruct from "@/models/unstructs";
import { UploadFiles } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectDB();
    const auth = await Auth();
    // authenticate
    if (!auth) throw new Error("Error In Authentication!");
    const form = await req.formData();
    const recievedData = {
      title: null,
      description: null,
      addiData: null,
      image: "images/home_abt_image.jpg",
    };
    console.log(form)

    // handling data and uploading data
    for (const key in recievedData) {
      //recieve data individually
      const data = await form.get(key);

      if (key !== "image" && !data) {
        //check if non-image data exists
        throw new Error("Data Not Found!");
      } else if (
        // check for image and handle
        key === "image" &&
        data instanceof File
      ) {
        const splitted = recievedData[key]?.split("/");
        await UploadFiles(data, splitted[0], splitted[1]);
      } else if (key === "addiData") {
        // for addi data object data
        recievedData[key] = JSON.parse(data);
      } else {
        // handle non file data
        recievedData[key] = data;
      }
    }

    // crrecting the file for db after all file handles
    recievedData.image = "home_abt_image.jpg";

    // editing data
    const storedData = await unstruct.findOne({ relation: "abt" });

    // make new collection if not exists
    if (!storedData) {
      const newEdit = { ...recievedData, relation: "abt" };
      const newHomeData = new unstruct(newEdit);
      await newHomeData.save();
      return NextResponse.json({ message: "Data Saved Successfully!" });
    }

    // for existing data
    for (const key in recievedData) {
      storedData[key] = recievedData?.[key];
    }

    // save
    await storedData.save();

    // send response
    return NextResponse.json({ message: "Data Saved Successfully!" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({}, { status: 500 });
  }
};
