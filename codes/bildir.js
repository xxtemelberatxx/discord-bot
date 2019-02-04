const Discord = require('discord.js');


exports.run = async(client, message, args, params) => {

	if (!message.guild) {
const embed = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField(':warning: Uyarı :warning:', '`bildir` adlı komutu özel mesajlarda kullanamazsın.')
return message.author.send({embed}); }

	var bildir = args.slice(0).join(' ');
	var davet = await client.channels.get(message.channel.id).createInvite();
	var guildID = "489766399351455744";
	var channelID = "501003910262030336";

	if (!bildir){
		return message.reply("Bir mesaj belirtin! **Doğru Kullanım** : ?bildir <mesaj>")
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Bildiri")
			.addField("Kullanıcı", message.author.tag)
			.addField("Bildirilen Server", davet)
			.addField("ID", message.author.id)
			.addField("Bildirilen", bildir)
			.setColor("08d4f8")

		client.guilds.get(guildID).channels.get(channelID).send({embed});
		message.channel.send("Bildiriniz alınmıştır! Teşekkür ederiz.")
	};

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bildir'],
  permLevel: 0
};

exports.help = {
  name: 'bildir',
  description: 'Bot da olan bir hatayı bot sahibine ulaştırır.',
  usage: 'bildir <mesaj>'
};
