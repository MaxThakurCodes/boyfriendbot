
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let embed = new Discord.MessageEmbed()
    .setAuthor('INVITE', client.user.displayAvatarURL)
    .addField('Invite me to your place 🍆', 'https://discord.com/oauth2/authorize?client_id=487395837610295317&scope=bot&permissions=8')
    .addField('Join the Citizens community support server and know downtimes / get help ✌', 'https://discord.gg/hBfmxVt')
    .addField('Vote for the me? 🎉', 'https://bit.ly/BoyfriendVote')
    .setColor('#7289DA')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);

}