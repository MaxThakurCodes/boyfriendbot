
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let embed = new Discord.MessageEmbed()
    .setAuthor('HELPFUL LINKS', client.user.displayAvatarURL)
    .addField('Invite me to your place :house: ', '[Invite me to your server!](https://discord.com/api/oauth2/authorize?client_id=487395837610295317&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FhBfmxVt&response_type=code&scope=bot%20guilds.join)')
    .addField('Join the Citizens community support server to get any support you may need. ✌', '[Join here!](https://discord.gg/hBfmxVt)')
    .addField('Lets go to my website :cowboy: ', '[Lets go!](https://citizens.studio)')
    .addField('Vote for the me on top.gg? 🎉', '[Lets vote!](https://top.gg/bot/487395837610295317/vote)')
    .addField('Want to support the bot more?', '[Alternatively you can vote here!](https://discordbotlist.com/bots/boyfriend-bot/upvote)')
    .setColor('#7289DA')
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);

}