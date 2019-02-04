const Discord = require('discord.js');



exports.run = function(client, message, emoji, args)  {
    message.reply("Bu sunucuda bulunan emojiler")
    message.channel.send(message.guild.emojis.map(emoji => emoji).join(' , '))
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['emojiler'],
    permLevel: 0
};

exports.help = {
    name: "sunucuemoji",
    description: "Sunucudaki emojilerden birini gönderir.",
    usage: "sunucuemoji"
}