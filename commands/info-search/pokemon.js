const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
module.exports = {
     name: 'pokemon',
	category: '<:information:855006851184066582> Info',
	description: 'Show the info of pokemon',
	aliases: ['poke','pok'],
	usage: 'pokemon [name]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
    if(!args.length) {
      return message.channel.send("Please give the name of pokemon")
    }
          const options = {
  url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
  json: true
  
}

message.channel.send(`<a:loading:854658879643320372>Fetching Informtion for the Pokemon`).then(msg => {
  get(options).then(body => {
    
    let embed = new MessageEmbed()
    .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
    .setDescription(`Type of this pokemon is **${body.info.type}**. ${body.info.description}`)
    .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
    .setColor("RANDOM")
    .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
    
    message.channel.send(embed)
    msg.delete()
  })
})

     }
}