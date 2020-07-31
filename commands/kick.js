const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("sorry baby, but only users with the permission \"Kick Members\" can kick people.")
  const user = message.mentions.users.first(); // returns the user object if an user mention exists
  let kickReason;
  if (!args[1]) {
    kickReason = "No reason provided ho <3"
  } else {
    kickReason = args.slice(1).join(' ');
  }

  // Check if an user mention exists in this message
  if (!user) {
    try {
      // Check if a valid userID has been entered instead of a Discord user mention
      if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\'t get a Discord user with this userID!');
      // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
      user = message.guild.members.get(args.slice(0, 1).join(' '));
      user = user.user;
    } catch (error) {
      return message.reply('sorry bb, I couldn\'t get a Discord user with this userID!');
    }
  }
  if (user === message.author) return message.channel.send('baby thats suicide- you can\'t kick yourself :frowning:'); // Check if the user mention or the entered userID is the message author himsmelf
  if (!message.guild.member(user).kickable) return message.reply('Hey bb, I don\'t seem to be able to kick that user cause they have a higher role than me :eyes: '); // Check if the user is kicknable with the bot's permissions
  let kEmbed = new Discord.MessageEmbed()
    .setTitle("[Logs] Kick")
    .setColor([
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)])
    .addField("Kicked User: ", user.username + "#" + user.discriminator)
    .addField("Kicked By: ", message.author.tag)
    .addField("Kicked In: ", message.channel.name)
    .addField("Reason: ", kickReason)
    .setFooter(message.author.tag, message.author.avatarURL())
    .setTimestamp()
  let logsChannel = message.guild.channels.cache.find(channel => channel.name === "logs")
  if (!logsChannel) return message.reply("baby please make a channel for logging, if you have one make sure I can chat on it. (Make a channel named `logs`.)")
  await user.send("Bruh you were kicked from `" + message.guild.name + "` with the reason `" + kickReason + "`")
  message.guild.member(user).kick(kickReason);
  logsChannel.send(kEmbed);
}

module.exports.help = {

  name: "kick"
}