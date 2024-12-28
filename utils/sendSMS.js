import twilio from "twilio";
import config from "config";

let token = config.get("TOKEN");
let sid = config.get("SID");
let phone = config.get("PHONE")

const validateUser = new twilio(sid,token);

async function sendSMS(smsData){
    try {
        await validateUser.messages.create({
            body:smsData.body,
            to:smsData.to,
            from:phone,
        })
        console.log("SMS Sent");
    } catch (error) {
        console.log(error);
    }
}
// export default sendSMS

sendSMS({body:"HEllo",to:"+91 8010939480"})