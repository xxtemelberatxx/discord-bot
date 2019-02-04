const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları Banlama** yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.banReason = reason;
  client.banAuth = message.author;
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Banlanacak kişiyi etiketlemelisin.').catch(console.error);
  if (reason.length < 1) return message.reply('Banlama sebebini yazmalısın.');
  message.react('✅');
  message.guild.ban(user);
  
  
  if (!message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.reply("Yetkilileri sunucudan banlayamam.").then(async msg => {
    await message.clearReactions();
    message.react('❌');
    message.channel.overwritePermissions(user, {
      SEND_MESSAGES: null
    })
  });
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Banlama')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla', 'adminban'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Eğer bir yetkili iseniz istediğiniz kişiyi banlar.',
  usage: 'ban <kullanıcı> <sebep>'
};
