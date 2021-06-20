const { MessageEmbed } = require("discord.js");

module.exports = {
     name: 'leave',
	category: '🎵 Music',
	description: 'leave the voice channel',
	aliases: ['dc'],
	usage: 'dc',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => { 
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.leave()
            message.react('🪐')
              
          }
}