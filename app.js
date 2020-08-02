//*Requires
//Discord
const Discord = require("discord.js");
//DBL
const DBL = require("dblapi.js");
//dotenv (.env support)
require("dotenv").config();
//package.json
const packageJson = require("./package.json");
//mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.mongouri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((c) => console.log("connected to mongodb"));
const db = mongoose.connection;
//schema for mongo
const Server = require("./models/server");
//fs
const fs = require("fs");
//client *no you*
const client = new Discord.Client({ disableEveryone: true });
//dbl p2
const dbl = new DBL(process.env.BFTOPGGTOKEN, client);
//Presence List
const presenceList = [
  "with your feelings",
  "for -help",
  "for -invite",
  `with version ${packageJson.version}`,
  `${client.guilds.cache.size} servers`,
];
const statusList = ["PLAYING", "WATCHING", "WATCHING", "PLAYING", "WATCHING"];

client.on("ready", async () => {
  client.user.setActivity("girl im rebooting hold up", { type: "PLAYING" });
  setInterval(() => {
    dbl.postStats(client.guilds.size);
    console.log("ran");
  }, 18000);
  setInterval(async () => {
    i = Math.floor(Math.random() * presenceList.length);
    client.user.setActivity(presenceList[i], { type: statusList[i] });
  }, 10000);
  client.user.setStatus("idle");

  console.log("Boyfriend Bot is ready bitch");
});

dbl.on("posted", () => {
  console.log("Server count posted!");
});

client.on("message", async (msg) => {
  if (msg.author.bot || msg.channel.type === "dm") return;
  if (
    msg.content === "boyfriend" ||
    msg.content === "Boyfriend" ||
    msg.content === "Boyfriend Bot" ||
    msg.content === "boyfriend bot" ||
    msg.content === "boyfriendbot"
  )
    return msg.channel.send("did somebody say my name? :wink:");
  let mserver = await Server.findOne({ serverId: msg.guild.id });
  let prefix;
  if (mserver !== null) {
    prefix = await mserver.prefix;
  } else {
    prefix = "-";
  }
  let bpargs = msg.content.trim().split(" ");
  if (msg.mentions.has(client.user) && !msg.mentions.everyone) {
    if (bpargs.length > 1) return;
    return msg.reply("baby my prefix this server is `" + prefix + "`");
  }
  if (!msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).trim().split(" ");
  var cmd = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args);
  } catch (e) {
    console.log(e.stack);
  } finally {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    console.log(`---`);
    console.log(
      `a simp named ${msg.author.tag} has used the ${prefix}${cmd} command`
    );
    console.log(`user id: ${msg.author.id} `);
    console.log(`server name: ${msg.guild.name} `);
    console.log(`server id: ${msg.guild.id} `);
    console.log(`time: ${dateTime}`);
    console.log(`---`);
  }
});

client.on("guildCreate", async (guild) => {
  try {
    let newServer = new Server({
      serverName: guild.name,
      serverId: guild.id,
      owner: guild.owner.id,
    });
    await newServer.save();
    guild.owner.send(
      "Hey thanks for adding me to your server :heart: \nIf you ever need support join https://discord.gg/hBfmxVt thats also where you can see downtime/update information\nIf you enjoy me and want to help me grow vote for me! https://top.gg/bot/487395837610295317/vote\nIf you want to change my prefix run **-sprefix (prefix w/out the brackets)** \nOk bye :wave:"
    );
  } catch (error) {
    console.log(error);
  }
});

client.on("guildDelete", async (guild) => {
  try {
    await Server.deleteOne({ serverId: guild.id });
    guild.owner.send(
      "w-why are we breaking up though... :sob:\n(Sorry our bot didn't reach your expectations. If you have feedback for us join our Discord https://discord.gg/hBfmxVt and let us know why you removed boyfriend bot.)"
    );
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.EATOKEN);
