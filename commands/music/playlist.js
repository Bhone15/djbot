const { MessageEmbed } = require("discord.js");

module.exports = {
     name: 'playlist',
	category: '🎵 Music',
	description: 'play a playlist in a vc',
	aliases: ['pl'],
	usage: 'playlist [playlist]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => { 
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
        if (!voice_channel) return message.channel.send(embed);
        // If maxSongs is -1, will be infinite.
        await client.player.playlist(message, {
            search: args.join(' '),
            maxSongs: -1
        });
    }
}