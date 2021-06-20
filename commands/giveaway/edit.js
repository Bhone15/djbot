module.exports = {
	name: 'edit',
	category: '🎉 Giveaway',
	description: 'edit a giveaway',
	aliases: ['ged'],
	usage: 'edit [message id] [prize/winners] [new value]',
	userperms: ['MANAGE_GUILD'],
	botperms: [],
	run: async (client, message, args) => {
        // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    // If no field to edit is specifed
    if(!args[1]){
        return message.channel.send(':x: You need to either edit the prize or the winners!');
    }

    if(args[1] === 'prize'){
        let newPrize = args.slice(2).join(' ')

        if(!newPrize) return message.channel.send(':x: You have to provide a new prize!');

        client.giveawaysManager.edit(args[0], {
            newPrize: newPrize,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ The giveaway prize will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch((err) => {
            message.channel.send(`:x: No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else
    if(args[1] === 'winners'){
        let newWinners = args[2]
        if(isNaN(newWinners) || (parseInt(newWinners) <= 0)){
            return message.channel.send(':x: You have to specify a valid number of winners!');
        }

        client.giveawaysManager.edit(args[0], {
            newWinnerCount: newWinners,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ The giveaway winner count will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch((err) => {
            message.channel.send(`:x: No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else{
        return message.channel.send(':x: You need to either edit the prize or the winners!');
    }
    }
}
