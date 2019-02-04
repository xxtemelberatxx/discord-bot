const Discord = require('discord.js');


exports.run = function(client, message, args) {

	  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sil` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }

	let sayı = Number(args[0]);
	if(!sayı) return message.channel.send("Silmem için bir sayı belirt.");
	if(isNaN(sayı)) return message.channel.send("Bu bir sayı değil!");

  if (sayı > 100) return message.reply("Girdiğin sayı 100'den küçük olmamalı.")
  if (sayı === 100) return message.reply("100 sayısını algılayamıyorum.")

 if (sayı < 1) {
	return;
} else {
	message.channel.bulkDelete(sayı + 1);
	message.channel.send("**" + sayı + "** adet mesaj sildim!").then(msg =>{
		msg.delete("3000")
  });
}


};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirtile miktarda mesajı siler',
  usage: 'sil <miktar>'
};
