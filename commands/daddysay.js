module.exports.run = (client, message, args) => {
  let say = args.join(' ');
  if (!say) return message.channel.send("what u want me to say? (Use: -daddysay (txt)");
  message.delete();
  message.channel.send(say)
}

module.exports.help = {
  name: "daddysay"
}