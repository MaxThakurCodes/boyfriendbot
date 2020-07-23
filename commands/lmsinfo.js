const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if(message.guild.id !== "668891730799755265") return message.channel.send("This is a guild specific command, only Boyfriend Bot Partners have access to have these commands made. Join this server https://discord.gg/hBfmxVt and apply for partner!");
    let u = Math.floor(Math.random() * 5)
    let embed = new Discord.MessageEmbed()
    .setTitle("Lakeview Middle School Info!")
    .setDescription("Lakeview Middle School is a Roblox School community apart of the Ro-Educational community. Lakeview Middle School was founded by Omlgoing, also known as Going. Lakeview Middle School was created in January of 2020, but opened to the public on March 2020. Lakeview Middle School is still hosting sessions till this day and it is still being runned by Going. Thank you for reading the information on how Lakeview started!")
    .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setColor("#90EE90")
    .setTimestamp()
    if(u % 2 == 0) {
        embed.addField("Want something like this?", "Apply for partner in [this server.](https://discord.gg/hBfmxVt)")
        return message.channel.send(embed)
    } else {
        return message.channel.send(embed)
    }
}