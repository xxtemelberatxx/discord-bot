 exports.run = (client, msg, args) => {
   let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: 0xf4b942,
 title: ('Kimin bilgisayarına sızmak istersin?')
}});
   const Discord = require('discord.js')
        const embed = new Discord.RichEmbed()
        .setDescription("**"+msg.author.username+"**, **"+member.user.username+"** kullanıcısının bilgisayarına sızdı !")
        .setImage("https://blog.webkid.io/content/images/old/hello-world/hacker.gif")
		.setColor('RANDOM')
        return msg.channel.send({embed});
    }
    
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sız', 'hack', 'hackle', 'pcsız'],
  permLevel: 0
 };
 
 exports.help = {
 name: 'hacker',
 description: 'Bahsetdiğiniz kişinin bilgisayarına sızarsınız.',
 usage: 'hacker'
 }