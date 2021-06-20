const Discord = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports = {
	name: 'addemoji',
	category: '<:IconModeration:855046753346781264> Moderation',
	description: 'Steal an emoji from a different server',
	aliases: ['steal', 'addemote'],
	usage: 'steal <emoji> <custom name>',
	userperms: ["MANAGE_EMOJIS"],
	botperms: ["MANAGE_EMOJIS"],
     run: async (client, message, args) => {
          const emoji = args[0];
    if (!emoji) return message.channel.send("Please Give Me A Emoji!");

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");

      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new Discord.MessageEmbed(message)
        .setTitle("Emoji Added")
        .setColor("BLUE")
        .setDescription(
          `Emoji Has Been Added! | Name : ${
            name || `${customemoji.name}`
          } | Preview : [Click Me](${Link})`
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send("Please Give Me A Valid Emoji!");
      message.channel.send(
        "You Can Use Normal Emoji Without Adding In Server!"
      );
    }
     }
}