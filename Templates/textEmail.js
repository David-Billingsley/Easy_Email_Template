const nodemailer = require('nodemailer');

// Sends text only emails
const textonly = async (Host, Port, Username, Password, To, From, Subject, Body) => {
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

    login.sendMail(message)
        .then(info => {
            console.log('Message sent: %s', info.messageId);
            return info.messageId;
        })
        .catch(error => {
            console.error('Error sending email:', error);
            throw error;
        });
}


module.exports = { textonly }