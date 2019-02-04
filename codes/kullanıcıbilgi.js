const Discord = require('discord.js');
const moment = require('moment');


exports.run = async (client, message, args) => {
    if (!message.guild) {
        const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(':warning: Uyarı :warning:', '`kullanıcıbilgi` komutunu özel mesajlarda kullanamazsın.')
        return message.author.send({embed}); }
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(member.user.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("Takma Adı:", `${member.nickname !== null ? `${member.nickname}` : 'Yok'}`, true)
    .addField("Oluşturulma Tarihi:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField('Bot mu?', member.user.bot ? '\n Evet' : 'Hayır')
    .addField("Durum:", `${user.presence.status.replace('online', 'Çevrimiçi')}`.replace('dnd', 'Rahatsız Etmeyin').replace('idle', 'Boşta').replace('offline', 'Çevrimdışı'), true)
    .addField("Oynadığı Oyun:", `${user.presence.game ? user.presence.game.name : 'Oynamıyor'}`, true)
    .addField("Rolleri:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    .addField("Bu sunucuda en son yazdığı mesajı:", `${member.user.lastMessage !==null ? `${member.user.lastMessage}` : 'Yok'}`, true)
    .addField("Sunucuya katılma tarihi:", member.guild.joinedAt, true)
    message.channel.send({embed})
};

exports.conf = {
  guildOnly: false,
  aliases: ['kullanıcıinfo', 'userinfo'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgi',
  description: 'Etiketlediğiniz kişinin bilgilerini gösterir.',
  usage: 'kullanıcıbilgi'
};