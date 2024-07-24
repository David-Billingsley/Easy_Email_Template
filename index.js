const nodemailer = require('nodemailer');

const textEmail = (Host, Port, Username, Password, To, From, Subject, Body) => {
    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
        host: Host,
        port: Port,
        secure: isSecure,
        auth: {
            user: Username,
            pass: Password, 
        }
    });
    
    const mailOptions = {
        from: From,
        to: To,
        subject: Subject,
        text: Body,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    })
}

module.exports = {textEmail}
