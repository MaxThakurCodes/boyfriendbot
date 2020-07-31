
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let embed = new Discord.MessageEmbed()
    .setAuthor('baby do you need to make a webhook announcement that looks cool?', client.user.displayAvatarURL)
    .addField('baby you can use this', 'https://citizens.studio/webhooks.html')
    .addField('when you use it you can vote for me on top.gg to pay me back :pleading_face: :point_right: :point_left:', 'https://top.gg/bot/487395837610295317/vote')
    .setColor('#7289DA')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);

}