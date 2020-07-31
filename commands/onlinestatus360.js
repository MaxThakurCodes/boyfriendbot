const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if(message.guild.id !== "721974664628535317") return message.channel.send("baby this command is a secret- how did you find it?");
    let u = Math.floor(Math.random() * 5)
    let embed = new Discord.MessageEmbed()
    .setTitle("BOYFRIEND BOT IS ONLINE")
    .setDescription("Boyfriend Bot is online and working as expected! :raised_hands:")
    .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setColor("#008000")
    .setTimestamp()
    if(u % 2 == 0) {
        embed.addField("Having an issue?", "Contact <@230857721128288259>")
        return message.channel.send(embed)
    } else {
        return message.channel.send(embed)
    }
}