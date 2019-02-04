const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  if (!message.guild) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`mute` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send({embed}); }
  if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları Susturma** yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ') ? args.slice(1).join(' ') : "Belirsiz";
  client.muteReason = reason;
  client.muteAuth = message.author;
  let user = message.guild.member(message.mentions.users.first())
  let user1 = message.mentions.users.first()
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Mutelenecek kişiyi etiketlemelisin.').catch(console.error);
  message.react('✅');
  message.guild.channels.filter(s => s.type === 'text').forEach(s => {
  s.overwritePermissions(user, {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
})
})

let sa = message.guild.roles.find('name', 'Susturulmuş');
if(!sa) return message.guild.createRole({
  name: "Susturulmuş",
  color: "ff0000",
  permissions: []
})
await (user.addRole(sa)).catch(console.error)


if (message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.reply("Yetkilileri susturamam.").then(async msg => {
  await message.clearReactions();
  message.react('❌');
  message.channel.overwritePermissions(user, {
    SEND_MESSAGES: null,
    ADD_REACTIONS: null
  })
  user.removeRole(sa)
});
  const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTimestamp()
    .addField('Eylem:', 'Susturma')
    .addField('Kullanıcı:', `${user1.username}#${user1.discriminator} (${user1.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sustur', 'adminsustur'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'Eğer bir yetkili iseniz istediğiniz kişiyi muteler.',
  usage: 'mute <kullanıcı> <sebep>'
};
