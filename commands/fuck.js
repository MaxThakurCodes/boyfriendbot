module.exports.run = (client, message, args) => {
  if (message.channel.nsfw == false ||
    message.channel.nsfw == undefined) return message.channel.send("This command can only be used in channels that have the flag NSFW checked.")
  message.channel.send("um- why do yuh wanna fck me baby? :wink: :drooling_face: ");
}

module.exports.help = {
  name: "fuck"
}