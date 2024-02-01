import twilio from "twilio";


export const sendSMS = async(name, country, cellphone) => {
    const accountSid = "ACa052ac4836734e4cd2fcdc1be43b8143";
    const authToken = "7b61ff2541aef2a600a29d11dbccd3e6"
    const twilioNumber = +447488893948;
    // const accountSid = "AC3adda8f676657cd789d5f4cabd1053de";
    // const authToken = "de04ae1754ef72b5b8b8c2d89f98caa9";
    // const MESSAGING_SERVICE_SID = "MGdd2933a19702ea291c3210751d7abb8c";


    // console.log(twilioNumber);
    // console.log(process.env);

    // You can edit this in the env to your own number for testing purposes
    // cellphone = process.env.PERSONAL_NUMBER



    const client = twilio(accountSid, authToken);
    const initialMessage = `Hello ${name} from ${country}`
    
    try {
        const twilioMessage = await client.messages.create({
          body: initialMessage,
          from: twilioNumber,
          to: cellphone,
        });

        console.log({ success: "Successfully sent an initial message", "message SID": twilioMessage.sid }); 
    } catch (error) {
        console.error({ "Error sending SMS": error.message });
    }
}