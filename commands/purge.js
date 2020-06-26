const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("um baby only users who have the permission `MANAGE_MESSAGES` can use this command. sorry.")
  message.delete();
  if (!args) return message.channel.send("lmao how am i supposed to purge messages if you don't give me a number?")
  let amount = args[0]
  let pchannel
  if (args[1]) {
    if (args[1].includes("#")) {
      let cname = args[1].replace(/\D/g, '');
      let cha = message.guild.channels.cache.find(channel => channel.id === cname)
      pchannel = cha.name
    } else {
      pchannel = args[1]
    }
  } else {
    pchannel = message.channel.name
  }
  let Pchannel = message.guild.channels.cache.find(channel => channel.name === pchannel)
  if (!Pchannel) return message.channel.send("ugh thats not a valid channel please enter a valid channel.")
  let embed = new Discord.MessageEmbed()
    .setTitle("[Logs] Purge")
    .setColor([
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)])
    .addField("Channel Purged: ", Pchannel, true)
    .addField("Amount of Messages Purged: ", amount, true)
    .addField("Purged by: ", message.author.tag)
    .setFooter(message.author.tag, message.author.avatarURL())
    .setTimestamp()
  let logsChannel = message.guild.channels.cache.find(channel => channel.name === "logs")
  if (!logsChannel) return message.reply("baby please make a channel for logging, if you have one make sure I can chat on it. (Make a channel named `logs`.)")
  logsChannel.send(embed);
  Pchannel.bulkDelete(amount).catch(err => {
    if (err) {
      message.channel.send("An error popped up, the error is:`" + err.message + "`, please join my support server https://discord.gg/hBfmxVt and contact `Max Thakur#0831`")
    }
  })

}

module.exports.help = {
  name: "purge"
}