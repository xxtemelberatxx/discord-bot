const Discord = require('discord.js');


exports.run = function(client, message) {
client.user.setStatus('online')
message.reply("Botun Durumu `Çevrimiçi` Olarak Değiştirildi.").then(msg => {
  msg.react('✅');
  msg.delete('3000');
  message.delete();
});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durum', 'çevrimiçi', 'online'],
  permLevel: 4
};

exports.help = {
  name: 'durumçevrimiçi',
  description: 'Botun durumunu değiştirir.',
  usage: 'durumçevrimiçi'
};
