const { MessageEmbed } = require('discord.js')
const Schema = require('../../models/suggestionChannel');
module.exports = {
	name: 'suggest',
	category: '<:suggest:855005922274443264> Suggestions',
	description: 'Suggest for our guild',
	aliases: ['sg'],
	usage: 'suggest [suggestion]',
	userperms: [],
	botperms: [],
     /**
      * 
      * @param {Client} client 
      * @param {Message} message 
      * @param {String[]} args 
      */
	run: async (client, message, args) => {
          Schema.findOne({ Guild: message.guild.id }, async (e, data) => {
               if(!data) return message.channel.send('This sever haven\'t set up for suggestions channel or I can\'t find any suggestions channel in my database!');

               const suggestionQuery = args.join(" ");
               if(!suggestionQuery) return message.reply('Please specify a suggestion!');
               const embed = new MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setDescription(`**Suggestion**: ${suggestionQuery}`)
               .setColor('ORANGE')
               .setTimestamp()
               .addField("Status", "PENDING")

               message.channel.send('Submitted suggestion!');
               message.guild.channels.cache.get(data.Channel).send(embed);
          })
     }
}