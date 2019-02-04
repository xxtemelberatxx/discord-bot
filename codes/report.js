const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`report` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.muteReason = reason;
  client.muteAuth = message.author;
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'şikayetler');
  if (!modlog) return message.reply('`şikayetler` kanalını bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Raporlanacak kişiyi etiketlemelisin.').catch(console.error);
  if (reason.length < 1) return message.reply('Raporlama sebebini yazmalısın.');
  message.react('✅');
  
  const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTimestamp()
    .addField('Eylem:', 'Rapor')
     .addField('Raporlayan:', `${message.author.username}#${message.author.discriminator}`)
     .addField('Raporlanan:', `${user.username}#${user.discriminator} (${user.id})`)    
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rapor', 'şikayet'],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'İstediğiniz kişiyi bir sebep ile raporlar.',
  usage: 'report <kullanıcı> <sebep>'
};
