const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
	name: 'punch',
	category: '🥳 Fun',
	description: 'Punch someone',
	aliases: [],
	usage: 'punch [mention]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    if(!target) return message.channel.send('Please mention a user to punch!');
    
    let data = await Random.getAnimeImgURL("punch");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} punches ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
