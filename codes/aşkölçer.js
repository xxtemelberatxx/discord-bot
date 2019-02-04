const Discord = require('discord.js');


exports.run = async(client, msg, args) => {
    let ask=[
      "aşkölçer **%3** gösteriyor.",
      "aşkölçer **%6** gösteriyor.",
      "aşkölçer **%9** gösteriyor.",
      "aşkölçer **%12** gösteriyor.",
      "aşkölçer **%18** gösteriyor.",
      "aşkölçer **%20** gösteriyor.",
      "aşkölçer **%23** gösteriyor.",
      "aşkölçer **%26** gösteriyor.",
      "aşkölçer **%29** gösteriyor.",
      "aşkölçer **%30** gösteriyor.",
      "aşkölçer **%40** gösteriyor.",
      "aşkölçer **%50** gösteriyor.",
      "aşkölçer **%60** gösteriyor.",
      "aşkölçer **%70** gösteriyor.",
      "aşkölçer **%73** gösteriyor.",
      "aşkölçer **%76** gösteriyor.",
      "aşkölçer **%79** gösteriyor.",
      "aşkölçer **%82** gösteriyor.",
      "aşkölçer **%85** gösteriyor.",
      "aşkölçer **%88** gösteriyor.",
      "aşkölçer **%90** gösteriyor.",
      "aşkölçer **%91** gösteriyor.",
      "aşkölçer **%92** gösteriyor.",
      "aşkölçer **%93** gösteriyor.",
      "aşkölçer **%94** gösteriyor.",
      "aşkölçer **%95** gösteriyor.",
      "aşkölçer **%96** gösteriyor.",
      "aşkölçer **%97** gösteriyor.",
      "aşkölçer **%98** gösteriyor.",
      "aşkölçer **%99** gösteriyor.",
      "aşkölçer **%100** gösteriyor.",
    ]
      let member = msg.mentions.members.first()
     if(!member) return msg.channel.send("Kiminle aşkını ölçmek istiyorsun?")
    else{
        msg.reply(`${member} ile ${ask[Math.floor(Math.random() * 30)]}`)
    }
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }