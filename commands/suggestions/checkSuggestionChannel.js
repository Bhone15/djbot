const Schema = require('../../models/suggestionChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'check-schannel',
	category: '<:suggest:855005922274443264> Suggestions',
	description: 'Check the suggestion channel',
	aliases: ['check-s', 'checks'],
	usage: 'check-schannel',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
     /**
      * 
      * @param {Client} client 
      * @param {Message} message 
      * @param {String[]} args 
      */
	run: async (client, message, args) => {
          Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
               if(!data) return message.channel.send('This guild has no data stored for suggestions channel!');

               const channel = client.channels.cache.get(data.Channel);
               message.reply(`Suggestions Channel => **${channel}**`);
          })
     }
}