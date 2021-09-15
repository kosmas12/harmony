const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.on("ready", () => {
    console.log(`Logged in to Discord as ${client.user.tag}`);
})

client.login(token);
