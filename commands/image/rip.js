const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
	name: 'rip',
	category: '📷 Image',
	aliases: ['die'],
     description: 'Shows RIP create with user avatar',
	usage: 'rip <user>',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
          const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Rest In Peace")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/rip?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
     }
}