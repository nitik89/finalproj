// const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport');


const transport=nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.SENDGRID_API_KEY
    }
}));
const sendEmail = async (options) => {

   

    const msg = {
        to: options.email,
        from: "nitiknarang13@gmail.com",

    }
    
    transport.sendMail({
        to:options.email,
        from:"nitiknarang13@gmail.com",
        subject:"order placed",
        html:"<h1>Your order has been placed</h1>"
    }).then(()=>{
        console.log("email sent");
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = sendEmail;
