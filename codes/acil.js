const Discord = require('discord.js');


exports.run = function(client, message, args) { 
    if(message.guild.id !== '489766399351455744') return;
    const filter = m => m.content.toLowerCase() === "evet";
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Gereken Yetkilerin yok.")
    message.channel.send("Acil rolünü almak istiyor musun? 10 saniye süren var. \n*Gereksiz kullanımlarda sunucudan atılırsınız.*").then(r => r.delete(10000)); 
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content.toLowerCase() === "evet") {
          let find = message.guild.roles.find('name', 'ACIL');
        message.member.addRole(find.id);
        message.reply("Rol Verildi. Unutma Gereksiz Kullanımda Atılırsın.");
      };
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'acil',
  description: 'Botun yetkili komutlarını gösterir.',
  usage: 'acil'
};
