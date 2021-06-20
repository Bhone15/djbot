const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ disableMentions: 'everyone', partials: ['MESSAGE', 'CHANNEL', 'REACTION'], ws: { intents: Intents.ALL } });
const mongoose = require("mongoose");

client.commands = new Collection();
client.aliases = new Collection();


['command', 'event'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});
const config = require('./config.json');
client.config = config;


client.login(config.token);
