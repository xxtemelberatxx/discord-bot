const Discord = require('discord.js');
const fs = require('fs');
const rep = require('../rep.json');
const hak = new Set();


exports.run = function(client, message, args) {
    if (hak.has(message.author.id)) return message.reply("Günlük rep hakkını kullandın!");
    else hak.add(message.author.id);
    var user = message.mentions.members.first();
    if (!user) return message.reply(`Rep puanı vermek istediğin kişiyi etiketlemelisin.`);
    if (user.bot === true) return message.reply("Botlara Rep puanı veremezsin.");
    else {
        if (user.id === message.author.id) return message.reply("Kendine Rep puanı veremezsin.");
        else {
            if (!rep[user.id]) {
                rep[user.id] = {
                    rep: 0
                }
                fs.writeFile("./rep.json", JSON.stringify(rep, null, 4), (err) => {
                    if (err) return console.log(err);
                });
                
                message.reply(`<@${user.id}> kullanıcısına günlük rep puanı verildi.`);
            } else {
                rep[user.id] = {
                    rep: rep[user.id].rep + 1
                }
                fs.writeFile("./rep.json", JSON.stringify(rep, null, 4), (err) => {
                    if (err) return console.log(err);
                });
                message.reply(`<@${user.id}> kullanıcısına günlük rep puanı verildi.`);
            }
        }
    }
    setTimeout(() => {
        hak.delete(message.author.id);
    }, 86400000)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rep',
  description: 'Herhangi bir kullanıcıya rep puanı verir.',
  usage: 'rep'
};
