require('dotenv').config()
const sgMail = require('@sendgrid/mail');
const sendGridApiKey = process.env.SENDGRID_API;

sgMail.setApiKey(sendGridApiKey);

const sendEmail =(email, subject, message)=>{

    sgMail.send({
        to: 'antoinealex1234@gmail.com',
        from: 'antoinealex1234@gmail.com',
        subject: `${email}: ${subject}`,
        text: message
    })
}

module.exports = {
    sendEmail
}