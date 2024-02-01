import csvToJSON from "csv-file-to-json";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname } from "node:path";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

const csvFilePath = pathToFileURL(`${currentDir}/../data/leads.csv`);


export const convertCSVToJSON = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonData = await csvToJSON({
        filePath: csvFilePath,
        separator: ",",
      });
      resolve(jsonData);
    } catch (error) {
      console.error({ "Error locating file": error.message });
      reject(error);
    }
  });
};