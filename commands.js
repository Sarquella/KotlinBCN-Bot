const rules = require('./commands/rules.js')

const commands = [
    rules
]

const handle = (content, message) => {
    commands.forEach( command => {
        command.handle(content, message)
    })
}

module.exports.handle = handle