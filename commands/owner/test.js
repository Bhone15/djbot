/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const {owner} = require('../../config.json');

module.exports = {
	name: 'test',
	category: '<:owner:853883065562955796> Owner',
	description: 'Checks if the bot is working.',
	aliases: [],
	usage: 'test',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		if(message.author.id !== owner){

               const embed = new Discord.MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setTitle(`Error`)
               .setColor(`RANDOM`)
               .setDescription(`❌ You are not my Developer`)
               .setTimestamp();
               return message.channel.send(embed);
          }
		const embed = new MessageEmbed()
			.setTitle('I am working!')
			.setColor('BLUE')
			.setImage('https://media.giphy.com/media/gw3IWyGkC0rsazTi/200.gif');
		message.channel.send(embed);
	},
};
