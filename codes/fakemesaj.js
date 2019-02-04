const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
    let kişi1 = message.guildMember
    if (message.mentions.users.size < 1) return message.reply('Birisini etiketlemelisin.')
    let yazi = args.slice(1).join(' ');
    if (!yazi) return message.reply('Kişiye yazdırmak istediğin mesaj nedir?')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sahtemesaj'],
    permLevel: 0
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};