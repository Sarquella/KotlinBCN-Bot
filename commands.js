const help = require('./commands/help.js')
const welcome = require('./commands/welcome.js')
const rules = require('./commands/rules.js')

const commands = [
    help,
    welcome,
    rules
]

const handle = (content, message) => {
    commands.forEach( command => {
        command.handle(content, message)
    })
}

module.exports.handle = handle