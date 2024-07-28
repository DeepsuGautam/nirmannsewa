import { existsSync, unlinkSync } from "fs";
import { join } from "path";

export const deleteFile = async (file) => {
  const exists = existsSync(
    join(process.cwd(), "uploads", file || "errorDemo")
  );
  if (!exists) return;
  try {
    unlinkSync(join(process.cwd(), "uploads", file));
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};
