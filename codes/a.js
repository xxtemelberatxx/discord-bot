const Discord = require('discord.js');
const books = require('google-books-search-2');

exports.run = async(client, message, args) => {
    if (!args[0]) return message.reply("Kitap ismi belirt!");
    var options = {field:"title",offset:0,limit:1,type:"books",order:"revelance",lang:"tr"};

    books.search(args.join(" "), options).then(function(results) {
        console.log(results);
        var embed = new Discord.RichEmbed();
        embed.setColor("RANDOM");
        embed.addField("Kitabın Adı", results.title, true);
        embed.addField("Kitabın Yazarı", results.authors, true);
        message.channel.send({embed: embed});
    }).catch(function(error) {
	console.log(error);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'a',
  description: 'a',
  usage: 'a'
};