import fs from "fs";

export function readFile(path: string): string | null {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error("Could not read file: ", err);
    return null;
  }
}
