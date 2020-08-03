const Discord = require("discord.js"),
  BlockList = require("../models/blocklist");
exports.run = async function (client, message, args) {
  let ownerId = ["302457454846017546", "230857721128288259"];
  let reason = "N/A";
  if (!ownerId.includes(message.author.id)) return;
  if (!args[0]) return message.reply("give me a id bud");
  if (args[1]) {
    reason = args.slice(1).join(" ");
  }
  let blocklistObject = new BlockList({
    user: {
      uid: args[0],
      reason: reason,
    },
    moderator: {
      uid: message.author.id,
    },
  });
  await blocklistObject.save();
  message.reply("Blacklist that user.");
};
