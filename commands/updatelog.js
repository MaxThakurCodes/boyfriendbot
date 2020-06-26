const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 - 𝐔𝐏𝐃𝐀𝐓𝐄𝐒', "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField('UPDATES -  1.1.0', 'Welcome to Boyfriend Bot! The bot is now ready for use by everyone, anywhere! In this version we re-added moderation commands! (6/26/2020)')
    .addField('UPDATES -  1.1.1', 'Bug fixes (6/26/2020)')
    .addField('Looking for alpha updates?', 'Our website that is coming soon will have all our updates from the past.')
    .setFooter('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 - 𝐜𝐢𝐭𝐢𝐳𝐞𝐧𝐬 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭');
  msg.channel.send(embed);


};