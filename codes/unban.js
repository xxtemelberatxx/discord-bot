const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları Banlama** yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
  if (!user) return message.reply('Banı kaldırılıcak kişinin ID numarasını yazmalısın.').catch(console.error);
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  message.react('✅');
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
