const { Random } = require("something-random-on-discord")

module.exports = {
	name: 'joke',
	category: '🥳 Fun',
	description: 'Get some fun joke',
	aliases: [],
	usage: 'joke',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let data = await Random.getJoke()
    message.channel.send(data)
    
  }
}