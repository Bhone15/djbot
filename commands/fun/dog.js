const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
	name: 'dog',
	category: '🥳 Fun',
	description: 'send a random dog image',
	aliases: [],
	usage: 'dog',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("<:dogwave:854974645123285052>")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`🤣WHAT A DOG🤣`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};