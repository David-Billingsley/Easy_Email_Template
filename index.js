const { emailwithhtml } = require('./Templates/htmlEmail')
const { textonly } = require('./Templates/textEmail')

const textEmail = async (Host, Port, Username, Password, To, From, Subject, Body) => {
    const result = await textonly(Host, Port, Username, Password, To, From, Subject, Body)
    return result
}

const htmlEmail = async (Host, Port, Username, Password, To, From, Subject, Html) => {
    const result = await emailwithhtml(Host, Port, Username, Password, To, From, Subject, Html)
    return result
}

module.exports = { textEmail, htmlEmail }
