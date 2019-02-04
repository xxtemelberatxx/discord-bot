const Discord = require('discord.js');


exports.run = async(client, message) => {
      const embed = new Discord.RichEmbed()
      .addField("Sunucu Adı", message.guild.name, true)
      .addField("Toplam Üye Sayısı", message.guild.memberCount, true)
      .addField("Toplam Kanal Sayısı", `${message.guild.channels.map(m => m).length}`, true)
      .addField("Sunucu ID", message.guild.id, true)
      .addField("Sunucu Sahibi", `<@${message.guild.owner.id}>`, true)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['serverinfo', 'sunucubilgi'],
  permLevel: 0
};

exports.help = {
  name: 'serverbilgi',
  description: 'Server hakkında bilgi verir.',
  usage: 'serverbilgi'
};
