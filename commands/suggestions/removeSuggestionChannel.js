const Schema = require('../../models/suggestionChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'remove-schannel',
	category: '<:suggest:855005922274443264> Suggestions',
	description: 'Remove the suggestion channel from my database',
	aliases: ['remove-s', 'rms'],
	usage: 'remove-schannel',
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
               if(err) throw err;
               if(data) {
                    await Schema.findOneAndDelete({
                         Guild: message.guild.id
                    })
                    data.save();
               } else {
                    message.channel.send(`There is no stored data in my database`)
               }
               message.channel.send(`Successfully removed suggestions channel from my database!`);
          })
     }
}