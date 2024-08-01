import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "fs";
import { join, extname } from "path";
import { UniqueGenerator } from "./UniqueName";

export const UploadFiles = async (file, folder, name) => {
  try {
    // Make full absolute folder path
    const folderPath = join(process.cwd(), "uploads", folder);
    const folderExists = existsSync(folderPath);
    if (!folderExists) {
      mkdirSync(folderPath, { recursive: true });
    }

    let finalname = name; // Name of file

    if (!name) {
      const extension = extname(file?.name);
      const newName = await UniqueGenerator(extension);
      finalname = newName;
    }

    // Make full file path
    const fullFilePath = join(folderPath, finalname);

    // Check if file pre-exists and delete old file
    const preExists = existsSync(fullFilePath);
    if (preExists) {
      unlinkSync(fullFilePath);
    }

    const bufferedFile = Buffer.from(await file.arrayBuffer());
    // Write file with name
    writeFileSync(fullFilePath, bufferedFile);

    return { success: true, path: finalname };
  } catch (error) {
    console.log(error?.message);
    return { success: false, error: error?.message };
  }
};
