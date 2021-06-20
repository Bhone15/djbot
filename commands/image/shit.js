const Discord = require('discord.js')
const Color = "RANDOM";

module.exports = {
	name: 'affect',
	category: '📷 Image',
	aliases: [],
     description: 'get affected, REALLY AFFECTED',
	usage: 'affect <user>',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
          const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
          console.log(Member.user.displayAvatarURL());

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI
    (`https://kaskus.cf/api/v1/imagegen/affect?avatar=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
     }
}