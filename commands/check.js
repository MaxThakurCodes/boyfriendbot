const Discord = require("discord.js");

const flags = {
  DISCORD_EMPLOYEE: "<:staffbadge:739462285260619800> Discord Staff",
  DISCORD_PARTNER: "<:partner_badge:739462304093044736> Discord Partner",
  BUGHUNTER_LEVEL_1: "<:BugHunter:739455258375356456> Bug Hunter (Level 1)",
  BUGHUNTER_LEVEL_2: "<:BugHunterLvl2:739458527185076385> Bug Hunter (Level 2)",
  HYPESQUAD_EVENTS: "<:hypesquad:739455051688443925> HypeSquad Events",
  HOUSE_BRAVERY: "<:Bravery:739454400443056148> House of Bravery",
  HOUSE_BRILLIANCE: "<:Brilliance:739454381375750204> House of Brilliance",
  HOUSE_BALANCE: "<:Balance:739454430700765235> House of Balance",
  EARLY_SUPPORTER:
    "<:early_supporter_badge:739462266419806264> Early Supporter",
  TEAM_USER: "Team User",
  SYSTEM: "<:system:739461535289704490> System",
  VERIFIED_BOT: "<:verifiedbot:739460624748249088> Verified Bot",
  VERIFIED_DEVELOPER: "<:botdev:739453488047849552> Verified Bot Developer",
  HEADWAY_OWNER: "<:owner:739567503918759976> Headway Owner",
  HEADWAY_COOWNER: "🛠️ Headway Co-Owner",
  HEADWAY_DEV: "💻 Headway Developer",
  HEADWAY_STAFF: "<:purpleverify:739571112421097726> Headway Staff",
  HEADWAY_PARTNER: "<:partner:740442267114012683> Headway Official Partner",
  PLOVER_CEO: "<:ceo:740887777364672515> Plover CEO",
};
let HeadwayStaff = [
  "473255635689930764",
  "302457454846017546",
  "315534526988156928",
  "230857721128288259",
  "446114292186742804",
  "647981740568084490",
];
let HeadwayPartners = [
  "530279594016636938",
  "457805013474082817",
  "441912852710948864",
];
module.exports.run = async (client, message, args) => {
  let user;
  if (args[0]) {
    user = message.mentions.users.first() || client.users.cache.get(args[0]);
  } else {
    user = message.author;
  }
  let userFlags = user.flags.toArray();
  if (user.id === "739287402551443527") {
    userFlags.push("PLOVER_CEO");
  } else if (user.id === "302457454846017546") {
    userFlags.push("HEADWAY_COOWNER");
  } else if (user.id === "230857721128288259") {
    userFlags.push("HEADWAY_OWNER");
  } else if (user.id === "473255635689930764") {
    userFlags.push("HEADWAY_DEV");
  }
  if (HeadwayStaff.includes(user.id)) {
    userFlags.push("HEADWAY_STAFF");
  }
  if (HeadwayPartners.includes(user.id)) {
    userFlags.push("HEADWAY_PARTNER");
  }
  if (!user.bot) var abot = "Normal user";
  if (user.bot) var abot = "Bot";

  const member = message.guild.member(user);
  var regdate = new Date(user.createdAt)
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  var joindate = new Date(member.joinedAt)
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("Username: ", `${user.username}`, true)
    .addField("ID: ", `${user.id}`, true)
    .addField("Tag: ", `${user.tag}`, true)
    .addField(
      "Nickname: ",
      `${member.nickname ? "" + member.nickname + "" : "None"}`,
      true
    )
    .addField("Registered: ", regdate, true)
    .addField("Joined: ", joindate, true)
    .addField("Status: ", user.presence.status, true)
    .addField("User Type: ", abot, true)
    .addField(
      `Flags:`,
      `${
        userFlags.length
          ? userFlags.map((flag) => flags[flag]).join(", ")
          : "None"
      }`
    )
    .setColor([
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ])
    .setFooter(`Requested By: ${message.author.tag}`);
  message.channel.send(embed);
  return;
};
//owo
module.exports.help = {
  name: "check",
};
