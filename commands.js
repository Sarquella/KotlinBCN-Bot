const commands = [

]

const handle = content => {
    commands.forEach( command => {
        command.handle(content)
    })
}

module.exports.handle = handle