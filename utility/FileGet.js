import fs from "fs";
import path from "path";

export const ImageSender = async (filePath, name) => {
  try {
    const joins = path.resolve(process.cwd(), "uploads", filePath, name);
    const exists = fs.existsSync(joins);
    if (!exists) throw new Error("File Doesnot Exists!");
    const myFile = fs.readFileSync(joins);
    return myFile;
  } catch (err) {
    console.log(err?.message);
    return false;
  }
};
