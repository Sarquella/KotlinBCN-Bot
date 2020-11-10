const Discord = require('discord.js')
const config = require('../config.js')

const command = 'help'

const handle = (content, message) => {
    if(content !== command) return

    const helpMessage = new Discord.MessageEmbed()
    .setColor(config.primaryColor)
    .setTitle('**🤖 Available commands:**')
    .addFields(
        { name: '**help**', value: `Lists all the available commands for the ${config.botId} bot.` },
        { name: '**welcome**', value: 'Displays a welcome message with a summary of the server.' },
        { name: '**rules**', value: 'Lists the server community rules.' },
    )

    message.channel.send(helpMessage)
}

module.exports.handle = handle