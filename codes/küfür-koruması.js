const Discord = require('discord.js');


exports.run = async(client, message, args) => {
  let guild = message.guild.channels.find('name', 'küfür-aç');
  if(guild) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Koruma Açık!")
    .setTimestamp()
    .setColor('PURPLE')
    message.channel.send({embed})
  } else {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Küfür koruması için `küfür-aç` adında bir kanal oluşturun.")
    .setTimestamp()
    .setColor('PURPLE')
    message.channel.send({embed})
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-küfür-koruması', 'help-küfür-koruması'],
  permLevel: 0
};

exports.help = {
  name: 'küfür-koruması',
  description: 'Küfür koruması hakkında bilgi verir.',
  usage: 'küfür-koruması'
};
