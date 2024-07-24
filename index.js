const { emailwithhtml } = require('./Templates/htmlEmail')
const { textonly } = require('./Templates/textEmail')

const textEmail = (Host, Port, Username, Password, To, From, Subject, Body) => {
    textonly(Host, Port, Username, Password, To, From, Subject, Body)
    return true
}

const htmlEmail = (Host, Port, Username, Password, To, From, Subject, Html) => {
    emailwithhtml(Host, Port, Username, Password, To, From, Subject, Html)
}

module.exports = { textEmail, htmlEmail }
