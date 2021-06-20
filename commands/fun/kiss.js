const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
	name: 'kiss',
	category: '🥳 Fun',
	description: 'kiss someone',
	aliases: [],
	usage: 'kiss [mention]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    if(!target) return message.channel.send('Please mention a user to kiss!');
    
    let data = await Random.getAnimeImgURL("kiss");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} kisses ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};