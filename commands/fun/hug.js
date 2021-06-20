const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
	name: 'hug',
	category: '🥳 Fun',
	description: 'Hug someone',
	aliases: [],
	usage: 'hug [mention]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    if(!target) return message.channel.send('Please mention a user to hug!');
    
    let data = await Random.getAnimeImgURL("hug");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} hugs ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};