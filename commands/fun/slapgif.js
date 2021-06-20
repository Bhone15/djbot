
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
	name: 'slap',
	category: '🥳 Fun',
	description: 'Slap someone',
	aliases: [],
	usage: 'slap [mention |ID] [text]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Please Mention Or Give ID Of A Member!");
   
    const Other = args.slice(1).join(" ") || "Don't Be Gay";
    if (Other.length > 50) return message.channel.send("Characters Limit Reached - 50!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/batmanslap?text1=bruh&text2=${Other}&batman=${message.author.avatarURL({ format: "png" })}&robin=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
