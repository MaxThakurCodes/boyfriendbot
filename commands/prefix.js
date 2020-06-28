const Discord = require("discord.js"),
  Server = require("../models/server");
exports.run = async function (client, message, args) {
  let fServer = await Server.findOne({ serverId: message.guild.id })
  let prefix = fServer.prefix
  return message.reply("Baby the prefix is `" + prefix + "`")
}