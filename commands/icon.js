const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  console.log(message.guild.iconURL({ format: "png", dynamic: true, size: 2048 }))
  let embed = new Discord.MessageEmbed()
    .setDescription(``)
    .setAuthor(`${message.guild.name}`, await message.guild.iconURL({ format: "png", dynamic: true, size: 2048 }))
    .setImage(await message.guild.iconURL({ format: "png", dynamic: true, size: 2048 }))
    .setColor('#7289DA')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, await message.guild.iconURL({ format: "png", dynamic: true, size: 2048 }))
  message.channel.send(embed);
}