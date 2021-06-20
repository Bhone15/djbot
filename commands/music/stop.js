const { MessageEmbed } = require("discord.js");

module.exports = {
     name: 'stop',
	category: '🎵 Music',
	description: 'Clear the queue and leave the vc',
	aliases: ['st'],
	usage: 'stop',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => { 
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription('Music stopped & the queue was cleared!')
            if(isDone)
            message.channel.send(stop);
    }
}