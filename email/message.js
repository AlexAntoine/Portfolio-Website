require('dotenv').config()
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.API_KEY);

const sendEmail =(email, subject, message)=>{

    sgMail.send({
        to: 'antoinealex1234@gmail.com',
        from: 'antoinealex1234@gmail.com',
        subject:`${email}- ${subject}`,
        text: message
    });
    console.log('message sent');
}

module.exports = {
    sendEmail
}