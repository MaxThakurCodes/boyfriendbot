const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 𝐀𝐋𝐏𝐇𝐀 - 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒', "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField(':see_no_evil: Boyfriend Bot Fun:', '*-boyfriend, -slap, -kiss, -date*')
    .addField(':partying_face: General Fun:', '*-pickupline, -gametruth, -gamedare, -truthordare*')
    .addField(':ok_hand: Utility:', '*-help, -avatar (@user), -check (@user), -updatelog, -invite, -info (Information on bot), -suggest, -vote, -credits*')
    .addField(':cop: Moderation: (NOT WORKING DOWN FOR REWORKING)', '*-kick, -ban, -purge*')
    .addField(':sparkles: Help Support the Bot!', '*Feel free to vote for the bot to help us get noticed by more people! https://bit.ly/BoyfriendVote*')
    .addField(':fist_tone5: Support Black Lives Matter!', '*Boyfriend Bot developers support the Black Lives Matter Movement, if you wish to help go to https://blacklivesmatters.carrd.co/ and sign all petitions and find ways to help.*')
    .setFooter('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 𝐀𝐋𝐏𝐇𝐀 - 𝐜𝐢𝐭𝐢𝐳𝐞𝐧𝐬 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭');
  msg.channel.send(embed);

//applesandbananas
};