const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Only users who have the permission `MANAGE_MESSAGES` can use this command.")
  message.delete();
  if (!args) return message.channel.send("Please include a number of messages you want to delete.")
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
  if (!Pchannel) return message.channel.send("That isn't a vaild channel, please try again with a vaild channel name.")
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
  if (!logsChannel) return message.reply("Please make a logs channel, if you already have one make sure I have permissions to it!")
  logsChannel.send(embed);
  Pchannel.bulkDelete(amount).catch(err => {
    if (err) {
      message.channel.send("An error popped up, the error is:`" + err.message + "`, please contact `Max Thakur#0831`")
    }
  })

}

module.exports.help = {
  name: "purge"
}