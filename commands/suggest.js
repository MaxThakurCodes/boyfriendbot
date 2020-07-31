const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.MessageEmbed()
    .setColor('7289DA')
    .setAuthor('Want to suggest a feature/phrase for your boyfriend bot to say?', client.user.displayAvatarURL)
    .setDescription("[Suggest Something here!](https://forms.gle/3zxoL2jHzVDXhyim9)")
    .setTimestamp()
    .setFooter("Requested by " + message.author.tag, message.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  message.channel.send(embed);
}