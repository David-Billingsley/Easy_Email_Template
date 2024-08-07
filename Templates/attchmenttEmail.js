const nodemailer = require('nodemailer');

// Sends text only emails with attachments.  Data type of attachments is JSON.
// There are two different methods to pass Attachments, please see the folder JsonExamples\eamilattachment to see the methods
const attachmentonly = async (Host, Port, Username, Password, To, CC, BCC, From, Subject, Body, listofattachments) => {
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
        cc: CC,
        bcc: BCC,
        subject: Subject,
        text: Body,
        attachments: listofattachments
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


module.exports = { attachmentonly }