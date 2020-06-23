const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('Boyfriend Bot Alpha Contributors')
    .addField(':desktop: Developer Credits', '*robbie#2544 (Creator), Max Thakur#0831 (Rewritten for D.js v12)*')    
    .addField(':pencil: Suggestion Credits:', '*mwilky ☆#0929, 🍼ʙᴀʙʏ🍼#5501, Piggy#9713, Bless#5049*')
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
