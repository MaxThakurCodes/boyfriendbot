const Discord = require("discord.js"),
  Server = require("../models/server");
exports.run = async function (client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Only users with admin permissions can set the prefix.")
  if (!args[0]) return message.reply("Baby please tell me what you would like to change the prefix too- (-sprefix (prefix))")
  let msg = await message.channel.send("Changing prefix to: `" + args[0] + "`")
  await Server.findOneAndUpdate({ serverId: message.guild.id }, { prefix: args[0] }).then(p => {
    msg.edit("\nI changed the prefix to: `" + args[0] + "`")
  }).catch(err => {
    msg.edit("\nFailed to change prefix, try again later. :flushed: ")
    console.log(err)
  })
}