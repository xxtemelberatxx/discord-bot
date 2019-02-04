const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
    .setDescription("**ANA KOMUTLAR**")
    .addField("Komutlar:", "**?bildir** => Bot da olan bir hatayı bot sahibine ulaştırır.\n**?botbilgi** => Bot hakkında bilgi verir.\n**?öneri** => Botun sahibine bir öneri verirsiniz.\n**?report** => İstediğiniz kişiyi bir sebeple raporlarsınız.\n**?yenilikler** => Bota gelen yenilikleri gösterir.\n**?level** => Levelinizi gösterir.")
    .setColor('GREY')
    .setTimestamp()
    .setFooter(message.author.username+" tarafından istendi.", message.author.avatarURL)
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-anakomut', 'anakomutlar'],
  permLevel: 0
};

exports.help = {
  name: 'anakomut',
  description: 'Botun ana komutlarını gösterir.',
  usage: 'anakomut'
};
