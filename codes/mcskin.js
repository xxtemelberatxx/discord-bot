const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('Kullanıcı değil, bir oyuncu adı belirtmelisin.')
 } else {
 const embed = new Discord.RichEmbed()
   .setColor('GREEN')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send({embed});
 }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcskin', 'mcs'],
  permLevel: 0
};

module.exports.help = {
  name: 'mcskin',
  description: 'İstediğiniz kişinin minecraft karakterini Gösterir.',
  usage: 'mcskin'
};