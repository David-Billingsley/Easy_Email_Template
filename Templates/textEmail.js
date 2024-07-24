const nodemailer = require('nodemailer');

// Sends text only emails
const textonly = (Host, Port, Username, Password, To, From, Subject, Body) => {
    // if port provided is 465 return true else false
    const isSecure = Port === 465;

    const login = nodemailer.createTransport({
        host: Host,
        port: Port,
        secure: isSecure,
        auth: {
            user: Username,
            pass: Password,
        }
    });

    const message = {
        from: From,
        to: To,
        subject: Subject,
        text: Body,
    };

    login.sendMail(message, (error, info) => {
        if (error) {
            return (error);
        }
        return ('Message sent: %s', info.messageId);
    })
}

module.exports = { textonly }