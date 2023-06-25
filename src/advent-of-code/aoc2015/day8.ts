import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 8));
