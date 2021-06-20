const { Random } = require("something-random-on-discord")

module.exports = {
	name: 'neko',
	category: '📷 Image',
	description: 'Get some neko image',
	aliases: [],
	usage: 'neko',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    let data = await Random.getNeko()
    message.channel.send(data)
    
  }
}