const nodemailer = require('nodemailer');

// Sends emails with html body
const emailwithhtml = (Host, Port, Username, Password, To, From, Subject, Html) => {
    // if port provided is 465 return true else false
    const isSecure = port === 465;

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
        html: Html,
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

module.exports = { emailwithhtml }