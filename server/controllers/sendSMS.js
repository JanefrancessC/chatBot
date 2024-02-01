import twilio from "twilio";


export const sendSMS = async(name, country, cellphone) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
    const twilioNumber = process.env.TWILIO_NUMBER
    const messageService = process.env.TWILIO_MESSAGE_SERVICE
    

    const client = twilio(accountSid, authToken);
    const initialMessage = `Hello ${name} from ${country}`
    
    try {
        const twilioMessage = await client.messages.create({
          body: initialMessage,
          from: messageService,
          to: cellphone,
        });

        console.log({ success: "Successfully sent an initial message", "message SID": twilioMessage.sid }); 
    } catch (error) {
        console.error({ "Error sending SMS": error.message });
    }
}