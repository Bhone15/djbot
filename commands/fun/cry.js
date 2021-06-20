const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
	name: 'cry',
	category: '🥳 Fun',
	description: 'Cry with gif',
	aliases: ['sad'],
	usage: 'cry',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let data = await Random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Please talk with ${message.author.username} they are crying`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};