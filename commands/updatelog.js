const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 - 𝐔𝐏𝐃𝐀𝐓𝐄𝐒', "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField('UPDATES HAVE MOVED', "Please refer to [updates.md](https://github.com/Citizens-Studios/BoyfriendBot-Public/blob/master/UPDATES.md) for updated update logs!")
    .setFooter('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 - 𝐜𝐢𝐭𝐢𝐳𝐞𝐧𝐬 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭');
  msg.channel.send(embed);


};
