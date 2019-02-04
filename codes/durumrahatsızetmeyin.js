const Discord = require('discord.js');


exports.run = function(client, message) {
client.user.setStatus('dnd')
message.reply("Botun Durumu `Rahatsız Etmeyin` olarak değiştirildi.").then (msg => {
  msg.react('✅');
  msg.delete('3000');
  message.delete();
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durumrahatsız', 'rahatsızetmeyin', 'dnd'],
  permLevel: 4
};

exports.help = {
  name: 'durumrahatsızetmeyin',
  description: 'Botun durumunu değiştirir.',
  usage: 'durumrahatsızetmeyin'
};
