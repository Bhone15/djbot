const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'accpect-suggestion',
	category: '<:suggest:855005922274443264> Suggestions',
	description: 'Accpect the member suggestions',
	aliases: ['accs'],
	usage: 'accpect-suggestion [msg ID]',
	userperms: ['MANAGE_MESSAGES'],
	botperms: [],
	run: async (client, message, args) => {
          const messageID = args[0];
          const acpectQuery = args.slice(1).join(" ");

          if(!messageID) return message.reply('Please specify a messageID');
          if(!acpectQuery) return message.reply("Please specify a reason!");
          try {
               const suggestionChannel = message.guild.channels.cache.get('841885812785152020');
               const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);

               const data = suggestedEmbed.embeds[0];
               const accpectEmbed = new MessageEmbed()
               .setAuthor(data.author.name, data.author.iconURL)
               .setDescription(data.description)
               .setColor("GREEN")
               .addField('Status (ACCPECTED)', acpectQuery);

               suggestedEmbed.edit(accpectEmbed);

               message.channel.send("Accpected suggestion!")

               const user = await client.users.cache.find((u) => u.tag === data.author.name)
               user.send(`Your suggestion has been accpected by **${message.author.tag}**.`);
          } catch (err) {
               console.log(err)
               message.channel.send('That suggestion does not exit')
          }
     }
}