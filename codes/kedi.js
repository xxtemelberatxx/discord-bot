const Discord = require('discord.js');
const superagent = require('superagent');
const de = new Set();


exports.run = async(client, message, args) => {
    if(de.has(message.author.id)) return message.reply("Bu komutu 3 saniyede bir kullanabilirsin.")
    de.add(message.author.id);
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://aws.random.cat/meow');
    if(!{body}) return message.channel.send("Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription("**"+message.author.username+"**, İşte bir kedi !")
    .setImage(body.file)
    message.channel.send({embed})

    msg.delete();
    setTimeout(() => {
        de.delete(message.author.id);
    }, 3000);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['komikkedi', 'cat'],
    permLevel: 0
};

exports.help = {
    name: "kedi",
    description: "Bir kedi resmi gönderir.",
    usage: "kedi"
};