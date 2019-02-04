const Discord = require('discord.js'); 


exports.run = function(client, message, args) { 
    let user = message.mentions.users.first()
    if(!user) return message.channel.send("ID'sini öğrenmek istediğin kullanıcıyı etiketlemelisin.")
    if(user.id === message.author.id) return message.channel.send(`Senin ID numaran: **${message.author.id}** !\n`)
    message.channel.send(`Belirttiğin kullanıcının ID'si: **${user.id}** !`)
};


exports.conf = {
    enabled: false, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

exports.help = {
    name: "idöğren", 
    description: "Etiketlediğiniz kişinin idsini söyler.", 
    usage: "idöğren" 
};