const { attachmentonly } = require('./Templates/attchmenttEmail')
const { emailwithhtml } = require('./Templates/htmlEmail')
const { textonly } = require('./Templates/textEmail')

const textEmail = async (Host, Port, Username, Password, To, CC, BCC, From, Subject, Body) => {
    const result = await textonly(Host, Port, Username, Password, To, CC, BCC, From, Subject, Body)
    return result
}

const htmlEmail = async (Host, Port, Username, Password, To, CC, BCC, From, Subject, Html) => {
    const result = await emailwithhtml(Host, Port, Username, Password, To, CC, BCC, From, Subject, Html)
    return result
}

// attachments has a data type of JSON
const attchemntEmail = async (Host, Port, Username, Password, To, CC, BCC, From, Subject, Html, attachment) => {
    const result = await attachmentonly(Host, Port, Username, Password, To, CC, BCC, From, Subject, Html, attachment)
    return result
}

module.exports = { textEmail, htmlEmail, attchemntEmail }
