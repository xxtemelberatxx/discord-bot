const Discord = require('discord.js');


exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönetme** yetkisine sahip olmalısın.`);
    var soru = args.join(' ');
    if(!soru) return message.reply("Çekilişin amacı nedir?")
    let deneme = (`@${message.guild.members.random().id}`)
    const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setDescription("**ÇEKİLİŞ BAŞLADI !**")
    .addField("Çekilişin Amacı", soru, true)
    .addField('Çekilişi Kazanan', `<${deneme}>`)
    .setFooter("BOT | Çekiliş Komutu")
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekilişyap'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'Sunucudaki kişilerle çekiliş yapar.',
  usage: 'çekiliş <amaç>'
};
