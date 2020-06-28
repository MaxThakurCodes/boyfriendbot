const Discord = require("discord.js");
const Server = require("../models/server")

exports.run = async (client, msg, args) => {
  let fServer = await Server.findOne({ serverId: msg.guild.id })
  let prefix;
  if (fServer === null) {
    prefix = "-"
  } else {
    prefix = await fServer.prefix
  }
  let embed = new Discord.MessageEmbed()
    .setColor(`#7289DA`)
    .setAuthor(`Boyfriend Bot Commands`, "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField(`:speak_no_evil: Boyfriend Bot Fun:`, `*${prefix}boyfriend, ${prefix}slap, ${prefix}kiss, ${prefix}date*`)
    .addField(`:partying_face: General Fun:`, `*${prefix}pickupline, ${prefix}nsfwpickuplines (Must be used in NSFW marked channel), ${prefix}gametruth, ${prefix}gamedare, ${prefix}truthordare*`)
    .addField(`:ok_hand: Utility:`, `*${prefix}help, ${prefix}icon, ${prefix}avatar (@user), ${prefix}check (@user), ${prefix}updatelog, ${prefix}invite, ${prefix}info, ${prefix}suggest, ${prefix}credits, ${prefix}prefix*`)
    .addField(`:cop: Moderation:`, `*${prefix}kick, ${prefix}ban, ${prefix}purge, ${prefix}sprefix (prefix)*`)
    .addField(`:sparkles: Help Support the Bot!`, `*Feel free to vote for the bot to help us get noticed by more people! https://bit.ly/BoyfriendVote*`)
    .addField(`:fist_tone5: Support Black Lives Matter!`, `*Boyfriend Bot developers support the Black Lives Matter Movement, if you wish to help go to https://blacklivesmatters.carrd.co/ and sign all petitions and find ways to help.*`)
    .setFooter(`𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 - 𝐜𝐢𝐭𝐢𝐳𝐞𝐧𝐬 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`);
  msg.channel.send(embed);

  //applesandbananas
};
