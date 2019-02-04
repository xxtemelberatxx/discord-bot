const Discord = require('discord.js');


exports.run = async(client, message, args) => {
    if (!message.guild) {
        const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(':warning: Uyarı :warning:', '`avatar` komutunu özel mesajlarda kullanamazsın.')
        return message.author.send({embed}); }

        let user = message.mentions.users.first() || args[0] || message.author;

        try {
            const member = message.guild.member(user);

            const embed = new Discord.RichEmbed()
            .setImage(member.user.avatarURL)
            .setTimestamp()
            .setColor('RANDOM')
            message.channel.send({embed})
        }catch(e) {
            message.channel.send("Girdiğin mesaj hatalı.");
        }
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı gösterir.',
  usage: 'avatar'
};
