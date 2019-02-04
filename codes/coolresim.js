const Discord = require('discord.js');
const client = new Discord.Client();
var coolImages = require('cool-images')

exports.run = (client, message) => {
 message.channel.send({embed: {
          "image": {
          url: coolImages.one(600, 800)},
          color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            }});};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cool', 'resim'],
  permLevel: 0
};

exports.help = {
  name: 'coolresim',
  description: 'Havalı bir resim gönderir.',
  usage: 'coolresim'
};