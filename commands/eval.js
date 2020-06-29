const Discord = require("discord.js"),
  beautify = require("beautify");
const { format } = require('path');
exports.run = async function (client, message, args) {
  if (message.author.id === "230857721128288259" || message.author.id === "302457454846017546") {
    if (!args[0]) {
      message.channel.send("Hey loser, add something you want me to run, k?")
    }

    try {
      if (args.join(" ").toLowerCase().includes("token")) {
        return message.channel.send("<@230857721128288259>, stop buddy.");
      }

      const toEval = args.join(" ")
      const evaluated = await eval(toEval);

      let embed = new Discord.MessageEmbed()
        .setTitle("Eval")
        .addField("Input:", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
        .addField("Output: ", `\`\`\`\n${evaluated}\n\`\`\``)
        .addField("Type of: ", `\`\`\`\n${typeof (evaluated)}\n\`\`\``)
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()

      message.channel.send(embed)
    } catch (e) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(e.message)
        .setColor([255, 0, 0])
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
      message.channel.send(embed)
    }
  } else {
    return;
  }
}