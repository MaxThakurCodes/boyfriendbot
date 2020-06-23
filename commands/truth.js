const Discord = require('discord.js')
const cevaplar = [
  'baby whats the last thing u searched 4 on ur phone?',
  'who do u have a crush on?',
  'have you ever walked into a wall?',
  'have you ever done ***it** :flushed: ',
  'lol do you cover your eyes during the scary parts of movies?',
  'whats ur worse habit?',
  'omg bitchh do you sing in the shower?',
  'have u ever peed urself :no_mouth: ',
  'do you have a stuffed animal?',
  'have you ever given someone a fake number / answer?',
  'what color is your underwear rn? :face_with_monocle: ',
  'have you ever farted and blamed it on someone else?',
  'do you like ur mom or dad better?',
  'whats ur biggest pet peeve?',
  'who in this chat is the worse person to date',
  'have you ever done an @/everyone to piss people off?',
  'who in this chat would you swith lives with?',
  'if yuh was reborn what year would you be born in?',
  'whats a childish thing you still do-',
  'do you still have a library book you never returned?',
  'hav u ever eaten sumn off the floor?',
  'do you eat with ur fingers? :nauseated_face: ',
  'do you have a diary?',
  'whats something that you have never told anyone?',
  'have you ever had lice? lol',
  'have u ever asked someone out?',
  'have u ever sent someone the wrong text? i have :pensive:',
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
  name: 'truth',
  description: 'truth command',
  usage: '-truth'
};