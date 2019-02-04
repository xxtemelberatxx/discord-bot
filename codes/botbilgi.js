const Discord = require('discord.js');


exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed()
	.addField("Bot Sahibi", "! | {Minecrafter_YV} |#7083 (403921311321292803)", true)
	.addField("Toplam Sunucu Sayısı",  client.guilds.size, true)
	.addField("Toplam Kullanıcı Sayısı", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
	.addField("Kitaplık Türü", "discord.js", true)
	.addField("Kodlama Dili", "JavaScript", true)
	.addField("En sevdiğim renk", 'Mor')
	.addField("NOT", "7/24 hizmet veremiyorum.")
	.addField("Davet", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=531016723994902538&scope=bot&permissions=2146958847)")
	.setColor("ff0000")
		message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgiler', 'bot bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Bot hakkında bilgi verir.',
  usage: 'botbilgi'
};
