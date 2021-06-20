module.exports = {
	name: 'slowmode',
	category: '<:IconModeration:855046753346781264> Moderation',
	description: 'Lets you set slowmode on the channel.',
	aliases: ['sm'],
	usage: 'slowmode [time]',
	userperms: ['MANAGE_CHANNEL'],
	botperms: [],
     run: async (client, message, args) => {
          const amount = parseInt(args[0]);
          if (isNaN(amount))
        return message.channel.send("<:error:853906226097291314> It doesn't seem to be valid number");
        if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " seconds");
        return;
      } else {
        message.channel.send("slowmode is now " + amount + " second");
        return;
      }
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " minutes");
        return;
      } else {
        message.channel.send("slowmode is now " + amount + " minute");

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " hours");
        return;
      } else {
        message.channel.send("slowmode is now " + amount + " hour");
        return;
      }
    } else {
      message.channel.send(
        "You can only set seconds(s), minutes(m) and hours(h)"
      );
    }
     }
}