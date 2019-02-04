const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**SUNUCU ICONU**")
		.setColor("ff0000")
		.setImage(message.guild.iconURL)

	message.channel.send({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'servericon',
  description: 'Serverin iconunu gösterir.',
  usage: 'servericon'
};
