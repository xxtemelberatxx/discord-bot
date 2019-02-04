const Discord = require('discord.js');


exports.run = function(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönetme** yetkisine sahip olmalısın.`);
    let mesaj = args.join(' ');
    if(!mesaj) return message.channel.send("Büyük yazmak istediğin şeyi girmelisin.");
    message.channel.send(`${mesaj.toLocaleUpperCase('TR')}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'büyükyaz',
  description: 'Yazdığınız cümleyi büyük harfle yazar.',
  usage: 'büyükyaz'
};
