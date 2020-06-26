//Requires
//Discord
const Discord = require("discord.js");
//config
const config = require("./config.json")
//fs
const fs = require("fs")
//dotenv (.env support)
require("dotenv").config()
//client *no you*
const client = new Discord.Client();
//prefix
let prefix = config.prefix;
//Unknow
const queue = new Map();
//Presence List
const presenceList = [
  "with your feelings",
  "for -help",
  "for -invite"
]
const statusList = [
  "PLAYING",
  "WATCHING",
  "WATCHING"
]

client.on("ready", async () => {
  client.user.setActivity("start up", { type: "PLAYING" })
  setInterval(async () => {
    i = Math.floor(Math.random() * (presenceList.length))
    client.user.setActivity(presenceList[i], { type: statusList[i] });
  }, 10000);

  console.log('Boyfriend Bot is ready bitch')
})

client.on("message", async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  //if (msg.content === "hi" || msg.content === "Hi" || msg.content === "Hello!" || msg.content === "Hello" || msg.content === "hello") return msg.channel.send("Hey, qt!")
  if (!msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var messageArray = msg.content.split(" ");
  var searchString = messageArray.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(msg.guild.id);
  var sender = msg.author;
  var cmd = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args);

  } catch (e) {
    console.log(e.stack);
  } finally {
    let today = new Date()
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    console.log(`---`)
    console.log(`${msg.author.tag} has used the -${cmd} command`);
    console.log(`server name: ${msg.guild.name} `);
    console.log(`server id: ${msg.guild.id} `);
    console.log(`time: ${dateTime}`)
    console.log(`---`)
  }
});

client.login(process.env.TOKEN)
