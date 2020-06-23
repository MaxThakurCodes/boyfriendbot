const Discord = require('discord.js')
const cevaplar = [
  'Aside from being sexy, what do you do for a living?',
  'Hey, my names Microsoft. Can I crash at your place tonight?',
  'Do you like raisins? How do you feel about a date',
  'If I could rearrange the alphabet, Id put U and I together.',
  'Are you a parking ticket? Because youve got FINE written all over you.',
  'Do you believe in love at first sight—or should I walk by again?',
  'Feel my shirt. Know what its made of? Boyfriend material.',
  'Did your license get suspended for driving all these guys crazy?',
  'Baby, if you were words on a page, youd be fine print.',
  'Did you just come out of the oven? Because you\'re hot.',
  'Its a good thing I have my library card, because I am totally checking you out.',
  'I was feeling a little off today—but youve turned me on again!',
  'Im studying to become a historian. Im especially interested in finding a date.',
  'Boy: "How many planets are there"\nGirl: "8"\nBoy: "No 7 because im gonna smash Uranus tonight"\nGirl: ":flushed:"',
  'Boy: "Spell ME"\nGirl: "M E"\nBoy: "You spelt it wrong"\nGirl: ":confused:"\nBoy: "It\'s me d in you v"'
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
  name: 'pickupline',
  description: 'pickupline command',
  usage: '-pickupline'
};
