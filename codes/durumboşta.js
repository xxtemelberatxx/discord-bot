const Discord = require('discord.js');


exports.run = function(client, message) {
client.user.setStatus('idle')
message.reply("Botun Durumu `Boşta` Olarak Değiştirildi.").then(msg => {
  msg.react('✅');
  msg.delete('3000');
  message.delete();
});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durumboş', 'boşta', 'boş', 'idle'],
  permLevel: 4
};

exports.help = {
  name: 'durumboşta',
  description: 'Botun durumunu değiştirir.',
  usage: 'durumboşta'
};
