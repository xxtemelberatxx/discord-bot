const ffmpeg = require("ffmpeg");
const Discord = require('discord.js');
const opusscript = require("opusscript");

const radyo = {
    alem    : "http://scturkmedya.radyotvonline.com/stream/80/",
    cnnturk : "https://radyo.dogannet.tv/cnnturk",
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/;",
    line    : "http://radioline.fm:8000/",
    metro   : "http://17773.live.streamtheworld.com/METRO_FM_SC",
    radyod  : "http://radyo.dogannet.tv/radyod",
    superfm : "http://17733.live.streamtheworld.com/SUPER_FM_SC",
    slow    : "https://radyo.dogannet.tv/slowturk",
}
exports.run = function(bot, message, args) {
    message.delete(10000).catch(console.error);
    if (!message.member.voiceChannel) return message.reply("İlk önce sesli bir kanala katıl.").then(m => m.delete(15000)).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.reply(`__**Radyo İstasyonları**__\n1-Alem FM,\n2-CNNTürk FM,\n3-Fenomen FM,\n4-Kral FM,\n5-KralPop FM,\n6-Line FM,\n7-Metro FM,\n8-RadyoD FM,\n9-Super FM,\n10-Slow FM.`).then(m => m.delete(40000)).catch(console.error);
        } else if (args[0].toLowerCase() === "alem" || args[0] === "1") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.alem);
                message.reply("**Alem FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "cnn" || args[0] === "2") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.cnnturk);
                message.reply("**CNNTürk FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "3") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen);
                message.reply("**Fenomen FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kral" || args[0] === "4") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kral);
                message.reply("**Kral FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kralpop" || args[0] === "5") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kralpop);
                message.reply("**KralPop FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "line" || args[0] === "6") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.line);
                message.reply("**Line FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "metro" || args[0] === "7") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.metro);
                message.reply("**Metro FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        }  else if (args[0].toLowerCase() === "radyod" || args[0] === "8") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.radyod);
                message.reply("**RadyoD FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "super" || args[0] === "9") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.superfm);
                message.reply("**Super FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "slow" || args[0] === "10") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.slow);
                message.reply("**Slow FM** Oynatılıyor...").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "durdur" || args[0].toLowerCase() === "bitir") {
            message.member.voiceChannel.leave();
        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["radio"],
    permLevel: 0
};
exports.help = {
    name: "radyo",
    description: "Belirtilen Radyo istasyonunu bulunduğu kanalda paylaşır.",
    usage: "radyo <name>"
};