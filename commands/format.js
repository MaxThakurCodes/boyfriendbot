
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('7289DA')
    .setAuthor('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 𝐀𝐋𝐏𝐇𝐀 - 𝐅𝐎𝐑𝐌𝐀𝐓𝐒', "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField(':bangbang: BAN', '-ban @user#2544 reason')
    .addField(':wave: KICK', '-kick @user#2544 reason')
    .addField(':wave: PURGE', '-purge (number)')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);
};