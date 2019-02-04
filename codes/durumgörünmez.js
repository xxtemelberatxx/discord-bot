const Discord = require('discord.js');


exports.run = function(client, message) {
client.user.setStatus('invisible')
message.reply("Botun Durumu `Görünmez` Olarak Değiştirildi.").then(msg => {
  msg.react('✅');
  msg.delete('3000');
  message.delete();
});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['görünmez', 'invisible'],
  permLevel: 4
};

exports.help = {
  name: 'durumgörünmez',
  description: 'Botun durumunu değiştirir.',
  usage: 'durumgörünmez'
};
