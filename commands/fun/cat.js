const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
	name: 'cat',
	category: '🥳 Fun',
	description: 'Send a random image of cat',
	aliases: ['meow'],
	usage: 'cat',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random cat")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`owo`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};