const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 𝐀𝐋𝐏𝐇𝐀 - 𝐔𝐏𝐃𝐀𝐓𝐄𝐒', "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png")
    .addField('UPDATES -  1.0.1 𝐚𝐥𝐩𝐡𝐚', 'Boyfriend bot has been completely re-written and is more reliable/advanced with its ban, kick, and info commands. For help run -help in your servers command channel! Also, happy pride month! (6/2/2020)')
    .addField('UPDATES -  1.0.2 𝐚𝐥𝐩𝐡𝐚', 'Boyfriend bot has been cleaned up a bit. (6/2/2020)')
    .addField('UPDATES -  1.0.3 𝐚𝐥𝐩𝐡𝐚', 'Re-did the ban command and added some new features! Run -help  (6/2/2020)')
    .addField('UPDATES -  1.0.4 𝐚𝐥𝐩𝐡𝐚', 'Finished **-purge** command and created a suggest command. (6/7/2020)')
    .addField('UPDATES -  1.0.5 𝐚𝐥𝐩𝐡𝐚', 'Redid the **-invite** command to include more features, check it out! Also changed from The Boyfriend Council to citizens. (6/17/2020)')
    .addField('UPDATES -  1.0.6 𝐚𝐥𝐩𝐡𝐚', 'Added -date (thanks @mwilky ☆#0929) and removed some commands nobody used. Also cleaned up a few things like grammar is some places. (6/18/2020)')
    .addField('UPDATES -  1.0.7 𝐚𝐥𝐩𝐡𝐚', 'Cleaned up Boyfriend Bot commands! Beta will be launching soon! (6/19/2020)')
    .addField('UPDATES -  1.0.8 𝐚𝐥𝐩𝐡𝐚', "We switched to Discord.js V12, and cleaned up all commands! (6/20/2020)")
    .addField('REMEMBER', 'Boyfriend bot is still in alpha, some features may not work as I work every day to make sure the bot is perfect, if you would love to support the bot invite it to your server by running -invite.')
    .setFooter('𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐁𝐎𝐓 𝐀𝐋𝐏𝐇𝐀 - 𝐜𝐢𝐭𝐢𝐳𝐞𝐧𝐬 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭');
  msg.channel.send(embed);


};