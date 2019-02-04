const Discord = require('discord.js');



exports.run = async (client, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("Bu sunucuda renk yok.");

    message.channel.send(colors.array().join(" "));
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'renkler',
    description: 'Renkler',
    usage: 'renkler'
  };