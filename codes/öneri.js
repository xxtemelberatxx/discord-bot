const Discord = require('discord.js');


exports.run = async(client, message, args, params) => {

	if (!message.guild) {
const embed = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField(':warning: Uyarı :warning:', '`öneri` adlı komutu özel mesajlarda kullanamazsın.')
return message.author.send({embed}); }

	var öneri = args.slice(0).join(' ');
	var davet = await client.channels.get(message.channel.id).createInvite();
	var guildID = "489766399351455744";
	var channelID = "500357382769999893";

	if (!öneri){
		return message.reply("Bir mesaj belirtin! **Doğru Kullanım** : ?öneri <mesaj>")
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı", message.author.tag)
			.addField("Önerilen Sunucu", davet)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
			.setColor("ff0000")

		client.guilds.get(guildID).channels.get(channelID).send({embed});
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.")
	};

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öner', 'tavsiye'],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: 'Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır.',
  usage: 'öneri <mesaj>'
};
