const Discord = require('discord.js');



exports.run = function(client, message, args) {
  let kişi = message.mentions.members.first()
  if(!kişi) return message.channel.send({
    embed:{
      color: 0xf4b942,
      title: "Kimi vuracaksın?"
    } 
  });
  if(message.author.id === kişi.id) {
    const embed = new Discord.RichEmbed()
    .setTitle("Kendini vurdun, öldün!")
    .setColor('RED')
    .setTimestamp()
    message.channel.send({embed})
  } else {
    const embed = new Discord.RichEmbed()
    .setDescription("**"+message.author.username+"**, **"+kişi.user.username+"** adlı kullanıcıyı vurdu!")
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send({embed}) 
    if(client.user.id === kişi.id) {
      const embed = new Discord.RichEmbed()
      .setDescription("Ben ölürsem sen beni nasıl kullanacaksın? ")
      .setColor("ff0000")
      .setFooter("Bravo! Gizli kodu buldun. ", message.author.avatarURL)
      message.channel.send({embed})
    }
    if(kişi.bot) {
      message.delete()
      message.channel.send("Vurulacak kişi bot olmamalı.")
    }
  } return;

};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['ateşet'],
    permLevel: 0
};

exports.help = {
    name: "vur",
    description: "İstediğiniz kişiyi vurur.",
    usage: "vur"
};
