module.exports.run = (client, message, args) => {
  if (message.channel.nsfw == false ||
    message.channel.nsfw == undefined) return message.channel.send("lmao lets get a room first- (must be used in a channel marked NSFW)")
  message.channel.send(":eggplant:");
}

module.exports.help = {
  name: "penis"
}