/* eslint-disable no-unused-vars */
const { token } = require('../../config.json');
const { owner } = require('../../config.json');

module.exports = {
	name: 'restart',
	category: '<:owner:853883065562955796> Owner',
	description: 'Restarts the bot.',
	aliases: ['reload'],
	usage: 'restart',
	userperms: [],
	botperms: ['USE_EXTERNAL_EMOJIS'],
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
		try {
			message.channel.send('⚙ Restarting...').then(msg => msg.delete({ timeout: 300 }))
				.then(() => client.destroy())
				.then(() => client.login(token))
				.then(() => message.channel.send('<a:832989426816253993:836926229361590293> Restart Successful'));
		}
		catch (e) {
			return message.channel.send(
				'<:error:806036638970675210> An error occurred, please try again!',
			);
		}
	},
};
