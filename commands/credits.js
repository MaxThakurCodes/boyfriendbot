const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('Boyfriend Bot Alpha Contributors')
    .addField(':thinking: What is this?', '*This is a list of people who helped to develop boyfriend bot and make it what it is today.*') 
    .addField(':desktop: Developer Credits', '*robbie#2544 (Creator), Max Thakur#0831 (Rewritten for D.js v12)*')    
    .addField(':pencil: Suggestion Credits:', '<@329887126831497216>, 🍼ʙᴀʙʏ🍼#5501, Piggy#9713, <@315534526988156928>, <@530279594016636938>*')
    .addField(':selfie: Boyfriend Bot Profile Picture:', '*Tony Lopez (@tony_lopez IG)*')
    .addField(':person_raising_hand: Want your name in the credits?', '*Fill out our suggestion google form! https://forms.gle/DihjEbVfKqUmVSJt6*')
    .addField(':sparkles: Help Support the Bot!', '*Feel free to vote for the bot to help us get noticed by more people! https://bit.ly/BoyfriendVote*')
    .setTimestamp()
    .setFooter("Requested by " + msg.author.tag, msg.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  msg.channel.send(embed);


};
