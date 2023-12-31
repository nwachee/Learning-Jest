import { createTransport } from 'nodemailer';
import 'dotenv/config';
// console.log(process.env.EMAIL_USER)
export const sendMail = async (email) => {
    let mailTransporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS    
        }
    });
     
    let mailDetails = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Another Test mail',
        text: 'K-way Nwanne m'
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}
