const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'achievement',
	category: '📷 Image',
	aliases: ["ach"],
     description: 'Gives you an achievment',
	usage: 'achievement [text]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
          const text = args.join("+");
          if(!text) return message.channel.send('Please give me some text to display!')
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send(e);
     }
}