const fetch = require("node-fetch");
const querystring = require("querystring");
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (message.channel.nsfw !== true)
    return message.reply(
      "lmao baby lets get out of work first- (must be used in a channel marked NSFW)"
    );
  const searchString = querystring.stringify({ term: args.join(" ") });

  if (!args.join(" "))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Babe, what word am I tryna define lol`)
    );

  const { list } = await fetch(
    `https://api.urbandictionary.com/v0/define?${searchString}`
  ).then((response) => response.json());

  try {
    const [answer] = list;

    const trim = (str, max) =>
      str.length > max ? `${str.slice(0, max - 3)}...` : str;

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addFields(
        {
          name: ":mag_right: Definition:",
          value: trim(answer.definition, 1024),
        },
        {
          name: ":face_with_monocle: Example:",
          value: trim(answer.example, 1024),
        },
        {
          name: ":star: Ratings:",
          value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.`,
        }
      );
    message.channel.send(embed);
  } catch (error) {
    console.log(error);
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `:neutral_face: Sorry cutie but unfortunately no definitions were found for **${args
            .slice(1)
            .join(" ")}**`
        )
    );
  }
};
