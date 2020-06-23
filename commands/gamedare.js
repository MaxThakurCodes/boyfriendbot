const Discord = require('discord.js')
const cevaplar = [
  'ping @/everyone',
  'post the last image on your gallery',
  'post the last selfie of you',
  'ping the person that gets most annoyed by pings',
  'film yourself dabing',
  'sigh a black lives matter change.org',
  'film yourself singing as high as you can',
  'send your 5 most recent emojis',
  'invite me to your discord server ;)',
  'change your username to `boyfriendbot\'s s/o`',
  'ping @/here',
  'send a random person a dm saying "have a good day"',
  'send the first image in yoru gallery',
  'send your desktop wallpaper',
  'make ur pfp this for an hour https://media.discordapp.net/attachments/693242531575758889/724890294226649138/unknown.png',
  'send your favorite song',
  'show your search history',
  'turn on discords light mode for an hour',
  'ask a random person for free nitro',
  'i dare you to tell me a dad joke',
  'say the worse word you know',
  'talk like an f-boy for an hour',
  'run the -kiss command on someone `-kiss @<user>`',
  'send your favorite meme',
  'send a random photo from your camera roll',
  'tell me a story that you know from memory (fairytail or sumn like that yk?)',
];
exports.run = function (client, message, args) {
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
  name: 'gamedare',
  description: 'gamedare command',
  usage: '-gamedare'
};