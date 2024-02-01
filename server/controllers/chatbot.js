import { sendSMS } from "./sendSMS.js";
import { convertCSVToJSON } from "./csvToJsonConverter.js";
import path from "path";

export const chatbot = async (req, res) => {
 try {
     const data = await convertCSVToJSON();
     console.log("data: " + data);

     // iterate through the data and send SMS to each lead
     for (const lead of Object.values(data)) {
       const { name, country, cellphone } = lead;
       await sendSMS(name, country, cellphone);
     }
     res
       .status(200)
       .json({
         success: true,
         message: "Successfully sent an initial message",
       });
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
 }
};