const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönetme** yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ') ? args.slice(1).join(' ') : 'Belirsiz';
  client.muteReason = reason;
  client.muteAuth = message.author;
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Uyarılacak kişiyi etiketlemelisin.').catch(console.error);


  const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTimestamp()
    .addField('Eylem:', 'Uyarma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason)
  return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı', 'warn', 'w'],
  permLevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'Eğer bir yetkili iseniz istediğiniz kişiyi uyarır.',
  usage: 'uyar <kullanıcı> <sebep>'
};
