//*Requires
//Discord
const Discord = require("discord.js");
//dotenv (.env support)
require("dotenv").config()
//package.json
const packageJson = require("./package.json")
//mongoose
const mongoose = require("mongoose")
mongoose.connect(process.env.mongouri, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then(c => console.log("connected to mongodb"))
const db = mongoose.connection
//schema for mongo
const Server = require("./models/server")
//fs
const fs = require("fs")
//client *no you*
const client = new Discord.Client({disableEveryone: true});
//Unknow
const queue = new Map();
//Presence List
const presenceList = [
  "with your feelings",
  "for -help",
  "for -invite",
  `with version ${packageJson.version}`,
  `1020 lines of code`
]
const statusList = [
  "PLAYING",
  "WATCHING",
  "WATCHING",
  "PLAYING",
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
  if (msg.author.bot || msg.channel.type === "dm") return;
  //if (msg.content === "hi" || msg.content === "Hi" || msg.content === "Hello!" || msg.content === "Hello" || msg.content === "hello") return msg.channel.send("Hey, qt!")
  let mserver = await Server.findOne({ serverId: msg.guild.id })
  let prefix;
  if (mserver !== null) {
    prefix = await mserver.prefix
  } else {
    prefix = "-"
  }
  let bpargs = msg.content.trim().split(' ')
  if (msg.mentions.has(client.user) && !msg.mentions.everyone) {
    if (bpargs.length > 1) return
    return msg.reply("my prefix for this server is `" + prefix + "`")
  }
  if (!msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).trim().split(' ');
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
    console.log(`${msg.author.tag} has used the ${prefix}${cmd} command`);
    console.log(`server name: ${msg.guild.name} `);
    console.log(`server id: ${msg.guild.id} `);
    console.log(`time: ${dateTime}`)
    console.log(`---`)
  }
});

client.on("guildCreate", async guild => {
  try {
    let newServer = new Server({
      serverName: guild.name,
      serverId: guild.id,
      owner: guild.owner.id
    })
    await newServer.save()
    //guild.owner.send("Hey there, thanks for adding Boyfriend bot! Please run `-setup` to get your server setup!")
  } catch (error) {
    console.log(error)
  }
})

client.on("guildDelete", async guild => {
  try {
    await Server.deleteOne({ serverId: guild.id })
  } catch (error) {
    console.log(error)
  }
})

client.login(process.env.TOKEN)
