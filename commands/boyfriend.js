const Discord = require('discord.js')
const cevaplar = [
  'hey baby',
  'i love you',
  '*loves you in french*',
  'hmu :wink:',
  'lets have a lil fun later-',
  'ur hot.',
  'wanna see my abs?',
  '*licks*',
  'ur rly cute',
  'ayo baby! lemme get cho number :smirk:',
  'lets play roblox later',
  'i love you so much',
  'want my hoodie?',
  'Yo- Me, you... my place :wink:',
  'let me simp for by baby :pleading_face: :point_right: :point_left: ',
  '💋',
  'add my sc and we can have some fun 2nite ;)',
  'i love you sm baby :pleading_face:',
  'your so cute, i could do you all night~',
  'baby can we make a tiktok later? :pleading_face: :point_right: :point_left: ',
  'baby can we go to a BLM protest later? :pleading_face:',
  ':eye: :lips: :eye: ',
  'hi qt... can i get ur #?',
  'come here baby ily sm :cowboy: ',
  'do yuh maybe wanna netflix and chill later? :smiling_face_with_3_hearts: ',
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
  name: 'boyfriend',
  description: 'boyfriend command',
  usage: '-boyfriend'
};