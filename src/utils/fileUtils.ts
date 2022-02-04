import { readFileSync } from "fs";
import { ICity } from "../types/weathers";

/**
 * ### Getting cities file.
 * @returns Cities file.
 */
export const getCitiesAsFile = async () => {
  return readFileSync("src/data/city.list.json", "utf-8");
};

/**
 * ### Getting cities data.
 * @returns Cities data.
 */
export const getCities = async (): Promise<ICity[]> => {
  const file = await getCitiesAsFile();
  return JSON.parse(file);
};
