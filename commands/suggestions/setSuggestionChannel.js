const Schema = require('../../models/suggestionChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
     name : 'set-schannel',
     category: '<:suggest:855005922274443264> Suggestions',
	description: 'Set the suggestions channel',
	aliases: ['ssc'],
	usage: 'set-schannel [channel name or ID]',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
     /**
      * @param {Client} client
      * @param {Message} message
      * @param {String[]} args
      */
     run: async(client, message, args) => {
          const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
          if(!channel) return message.reply('Please mention a channel or channel ID!');
          Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
               if(data) {
                    data.Channel = channel.id;
                    data.save();
               } else {
                    new Schema({
                         Guild: message.guild.id,
                         Channel: channel.id
                    }).save();
               }
               message.channel.send(`**${channel}** has been set as the suggestion channel.`)
          })
     }
}