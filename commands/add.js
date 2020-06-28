const Discord = require("discord.js"),
  mongoose = require("mongoose"),
  Server = require("../models/server")
exports.run = async function (client, message, args) {
  if (message.member.hasPermission("ADMINISTRATOR") || message.author.id === "302457454846017546") {
    if (args[0] === "all") {
      let Cguilds = client.guilds.cache
      let Cguildid = Cguilds.map(g => g.id)
      let CguildName = Cguilds.map(g => g.name)
      let CguildOwner = Cguilds.map(g => g.ownerID)
      let fserver;
      for (i = args[1]; i < args[2]; i++) {
        fserver = await Server.findOne({ serverId: Cguildid[i] })
        if (fserver === null) {
          let newServer = new Server({
            serverName: CguildName[i],
            serverId: Cguildid[i],
            owner: CguildOwner[i]
          })
          await newServer.save()
          message.reply("Added `" + CguildName[i] + "` to the database")
        } else {
          await message.reply("`" + CguildName[i] + "` is already in the databse")
        }
      }
      return
    }
    let msg = await message.channel.send("Checking database...")
    let fserver = await Server.findOne({ serverId: message.guild.id })
    if (fserver === null) {
      msg.edit("\nNo ServerData found, adding user to the database!")
      let newServer = new Server({
        serverName: message.guild.name,
        serverId: message.guild.id,
        owner: message.guild.owner.id
      })
      await newServer.save()
      msg.edit("\nBaby I successfully added `" + message.guild.name + "` to the database!")
    } else {
      msg.edit("\nBaby the server `" + message.guild.name + "` is already in the database!")
    }
  } else {
    return message.reply("Baby users with admin permissions can add this server to the database!")
  }
}