const ms = require('ms');
module.exports = {
	name: 'delete',
	category: '🎉 Giveaway',
	description: 'delete a giveaway',
	aliases: ['gd'],
	usage: 'delete <message ID>',
	userperms: ['MANAGE_GUILD'],
	botperms: [],
	run: async (client, message, args) => {
        if(!args[0]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("✅ Giveaway deleted!");
        }).catch((err) => {
            message.channel.send(":x: No giveaway found for \`${messageID}\`, please check you have the right message and try again.");
        });
    }
}
