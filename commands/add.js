const Discord = require("discord.js"),
  mongoose = require("mongoose"),
  Server = require("../models/server");
exports.run = async function (client, message, args) {
  let msg = await message.channel.send("Checking database...")
  let fserver = await Server.findOne({ serverName: message.guild.name })
  if (fserver === null) {
    msg.edit("\nNo ServerData found, adding user to the database!")
    let newServer = new Server({
      serverName: message.guild.name,
      serverId: message.guild.id,
      owner: message.guild.owner.id
    })
    await newServer.save()
    msg.edit("\nSuccessfully added `" + message.guild.name + "` to the database")
  } else {
    msg.edit("\nThe server `" + message.guild.name + "` is already in the database!")
  }
}