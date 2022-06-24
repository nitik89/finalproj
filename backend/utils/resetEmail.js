// const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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");

const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport');


const transport=nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}));
const resetEmail = async (options) => {

   

    const msg = {
        to: options.email,
        from: "nitiknarang13@gmail.com",
        
    }
    console.log('this way',options.data.reset_url);
    transport.sendMail({
        to:options.email,
        from:"nitiknarang13@gmail.com",
        subject:"reset Password",
        html:`<h1>${options.data.reset_url}</h1>`
    }).then(()=>{
        console.log("email sent");
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = resetEmail;