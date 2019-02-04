const Discord = require('discord.js');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Avatar Oluşturuluyor...");
    let target = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();
};

exports.conf = {
    enbaled: false,
    guildOnly: true,
    aliases: ['avatar2', 'avatar 2'],
    permLevel: 4
};

exports.help = {
    name: "avatar2",
    description: "Avatar 2 komutudur.",
    usage: "avatar2"
};