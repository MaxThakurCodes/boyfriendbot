const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let user = message.mentions.users.first()
  let act = 'DAMNNNN you got kissed by '
  if (!user) {
    let embed = new Discord.MessageEmbed()
      .setColor('#7289DA')
      .setDescription(`*kisses* baby ilysm :pleading_face: :star_struck: `)
  //    .setImage("https://cdn.glitch.com/46d9938f-6028-4734-805c-ee0f09cf1826%2F96713d4b-9c25-415c-93a2-1005a214e18f.image.png?v=1591008260279")
    message.channel.send(embed);
  }

  else if (user.id === '230857721128288259') {
    let embed = new Discord.MessageEmbed()
      .setColor('#7289DA')
      .setDescription(`DAMNNNN you got kissed by `)
   //   .setImage("https://cdn.glitch.com/46d9938f-6028-4734-805c-ee0f09cf1826%2F96713d4b-9c25-415c-93a2-1005a214e18f.image.png?v=1591008260279")
    message.channel.send(embed);
  }

  else {
    let embed = new Discord.MessageEmbed()
      .setColor('#7289DA')
      .setDescription(` ${user.username}#${user.discriminator} ${act}${message.author.tag}`)
      .setImage("")
    message.channel.send(embed);
  }
}

module.exports.help = {
  name: "kiss"
}