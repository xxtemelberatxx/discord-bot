const Discord = require('discord.js');
	const cevaplar = [
	"**Şansın %75 !** :slight_smile:  ",
	"**Şansın %25 ! :frowning:**",
	"**Şansın %100 !** :smiley:",
	"**Şansın %50 !** :neutral_face:",
	"**Şansın %0 :sob:**"
];


exports.run = function(client, message) {
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	message.channel.send(cevap)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şansölç', 'şans'],
  permLevel: 0
};

exports.help = {
  name: 'şansölçer',
  description: 'Şansınızı ölçer.',
  usage: 'şansölçer'
};
