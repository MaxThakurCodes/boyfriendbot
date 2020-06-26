const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.MessageEmbed()
    .setDescription(`Damn whos that qt? <@${user.id}>`)
    .setAuthor(`${user.username}#${user.discriminator}`, await client.user.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
    .setImage(await user.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
    .setColor('#7289DA')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, await message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);

}

module.exports.help = {
  name: "avatar"
}
