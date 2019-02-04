const Discord = require('discord.js');


exports.run = function(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    let guild = message.guild
    let [link, ad] = args.join(" ").split(" ");
    if (!link) return message.channel.send(`Bir link yazmalısın.`)
    if (!ad) return message.channel.send(`Bir isim yazmalısın.`)
    
    guild.createEmoji(link, ad)
      .then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`))
      .catch(console.error);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'emojioluştur',
  description: 'Emoji oluşturur.',
  usage: 'emojioluştur'
};
