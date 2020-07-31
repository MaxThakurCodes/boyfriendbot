const Discord = require('discord.js')
const cevaplar = [
  '#### ######',
  'hey #### lets play anothr game',
  'omg i ###### #### ###',
  '###############',

];
exports.run = function (client, message, args) {
  var soru = args.join(' ');
  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  message.channel.send(cevap)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'robloxchat',
  description: 'chatting like a roblox thing',
  usage: '-robloxchat'
};