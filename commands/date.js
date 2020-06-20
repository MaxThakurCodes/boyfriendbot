const Discord = require('discord.js')
const cevaplar = [
  'hey um your really cute~ do you maybe want to go on a date? :pleading_face: ',
  'haha let me take yuh out somewhere. :star_struck:',
  'i love you do you want to go to the movies later?',
  'do you maybe want to go get ice-cream later or sumn?',
  'so like do you want to go to my place and watch netflix or sumn?',
];
exports.run = function (client, message, args) {
  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  message.channel.send(cevap);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'date',
  description: 'date command',
  usage: '-date'
};