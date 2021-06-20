const moment = require('moment');
const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
	aliases: ['ui', 'useri'],
	category: '<:information:855006851184066582> Info',
	description: 'Returns info of user',
	usage: 'userinfo <@user>',
	userperms: [],
	botperms: [],
     run: async (client, message, args) => {
          let user = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;

    const member = message.guild.member(user);

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username}#${user.discriminator}`)
        .setFooter(`${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true }))

    embed.addField(`📅 Dates`, `
Joined: \`${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}\`
Created: \`${message.guild.createdAt.toDateString()}\`
`, true)

    embed.addField(`📁 Other`, `
Avatar: [Click-Here](${user.displayAvatarURL({ dynamic: true, size: 2048 })})
Last Message: [Click-Here](https://discordapp.com/channels/${message.guild.id}/${member.user.lastMessageChannelID}/${member.user.lastMessageID})
Speaking: ${member.speaking ? "\`True\` - Channel: " + message.guilds.channels.get(member.voiceChannelID) : '\`False\`'}
`, true)


    embed.addField(`⚙ General Info`, `
User ID: \`${message.author.id}\`
Nickname: \`${member.nickname !== null ? `${member.nickname}` : 'None'}\`
Bot: \`${user.bot ? "Yes" : "No"}\`
Status: \`${user.presence.status}\`
Game: \`${user.presence.game ? user.presence.game.name : 'None'}\`
`, false)

    embed.addField(`🔰 Roles [${message.member.roles.cache.size}]`, `
${member.roles.cache.map(roles => `${roles}`).join(', ').substr(0,1024)}
`, true)

    embed.setTimestamp();

    return await message.channel.send(embed);
     }
}

