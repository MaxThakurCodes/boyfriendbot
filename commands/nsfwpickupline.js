const Discord = require('discord.js')
const { RandomReddit } = require('random-reddit')
require("dotenv").config()
exports.run = async function (client, message, args) {
  if (!message.channel.nsfw) return message.channel.send("um can we go somewhere private for this?- (must be used in a channel marked NSFW)")
  const reddit = new RandomReddit({
    username: 'MaxThakurCodes',
    password: process.env.redditp,
    app_id: process.env.APIK,
    api_secret: process.env.APIS,
    logs: false // specify this if you want logs from this package
  });
  let post = await reddit.getPost("pickuplines")
  let text = post.data.selftext
  let title = post.data.title
  let embed = new Discord.MessageEmbed().setColor([
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)])
    .setTitle(title)
    .setDescription(text)
    .setFooter(message.author.tag, message.author.avatarURL({ type: "png", dynamic: true, size: 2048 }))
    .setTimestamp()
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'nsfwpickupline',
  description: 'nsfw pickupline command',
  usage: '-nsfwpickupline'
};