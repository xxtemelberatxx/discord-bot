const Discord = require('discord.js');

const cevaplar = [
    "Çıkan Sayı: `1`",
    "Çıkan Sayı: `2`",
    "Çıkan Sayı: `3`",
    "Çıkan Sayı: `4`",
    "Çıkan Sayı: `5`",
    "Çıkan Sayı: `6`"
];

exports.run = function(client, message, args) {
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.reply(cevap);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zar-at'],
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar atar.',
  usage: 'zarat'
};
