const Discord = require('discord.js'); 


exports.run = function(client, message, args) { 
    const embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username, message.author.avatarURL) 
    .addField("Yenilikler", "**?harfsayı** => Yazdığınız cümlenin veya kelimenin harf sayısını atar.\n**?botlink** => Herhangi bir botu davet etmek için bir davet linki oluşturur.\n**?idöğren** => İstediğiniz kişinin ID'sini öğrenirsiniz.\n**?sayıçarp** => Belirttiğiniz sayıyı kendisiyle çarpar.\n**?küfür-koruması** => Küfür koruması hakkında bilgi verir.\n**?özelşifre** => Gizli şifreyi bulmaya çalışırsınız.\n**?level** => Levelinizi gösterir.\n**?sürelisustur** => İstediğiniz kişiyi süreli susturur.")
    .setColor('BLUE') 
    .setFooter("BOT Yenilikler", client.user.avatarURL) 
    .setTimestamp() 
    message.channel.send({embed}) 
};


exports.conf = {
    enabled: false, 
    guildOnly: false, 
    aliases: ['yardım-yenilikler', 'yenilik'], 
    permLevel: 0 
};

exports.help = {
    name: "yenilikler", 
    description: "Bota gelen yeni komutları gösterir.", 
    usage: "yenilikler" 
};