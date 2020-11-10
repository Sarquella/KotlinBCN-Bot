const welcome = require('./commands/welcome.js')
const rules = require('./commands/rules.js')

const commands = [
    welcome,
    rules
]

const handle = (content, message) => {
    commands.forEach( command => {
        command.handle(content, message)
    })
}

module.exports.handle = handle