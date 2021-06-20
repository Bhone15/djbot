const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'removerole',
	category: '<:IconModeration:855046753346781264> Moderation',
	description: 'Add role to any user',
	aliases: ['-role', 'rmr'],
	usage: '-role <role> <member>',
	userperms: ["MANAGE_ROLES"],
	botperms: ["MANAGE_ROLES"],
     run: async (client, message, args) => {

           if (!args[0]) return message.channel.send("**Please Enter A Role!**")
           let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());

           if (!rMember) return message.channel.send("**Please Enter A User Name!**");
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Remove Role To This User!**')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("**Please Enter A Role!**")

        if (!role) return message.channel.send("**Could Not Find That Role!**")

        if (role.managed) return message.channel.send("**Cannot Add That Role To The User!**")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('**Role Is Currently Higher Than Me Therefore Cannot Remove It To The User!**')

        if (!rMember.roles.cache.has(role.id)){
          return message.channel.send("**User Has Not That Role!**")
        } else {
             await rMember.roles.remove(role.id);
        }
     
   
    let ticon = rMember.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const rembed = new MessageEmbed()
      .setAuthor(rMember.user.username, ticon)
      .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${role} role removed from ${rMember}`)
      .setFooter(`Role removed by ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(rembed)
     }
}