const Discord = require('discord.js')

module.exports.run = (client, message, args) => {

  let user = message.mentions.users.first();
  if (user) {
    user = message.mentions.users.first();
  }
  else {
    user = message.author;
  }

  if (!user.bot) var abot = 'Normal user';
  if (user.bot) var abot = 'Bot';

  const member = message.guild.member(user);
  var regdate = new Date(user.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var joindate = new Date(member.joinedAt).toISOString().replace(/T/, ' ').replace(/\..+/, '');
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("Username: ", `${user.username}`, true)
    .addField("ID: ", `${user.id}`, true)
    .addField("Discriminator: ", `#${user.discriminator}`, true)
    .addField('Nickname: ', `${member.nickname ? '' + member.nickname + '' : 'None'}`, true)
    .addField("Registered: ", regdate, true)
    .addField('Joined: ', joindate, true)
    .addField("Status: ", user.presence.status, true)
    .addField("User Type: ", abot, true)
    .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
    .setFooter(`Requested By: ${message.author.tag}`)
  message.channel.send(embed);
  return;


}

module.exports.help = {
  name: "check"
}