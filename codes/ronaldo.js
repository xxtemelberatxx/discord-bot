const Discord = require('discord.js');


exports.run = function(client, message) {
	
	const embed = new Discord.RichEmbed()
		.setDescription("**RONALDO**")
		.setImage("https://images.performgroup.com/di/library/GOAL/4e/18/cristiano-ronaldo-juventus_j0bz9crgxky11b7dzdvw73pn8.jpg?t=-493776187&quality=90&w=1280")
		.setColor(0x00AE86)
		.addField("Lakabı", "Golcü", true)
		.addField("Yetenekleri", "Çok iyi kafa golü atar", true)
		.addField("NOT", "Hepsini salladım")
		
		message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ronaldo',
  description: 'Ronaldonun hakkında bilgi verir.',
  usage: 'ronaldo'
};
