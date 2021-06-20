const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'deny-suggestion',
	category: '<:suggest:855005922274443264> Suggestions',
	description: 'Deny the member suggestions',
	aliases: ['denys'],
	usage: 'deny-suggestion [msg ID]',
	userperms: ['MANAGE_MESSAGES'],
	botperms: [],
	run: async (client, message, args) => {
          const messageID = args[0];
          const denyQuery = args.slice(1).join(" ");

          if(!messageID) return message.reply('Please specify a messageID');
          if(!denyQuery) return message.reply("Please specify a reason!");
          try {
               const suggestionChannel = message.guild.channels.cache.get('841885812785152020');
               const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);

               const data = suggestedEmbed.embeds[0];
               const accpectEmbed = new MessageEmbed()
               .setAuthor(data.author.name, data.author.iconURL)
               .setDescription(data.description)
               .setColor("RED")
               .addField('Status (DENIED)', denyQuery);

               suggestedEmbed.edit(accpectEmbed);
	
			message.channel.send("Denied suggestion!")

               const user = await client.users.cache.find((u) => u.tag === data.author.name)
               user.send(`Your suggestion has been denied by **${message.author.tag}**.`);
          } catch (err) {
               console.log(err)
               message.channel.send('That suggestion does not exit')
          }
     }
}