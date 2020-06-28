
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let embed = new Discord.MessageEmbed()
    .setAuthor('ACTIVATED', client.user.displayAvatarURL)
    .addField('ACTIVATION STATUS', 'This server is active with Boyfriens EA')
    .setColor('#FF1493')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);

}