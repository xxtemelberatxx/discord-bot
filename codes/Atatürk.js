const Discord = require('discord.js');


exports.run = function(client, message) {
	const embed = new Discord.RichEmbed()
	.setTitle("Atam İzindeyiz !")
	.setImage("https://78.media.tumblr.com/8d4df8e3037e4bdce100f6bb72fcccb3/tumblr_ogaa330qp31st7nhfo2_500.gif")
	.setColor("0993ec")
  .setFooter("2019 | BOT", client.user.avatarURL)
	message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk'],
  permLevel: 0
};

exports.help = {
  name: 'Atatürk',
  description: 'ATATÜRK ! ',
  usage: 'Atatürk'
};