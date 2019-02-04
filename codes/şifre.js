const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
	var uzunluk = args.slice(0).join(' ');
	
  if(!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: ?şifre <uzunluk>')
  
  if(uzunluk > 2000) return message.channel.send("Discord, 2000'den fazla mesajı kabul etmiyor.")
	

	var password = generator.generate({
		length: uzunluk,
		numbers: true,
	})
	
	message.channel.send(password);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şifre',
  description: 'Rastgele bir şifre oluşturur',
  usage: 'şifre <uzunluk>'
};
