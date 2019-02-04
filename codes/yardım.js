const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
    .setDescription("**KOMUTLAR**")
    .addField("ANA KOMUTLAR İÇİN", "?anakomut", true)
    .addField("EĞLENCE KOMUTLARI İÇİN", "?eğlence", true)
    .addField("YETKİLİ KOMUTLAR İÇİN", "?yetkili", true)
    .addField("KÜFÜR KORUMASI İÇİN", "?küfür-koruması", true)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setFooter(message.author.username+" tarafından istendi.", message.author.avatarURL)
    .setColor('BLUE')
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'h', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını gösterir.',
  usage: 'yardım'
};
