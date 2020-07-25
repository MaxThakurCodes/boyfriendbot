module.exports.run = async (client, message, args) => {
  let say = args.join(' ');
  if (!say) return message.channel.send("what u want me to say? (Use: -daddysay (txt)");
  message.delete();
  if (message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(say)
  } else {
    if (message.content.includes("@")) {
      let nmsg = await message.channel.replace("@", " ")
      return message.channel.send(nmsg)
    } else {
      message.channel.send(say)
    }
  }
}
 
module.exports.help = {
  name: "daddysay"
}
