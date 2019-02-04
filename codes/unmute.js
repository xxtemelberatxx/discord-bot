const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`unmute` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları Susturma** yetkisine sahip olmalısın.`);
  let guild = message.guild
  client.unmuteAuth = message.author;
  let user = message.guild.member(message.mentions.users.first())
  let user1 = message.mentions.users.first()
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Mutesi kaldırılacak kişiyi etiketlemelisin.').catch(console.error);
  message.react('✅');
  message.guild.channels.filter(s => s.type === 'text').forEach(s => {
  s.overwritePermissions(user, {
  SEND_MESSAGES: null,
  ADD_REACTIONS: null
})
})

let sa = message.guild.roles.find('name', 'Susturulmuş');
await(user.removeRole(sa))
  
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Susturma Açma')
    .addField('Kullanıcı:', `${user1.username}#${user1.discriminator} (${user1.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['susturaç', 'adminsusturaç'],
  permLevel: 0
};

exports.help = {
  name: 'unmute',
  description: 'Eğer bir yetkili iseniz istediğiniz kişinin mutesini kaldırır.',
  usage: 'unmute <kullanıcı> <sebep>'
};
