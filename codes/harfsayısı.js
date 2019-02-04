const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let deneme = args.join('');
    if(!deneme) return message.channel.send("Bir cümle veya kelime girmelisin.")
    message.reply(`Yazdığın kelime **${deneme.length}** harfli !`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['harfsayı'],
  permLevel: 0
};

exports.help = {
  name: 'harfsayı',
  description: 'Yazdığınız kelimenin sayısını söyler.',
  usage: 'harfsayı'
};
