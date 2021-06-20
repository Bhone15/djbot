const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
	name: 'pat',
	category: '🥳 Fun',
	description: 'Pat someone',
	aliases: [],
	usage: 'pat [mention]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    if(!target) return message.channel.send('Please mention a user to pat!');
    
    let data = await Random.getAnimeImgURL("pat");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} pats ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};