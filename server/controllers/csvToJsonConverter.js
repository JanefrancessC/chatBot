import csvToJSON from "csv-file-to-json";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname } from "node:path";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);
// console.log("currentDir: ", currentDir);

const csvFilePath = pathToFileURL(`${currentDir}/../data/leads.csv`);


// const csvFilePath = path.resolve(__dirname, "../data/leads.csv");

// This function converts CSV files to JSON format
// export const convertCSVToJSON = async () => {
//   try {
//     const jsonData = await csvToJSON({
//       filePath: csvFilePath,
//       separator: ",",
//     });
//     console.log("Converted data: ", jsonData);

//     return jsonData;
//   } catch (error) {
//     console.error({ "Error locating file": error.message });
//   }
// };

export const convertCSVToJSON = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonData = await csvToJSON({
        filePath: csvFilePath,
        separator: ",",
      });
      // console.log("Converted data: ", jsonData);
      resolve(jsonData);
    } catch (error) {
      console.error({ "Error locating file": error.message });
      reject(error);
    }
  });
};