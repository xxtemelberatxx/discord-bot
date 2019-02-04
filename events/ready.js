const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const hak = new Set();

var prefix = ayarlar.prefix;

module.exports = client => {

    const Games = ["?yardım | ?yenilikler | Her zaman daha iyiye..."]
    setInterval(() => {
             var random = Math.floor(Math.random()*(Games.length-0+0)+0);
client.user.setGame(Games[random], "https://www.twitch.tv/");
client.user.setStatus('dnd');

    }, 6000)


    console.log(`Giriş Yaptım`);
  console.log(client.channels.size + ` Kanal - ` + client.guilds.size + ` Sunucu - ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`);
}
