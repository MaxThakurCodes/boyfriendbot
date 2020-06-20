const Discord = require('discord.js')
const cevaplar = [
  'why u finna be like that baby? :cry:',
  'w- why would you do that? ugh',
  'bruh wtf is up with you',
  'omg- :pleading_face: ',
  ':middle_finger: ',
  'oh, i like that ;)',
  ':flushed:',

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
  name: 'slap',
  description: 'slap',
  usage: '-slap'
};