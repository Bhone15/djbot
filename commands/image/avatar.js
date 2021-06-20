const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
	name: 'avatar',
	category: '📷 Image',
	description: 'Show Member Avatar!',
	aliases: ['av'],
	usage: 'avatar [mention user or user ID]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    let user;

          if (message.mentions.users.first()) {
               user = message.mentions.users.first();
          }
          else if (args[0]) {
               user = message.guild.members.cache.get(args[0]).user;
          } else {
               user = message.author;
          }
          let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

          const embed = new Discord.MessageEmbed()
               .setTitle(`${user.tag} avatar`)
               .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
               .setColor('RANDOM')
               .addField(
        "Links",
        `[Png](${user.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [Jpg](${user.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [Webp](${user.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
               .setImage(avatar)
               .setTimestamp();

          return message.channel.send(embed);
     }
}