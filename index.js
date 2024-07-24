const nodemailer = require('nodemailer');

// Sends text only emails
const textEmail = (Host, Port, Username, Password, To, From, Subject, Body) => {
    // if port provided is 465 return true else false
    const isSecure = Port === 465;

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
            return (error);
        }
        return('Message sent: %s', info.messageId);
    })
}

// Sends emails with html body
const htmlEmail = (Host, Port, Username, Password, To, From, Subject, Html) => {
    // if port provided is 465 return true else false
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
        html: Html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return (error);
        }
        return ('Message sent: %s', info.messageId);
    })
}

module.exports = {textEmail, htmlEmail}
