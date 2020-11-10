const Discord = require('discord.js')
const config = require('../config.js')

const command = 'welcome'

const handle = (content, message) => {
    if(content !== command) return

    const headerMessage = `**Welcome to KotlinBCN ${config.emojis.kug}**\n` + 
    'We are an enthusiastic Barcelona based group about the awesome Kotlin JVM language!\n' + 
    'Anyone willing to learn, share their experience or talk about anything Kotlin is welcome.\n'

    const welcomeMessage = new Discord.MessageEmbed()
    .setColor(config.primaryColor)
    .addFields(
        {name: '**👋 Say Hello!**', value: `Introduce yourself to the rest of the community at ${config.channels.intros} and meet other Kotlin interested people.`},
        {name: '**💬 Talk Kotlin!**', value: `Use any of the multiple channels like ${config.channels.kotlinGeneral} to discuss anything about Kotlin, or even any other programming related topic!`},
        {name: '**📣 Promote Yourself**', value: `Do you want to give a tech-talk? Or maybe have been working on a really cool library? Use the ${config.channels.selfPromotion} to share your work with the community!`},
        {name: '**🗳️ Improve The Community**', value: `The community is you! Do you have any suggestion or idea to level up this community? Just throw it into the ${config.channels.suggestionBox}`},
        {name: '**📃 Read The Rules**', value: `Please, in order to keep a friendly and healthy space, take a moment to read the server ${config.channels.rules}`},
    )

    const footerMessage = '**Also join us at:**\n' +
    `${config.emojis.meetup} Meetup: <${config.links.meetup}>`

    const isAdmin = message.member.hasPermission("ADMINISTRATOR")

    if(isAdmin) message.channel.send(headerMessage)
    message.channel.send(welcomeMessage)
    if(isAdmin) message.channel.send(footerMessage)
}

module.exports.handle = handle