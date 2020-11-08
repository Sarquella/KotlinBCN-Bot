const Discord = require('discord.js')
const config = require('./config.js')
const commands = require('./commands.js')

const client = new Discord.Client()

client.on('ready', () => {
    console.log('Bot is ready!')
})

client.on('message', message => {
    if(message.author.bot) return

    const commandPrefix = new RegExp(`^${config.prefix}\\w`)
    if(!commandPrefix.test(message.content)) return

    const command = message.content.substring(config.prefix.length)
    commands.handle(command)
})

client.login(config.token)

