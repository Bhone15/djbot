const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
	name: 'panda',
	category: '📷 Image',
	aliases: ['pandaa'],
     description: 'Return A Random Panda!',
	usage: 'Panda',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
          const Data = await Random.GetAnimalImage({ Animal: "panda", Color: Color });
          return message.channel.send(Data);    
     }
}