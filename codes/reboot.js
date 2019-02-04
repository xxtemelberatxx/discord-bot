const Discord = require('discord.js');


exports.run = async(client, message) => {
  const filter = m => m.content.toLowerCase() === "evet";
  message.channel.send("Botun yeniden başlatılmasını istiyor musun? 10 saniye süren var.").then(r => r.delete(10000));
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    if (collected.first().content.toLowerCase() === "evet") {
      message.channel.send("Bot yeniden başlatılıyor...").then(msg => {
        console.log("Bot yeniden başlatılıyor...")
        process.exit(0);
      });
    };
  });

	
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
