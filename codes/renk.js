const Discord = require('discord.js');



exports.run = async (client, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("Bu sunucuda renk yok.");

    let str = args.join(" ");
    let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

    if(!role) return message.channel.send("Bu renk mevcut değil !");

    try {
        await message.member.removeRoles(colors);
        await message.member.addRole(role);
        message.channel.send(`Şu anda ${role} rengine sahipsin !`);
    }catch(e) {
        message.channel.send(`Operasyon Başarısız ! `)
    }
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'renk',
    description: 'Renkler',
    usage: 'renk'
  };