const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(295, 295)
    //image.greyscale()
    //image.gaussian(3)
    Jimp.read("https://cdn.discordapp.com/attachments/492705577441689604/494582135286530050/t.png", (err, avatar) => {
        avatar.resize(295, 295)
        image.composite(avatar, 1, 0).write(`./img/tr/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/tr/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tr',
    description: 'Profil resminize türk bayrağı ekler.',
    usage: 'tr'
  };