const { MessageEmbed } = require("discord.js");

module.exports = {
     name: 'pause',
	category: '🎵 Music',
	description: 'Pause the queue',
	aliases: ['pau'],
	usage: 'pause',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => { 
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            let song = client.player.pause(message);
            const pause = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`**${song.name}** was paused!`)
            if(song) 
            
            message.channel.send(pause);
    }
}