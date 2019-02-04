const Discord = require('discord.js');
const xp = require("../xp.json");

exports.run = async(client, message, args) => {

  let user = message.mentions.members.first() || message.author;
  const member = message.guild.member(user);

  if (!xp[member.user.id]){
    xp[member.user.id] = {
      xp: 0,
      level: 0
    };
  }
  let curxp = xp[member.user.id].xp;
  let curlvl = xp[member.user.id].level;
  let nxtLvlXp = curlvl * 300;
  let a = nxtLvlXp - curxp;
  if(member.user.bot) return message.channel.send("Botlar puan kazanamaz.")
  if(curxp === 0) return message.channel.send("**"+member.user.username+"** kullanıcısının şu anda leveli yok !");

  let embed = new Discord.RichEmbed()
  .setAuthor(member.user.username)
  .setColor('RANDOM')
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${a} XP sonra level atlayacak.`, member.user.avatarURL)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'level',
  description: 'Levelinizi gösterir.',
  usage: 'level'
};
