const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları Atma** yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Atılacak kişiyi etiketlemelisin.').catch(console.error);
  if (reason.length < 1) return message.reply('Atılacak kişiyi neden atmak istidediğini yazmalısın.');
  message.guild.member(user).kick();
  message.react('✅');
  if (!message.guild.member(user).kickable) return message.reply("Yetkilileri kickleyemem.").then(async msg => {
    await message.clearReactions();
    message.react('❌');
    message.channel.overwritePermissions(user, {
      SEND_MESSAGES: null
    })
  });
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan atma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
	.addField('Sebep', reason);
	return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
