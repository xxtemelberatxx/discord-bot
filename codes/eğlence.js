const Discord = require('discord.js');


exports.run = function(client, message, args) {

  let sayfalar = ["**EĞLENCE KOMUTLARI**\n\n**?8ball** => Sihirli 8ball sorularınızı cevaplar.\n**?aşkölçer** => Aşk ölçmenizi sağlar.\n**?avatar** => Avatarınızı veya etiketlediğiniz kişinin avatarını gösterir.\n**?coolresim** => Cool bir resim gönderir.\n**?çayiç** => Çay içersiniz.\n**?emoji** => Bot emojili yazı yazar.\n**?fakemesaj** => Fake bir mesaj oluşturur.\n**?hacker** => Hacker olursunuz.\n**?harfşifre** => Harflerle şifre oluşturur.\n**?hesapla** => Bot matematik işlemi yapar.\n**?kedi** => Kedi resmi gönderir.\n**?komikköpek** => Komik bir köpek resmi gönderir.\n**?kullanıcıbilgi** => Kullanıcı bilginizi gösterir.\n**?mcskin** => İsmini yazdığınız oyuncunun minecaftdaki skinini gösterir.\n**?serverbilgi** => Server bilgilerini gösterir.\n**?servericon** => Serverin ikonunu gösterir.\n**?slots** => Slots oyununu oynarsınız.\n**?stresçarkı** => Bir stres çarkı çeviri.\n**?şansölçer** => Şansını ölçer.\n**?şifre** => Şifre oluşturur.\n**?vur** => İstediğiniz kişiyi vurur.\n**?yazıtura** => Yazı-Tura atarsınız.\n**?zarat** => Zar atarsınız.", " **?harfsayısı** => Yazdığınız cümlenin veya kelimenin harf sayısını atar.\n**?idöğren** => İstediğiniz kişinin idsini öğrenirsiniz.\n**?sayıçarp** => Belirttiğiniz sayıyı kendisiyle çarpar.\n**?özelşifre** => Şifre bulmaya çalışırsınız."]
  let sayfa = 1;

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('GREEN')
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setDescription(sayfalar[sayfa-1])

  message.channel.send({embed}).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);


      backwards.on('collect', r => {
        if (sayfa === 1) return;
        sayfa--;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit({embed})
      })

      forwards.on('collect', r => {
        if (sayfa === sayfalar.length) return;
        sayfa++;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit({embed})
      })

    })

  })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Botun eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
