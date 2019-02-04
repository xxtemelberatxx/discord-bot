const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
    .setDescription("**YETKİLİ KOMUTLARI**")
    .addField("Komutlar:", "**?ban** => İstediğiniz kişiyi banlar.\n**?çekiliş** => Bir çekiliş başlatır.\n**?emojioluştur** => Emoji oluşturur.\n**?mute** => İstediğiniz kişiyi muteler.\n**?slowmode** => Yavaş modu açar.\n**?unban** => İstediğiniz kişinin banını kaldırır.\n**?unmute** => İstediğiniz kişinin mutesini kaldırır.\n**?uyar** => İstediğiniz kişiyi bir sebep ile uyarır.\n**?yazdır** => Bota yazı yazdırır.\n**?botlink** => Herhangi bir botu davet etmek için bir davet linki oluşturur.\n**?büyükyaz** => Büyük harflerle yazdığınız şeyi yazar.\n**?kick** => Sunucudan belirlediğiniz kişiyi atar.\n**?sürelisustur** => İstediğiniz kişiyi süreli susturur.")
    .setTimestamp()
    .setFooter(message.author.username+" tarafından istendi.", message.author.avatarURL)
    .setColor('RED')
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderatör', 'yardım-moderatör', 'yardım-yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Botun yetkili komutlarını gösterir.',
  usage: 'yetkili'
};
