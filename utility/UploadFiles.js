import { existsSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";
import { UniqueGenerator } from "./UniqueName";

export const predefinedObject = async (file, filePath) => {
  try {
    const bufferred = Buffer.from(await file.arrayBuffer());
    console.log(bufferred);

    const dir = join(process.cwd(), "uploads", filePath);

    // Check if the file exists and delete it if it does
    if (existsSync(dir)) {
      try {
        unlinkSync(dir);
      } catch (error) {
        throw new Error(`Error deleting existing file: ${error.message}`);
      }
    }

    // Write the new file
    try {
      writeFileSync(dir, bufferred);
    } catch (error) {
      console.error(`Error writing file: ${error.message}`);
      throw new Error(error.message);
    }
    return true;
  } catch (error) {
    console.error(`General error: ${error.message}`);
    return false;
  }
};

export const newImageUpload = async (file, filePath, oldFileName) => {
  try {
    const bufferred = Buffer.from(await file.arrayBuffer());
    console.log(filePath, oldFileName)

    const oldDir = join(process.cwd(), "uploads", filePath, oldFileName);

    // Check if the file exists and delete it if it does
    if (existsSync(oldDir)) {
      try {
        unlinkSync(oldDir);
      } catch (error) {
        console.log(`Error deleting existing file: ${error.message}`);
      }
    }
    const ext = file?.name?.split(".")?.pop();
    const name = await UniqueGenerator(ext);
    const newDir = join(process.cwd(), "uploads", filePath, name);
    // Write the new file
    try {
      writeFileSync(newDir, bufferred);
    } catch (error) {
      console.error(`Error writing file: ${error.message}`);
      throw new Error(error.message);
    }
    return {error:false, data:name};
  } catch (error) {
    console.error(`General error: ${error.message}`);
    return {error:true};
  }
};

// data
export const uploadNewImage=async(file, filePath)=>{
  try {
    const bufferred = Buffer.from(await file.arrayBuffer());

    const ext = file?.name?.split(".")?.pop();
    const name = await UniqueGenerator(ext);
    const newDir = join(process.cwd(), "uploads", filePath, name);
    // Write the new file
    try {
      writeFileSync(newDir, bufferred);
    } catch (error) {
      console.error(`Error writing file: ${error.message}`);
      throw new Error(error.message);
    }
    return {error:false, data:name};
  } catch (error) {
    console.error(`General error: ${error.message}`);
    return {error:true};
  }
};
