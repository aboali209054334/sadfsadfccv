const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("596447543211327519")
setInterval(function() {
channel.send(`aaa2223fscx`);
}, 50)
})

client.login(process.env.BOT_TOKEN);