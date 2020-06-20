//Requires
//Discord
const Discord = require("discord.js");
//config
const config = require("./config.json")
//dotenv (.env support)
require("dotenv").config()
//client *no you*
const client = new Discord.Client();
//prefix
let prefix = config.prefix;
//idk
const queue = new Map();

client.on("ready", async () => {
  console.log('Boyfriend Bot is ready bitch')
  client.user.setActivity('with your feelings | -help for cmds', { type: 'PLAYING' }).catch(console.error);
})

client.on("message", async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  if (msg.content === "hi" || msg.content === "Hi" || msg.content === "Hello!" || msg.content === "Hello" || msg.content === "hello") return msg.channel.send("Hey, qt!")
  if (!msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var messageArray = msg.content.split(" ");
  var searchString = messageArray.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  console.log(searchString);
  var serverQueue = queue.get(msg.guild.id);
  var sender = msg.author;
  var cmd = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args);

  } catch (e) {
    console.log(e.stack);
  } finally {
    console.log(`---`)
    console.log(`${msg.author.tag} has used the -${cmd} command`);
    console.log(`server name: ${msg.guild.name} `);
    console.log(`server id: ${msg.guild.id} `);
    console.log(`---`)

  }
});

client.login(process.env.TOKEN)