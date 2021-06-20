/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const { parseDur } = require('../../functions');

module.exports = {
	name: 'uptime',
	description: 'Check how long has the bot been online.',
	category: '<:information:855006851184066582> Info',
	aliases: [ 'ontime' ],
	usage: 'uptime',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		const duration = parseDur(client.uptime);
		message.channel.send('⌛ Loading...').then((msg) => {
			const pEmbed = new MessageEmbed()
				.setTitle(':inbox_tray: Online for')
				.setColor('BLUE')
				.setDescription(
					`**${duration}**`,
				);
			msg.edit(pEmbed);
		});
	},
};