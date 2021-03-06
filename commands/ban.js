const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("bruh only people who have ban perms ban can use this command")
  const user = message.mentions.users.first(); // returns the user object if an user mention exists
  let banReason;
  if (!args[1]) {
    banReason = "No reason provided"
  } else {
    banReason = args.slice(1).join(' ');
  }

  // Check if an user mention exists in this message
  if (!user) {
    try {
      // Check if a valid userID has been entered instead of a Discord user mention
      if (!message.guild.members.cache.get(args.slice(0, 1).join(' '))) throw new Error('baby I couldn\'t get a user with this userID!');
      // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
      user = message.guild.members.cache.get(args.slice(0, 1).join(' '));
      user = user.user;
    } catch (error) {
      return message.reply('baby I couldn\'t get a user with this userID!');
    }
  }
  if (user === message.author) return message.channel.send('baby thats suicide- you can\'t ban yourself :frowning: '); // Check if the user mention or the entered userID is the message author himsmelf
  if (!message.guild.member(user).bannable) return message.reply('um baby... I can\'t ban this user because I dont have perms to- :pensive: '); // Check if the user is bannable with the bot's permissions
  console.log(user)
  let bEmbed = new Discord.MessageEmbed()
    .setTitle("[Logs] Ban")
    .setColor([
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)])
    .addField("Banned User: ", user.username + "#" + user.discriminator)
    .addField("Banned By: ", message.author.tag)
    .addField("Banned In: ", message.channel.name)
    .addField("Reason: ", banReason)
    .setFooter(message.author.tag, message.author.avatarURL())
    .setTimestamp()
  let logsChannel = message.guild.channels.cache.find(channel => channel.name === "logs")
  if (!logsChannel) return message.reply("baby please make a channel for logging, if you have one make sure I can chat on it. (Make a channel named `logs`.)")
  await user.send(":rage: You were banned from `" + message.guild.name + "` with the reason `" + banReason + "`")
  message.guild.member(user).ban({
    reason: banReason
  });
  logsChannel.send(bEmbed);
}

module.exports.help = {
  name: "ban"
}