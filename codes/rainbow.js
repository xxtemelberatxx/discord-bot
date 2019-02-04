const Discord = require('discord.js');
const hak = new Set();


exports.run = function(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek içni **Yönetici** yetkisini sahip olmalısın.");
    let role = message.guild.roles.find(val => val.name === 'Rainbow');
    if(!role) message.reply('`Rainbow` rolünü bulamıyorum.')
    var adım = 0;
    var sayac = setInterval(() => {
        message.guild.roles.find(val => val.name === "Rainbow").edit({color: 'RANDOM'});
        adım++;
    }, 5000)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['disco', 'disko'],
  permLevel: 0
};

exports.help = {
  name: 'rainbow',
  description: 'Herhangi bir kullanıcıya rep puanı verir.',
  usage: 'rainbow'
};
