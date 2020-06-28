
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('7289DA')
    .setAuthor('Boyfriend Bot Formats', "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField(':bangbang: BAN', '-ban @user#2544 reason')
    .addField(':wave: KICK', '-kick @user#2544 reason')
    .addField(':no_entry_sign:  PURGE', '-purge (number)')
    .addField(':twisted_rightwards_arrows:  PREFIX CHANGE', 'First run *-add* if you have not already. Then run *-sprefix (prefix here)')    
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);
};