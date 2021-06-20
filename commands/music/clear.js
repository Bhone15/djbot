const { MessageEmbed } = require("discord.js");

module.exports = {
     name: 'clear',
	category: '🎵 Music',
	description: 'Clear the queue',
	aliases: ['cl'],
	usage: 'clear',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('#FF5757')
        .setDescription(`You need to be in a vc to execute this command!`)
        const embed1 = new MessageEmbed()
        .setColor('#85b0d2')
        .setDescription('Queue was cleared!')
        if (!voice_channel) return message.channel.send(embed);
        let isDone = client.player.clearQueue(message);
        if(isDone)
            message.channel.send(embed1);
    }
}