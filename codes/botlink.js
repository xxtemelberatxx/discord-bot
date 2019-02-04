const Discord = require('discord.js');


exports.run = function(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönetme** yetkisine sahip olmalısın.`);
    let sayi = args[0];
    let body = 'https://discordapp.com/oauth2/authorize?client_id='+sayi+'&scope=bot&permissions=2146958847';
    if(!sayi) return message.channel.send("Sunucuna ekleteceğin botun ID'sini girmelisin.")
    if(isNaN(sayi)) return message.channel.send("ID girmelisin!");
    if(sayi === '531016723994902538') {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Benim davet linkim", "[Bu](https://discordapp.com/oauth2/authorize?client_id=531016723994902538&scope=bot&permissions=2146958847)")
      .setColor('RANDOM')
      .setTimestamp()
      message.channel.send({embed});
    } else {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Davet linki oluşturuldu.", `[Link](${body})`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Eğer bir hata alıyorsan girdiğin ID'yi kontrol et. ", message.author.avatarURL)
      message.channel.send({embed});
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botekletlink', 'botdavetlink'],
  permLevel: 0
};

exports.help = {
  name: 'botlink',
  description: 'Yazdığınız botun ID si ile bir bot davet linki oluşturur.',
  usage: 'botlink'
};
