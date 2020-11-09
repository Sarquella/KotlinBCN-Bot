const Discord = require('discord.js')
const config = require('../config.js')

const command = "rules"

const handle = (content, message) => {
    if(content !== command) return

    const rulesEmbed = new Discord.MessageEmbed()
	.setColor(config.primaryColor)
	.setTitle('KotlinBCN Rules')
	.setDescription('We have a small but strict set of rules on our server to guarantee a good atmosphere among members. Please read over them and take them on board. If you don\'t understand a rule or need to report an incident, please send a DM to an Admin.')
    .addField('\u200B', '\u200B')
    .addFields(
        { name: '1. Be respectful', value: 'You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.' },
        { name: '2. No discrimination', value: 'Racism, sexism, homophobia or otherwise harmful content is totally prohibited.' },
        { name: '3. No Inappropriate Language', value: 'The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.' },
        { name: '4. No Inappropriate Content', value: 'No NSFW / sexually explicit content or language.' },
        { name: '5. Personal Information', value: 'For everyone\'s safety, do not share (or encourage others to share) any personal or identifiable information without permission.' },
        { name: '6. No spamming', value: 'Don\'t send a lot of small messages right after each other. Do not disrupt chat by spamming.' },
        { name: '7. Stay on topic', value: 'Any misuse of a channel is not allowed. Please use the correct channels at all times.' },
        { name: '8. Staff have final say', value: 'Please don’t argue with them. If you feel a decision has been made in error, contact another staff member in private.' },
        { name: '9. Follow the Discord Community Guidelines', value: 'You can find them here: https://discordapp.com/guidelines' },
        { name: '10. 🥳 Enjoy!', value: 'But most importantly... Enjoy and have fun with this amazing Kotlin community!' },
    )
    .addFields(
		{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '\u200B', value: 'The Admins and Moderators will Mute/Kick/Ban per discretion if they consider to do so. If you feel mistreated DM an Admin and we will resolve the issue.\n\nYour presence in this server implies accepting these rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them.' },
    )

    message.channel.send(rulesEmbed)
}

module.exports.handle = handle