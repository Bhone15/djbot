const discord = require("discord.js");
const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
	name: 'ascii',
	category: '🥳 Fun',
	description: 'Return provide text in ascii format',
	aliases: ['asci'],
	usage: 'ascii [text]',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`Please provide text for the ascii conversion!`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`Please put text that has 20 characters or less because the conversion won't be good!`)
}
 // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};