const Discord = require('discord.js');
const api = "https://jsonplaceholder.typostspicode.com/";
const snekfetch = require('snekfetch');

exports.run = async(client, message, args) => {
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return message.channel.send("Supply an ID!");
        if(isNaN(id)) return message.channel.send("Supply a valid number!");

        let entry = body.find(post => post.id === id);
        if(!entry) return message.channel.send("This entry does not exist!");

        let embed = new Discord.RichEmbed()
        .setColor("ff0000")
        .setAuthor(entry.title)
        .setDescription(entry.body)
        .addField("Author ID", entry.userId)
        .setFooter("Post ID:" + entry.id);
        message.channel.send({embed: embed});
    });
};

exports.conf = {
    enabled: false,
    guildOnly: true,
    aliases: ['jsonfile'],
    permLevel: 4
};


exports.help = {
    name: "json",
    description: "Json dosyalarını gösterir.",
    usage: "json"
};
