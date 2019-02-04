const Discord = require('discord.js');
const fs = require('fs');
const rep = require('../rep.json');


exports.run = function(client, message, args) {
    let user = message.mentions.members.first() || message.author;
    const member = message.guild.member(user);
    if(!rep[member.user.id]) {
        rep[member.user.id] = {
            rep: 0
        }
    }
    let reppuan = rep[member.user.id].rep;
    if(message.author.bot) return;
    if(member.user.bot) return message.channel.send("Botlar rep puanı kazanamaz.");
    if(reppuan === 0) return message.channel.send(`<@${member.user.id}> kullanıcısının hiç rep puanı yok.`)
    const embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .addField("Kullanıcının rep puanı", reppuan)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcırep',
  description: 'Rep puanınızı gösterir.',
  usage: 'kullanıcırep'
};
