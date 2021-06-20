const { Random } = require("something-random-on-discord")

module.exports = {
	name: 'advice',
	category: '🥳 Fun',
	description: 'get some advice',
	aliases: ['adv'],
	usage: 'advice',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let data = await Random.getAdvice()
    message.channel.send(data)
    
  }
}