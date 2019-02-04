const Discord = require('discord.js');


exports.run = function(client, message, args) {

    let sayi = args[0];
    var a = [sayi];
    if(!sayi) return message.channel.send("Kendisiyle çarpılmasını istediğin sayıyı girmelisin.");
    if(isNaN(sayi)) return message.channel.send("Sayı girmelisin.");
    const map = a.map(m => m * m);
    message.channel.send(`${map}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sayıçarp',
  description: 'Yazdığınız sayıyı kendisiyle çarpar.',
  usage: 'sayıçarp'
};
