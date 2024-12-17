const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


dotenv.config({
    path: '../config.env'
});

const sendEmail = async (options) => {

    let defaultTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'piyushrangari55@gmail.com',
            pass: '369piyush123rangari'
        }
    });

    // let transport = await nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: "2d420df86737ae",
    //         pass: "6e1945e3127948"
    //     }
    // });

    await defaultTransport.sendMail({
        from: 'piyushrangari55@gmail.com',
        to: options.email,
        subject: options.subject,
        html: options.message,
    },(error, value) => {
        if (error) {
            console.log(error);
        } else {
            console.log(value);
        }
    });
}

module.exports = sendEmail;