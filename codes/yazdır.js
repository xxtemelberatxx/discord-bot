const Discord = require('discord.js');


exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönetme** yetkisine sahip olmalısın.`);
	const mesaj = args.slice(0).join(' ')
	if (mesaj < 1) {
		message.reply("Yazmam için bir şey belirt")
	} else {
		message.delete();
		message.channel.send(mesaj)
	}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 0
};

exports.help = {
  name: 'yazdır',
  description: 'Bota istediğinizi yazdırır.',
  usage: 'yazdır <mesaj>'
};
