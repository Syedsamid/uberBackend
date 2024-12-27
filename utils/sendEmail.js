import nodemailer from "nodemailer";
import config from "config";


let password = config.get("APP_PASS");
let email = config.get("EMAIL");

console.log();

async function sendEmail(emailData){
    try {
        
        let validateUser = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth:{
                user:email,
                pass:password
            }
        })

        let sending = validateUser.sendMail({
            from:`From Email Service ${email}`,
            subject:emailData.subject,
            to:emailData.to,
            text:emailData.text
        })

        console.log("Email Sent Successfully");


    } catch (error) {
        console.log(error);
    }
}
// let sendingObject = {
//     subject: "hello samid",
//     to: "samidsyed1720@gmail.com",
//     text: "Hii samid how are you",
// }

sendEmail({subject:" Testing sms Demo",to: "samjalna005@gmail.com", text:"hello samid"});


