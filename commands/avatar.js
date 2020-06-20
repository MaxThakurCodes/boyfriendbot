const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.MessageEmbed()
    .setDescription(`Damn whos that qt? <@${user.id}>`)
    .setAuthor(`${user.username}#${user.discriminator}`, client.user.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
    .setImage(user.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
    .setColor('#7289DA')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);

}

module.exports.help = {
  name: "avatar"
}