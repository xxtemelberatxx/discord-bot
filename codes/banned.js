const Discord = require('discord.js');


exports.run = function(client, message) {
	const embed = new Discord.RichEmbed()
	.setAuthor("Admin Vurdu ve Gol Oldu !")
	.setImage("https://images-ext-1.discordapp.net/external/171uiKxRgITAipvhLwQWRN0gDHVsry0MC9oYnff9Vnw/http/i.imgur.com/O3DHIA5.gif")
	.setColor("007aff")
	.setTimestamp()
	message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban'],
  permLevel: 0
};

exports.help = {
  name: 'banned',
  description: 'Banlar.',
  usage: 'banned'
};
