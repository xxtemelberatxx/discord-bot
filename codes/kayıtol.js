const Discord = require('discord.js');


exports.run = function(client, message, args) { 
    if(message.guild.id !== '489766399351455744') return;
   let a = message.guild.roles.find('name', 'Üye')
   message.reply("Kayıt oldun !")
   if(!a) return;
   message.member.addRole(a.id)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıtol',
  description: 'Botun yetkili komutlarını gösterir.',
  usage: 'kayıtol'
};
