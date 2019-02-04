const Discord = require('discord.js');
const ms = require('ms');


exports.run = async(client, message, args) => {
    
  if (!message.guild) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`tempmute` komutunu özel mesajlarda kullanamazsın.')
    return message.author.send({embed}); }
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları Susturma** yetkisine sahip olmalısın.`);
    let guild = message.guild
    let reason = args.slice(2).join(' ') ? args.slice(2).join(' ') : "Belirsiz";
    client.muteReason = reason;
    client.muteAuth = message.author;
    let user = message.guild.member(message.mentions.users.first())
    let user1 = message.mentions.users.first()
    let modlog = guild.channels.find('name', 'ceza-takip-listesi');
    if (!modlog) return message.reply('`ceza-takip-listesi` kanalını bulamıyorum.');
    if (message.mentions.users.size < 1) return message.reply('Mutelenecek kişiyi etiketlemelisin.').catch(console.error);
    message.guild.channels.filter(s => s.type === 'text').forEach(s => {
    s.overwritePermissions(user, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  })
  })

  let sa = message.guild.roles.find('name', 'Susturulmuş');
  if(!sa) return message.guild.createRole({
    name: "Susturulmuş",
    color: "ffffff",
    permissions: []
  })
  
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Kişiyi ne kadar süre ile susturmak istersin?");
  await(user.addRole(sa.id));
  setTimeout(function(){
    message.guild.channels.filter(s => s.type === 'text').forEach(s => {
        s.overwritePermissions(user, {
        SEND_MESSAGES: null,
        ADD_REACTIONS: null
      })
      })
    user.removeRole(sa.id);
  }, ms(mutetime));
  message.react('✅');

  let validUnlocks = ['release', 'unlock'];

  if (validUnlocks.includes(mutetime)) {
    message.channel.overwritePermissions(user, {
      SEND_MESSAGES: null
    }).then(() => {
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(user, {
      SEND_MESSAGES: false
    }).then(() => {
     message.react('✅').then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          })
          delete client.lockit[message.channel.id];
        }, ms(mutetime));

      }).catch(error => {
        console.log(error);
      });
    });
  }
 
  if (message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.reply("Yetkilileri susturamam.").then(async msg => {
    await message.clearReactions();
    message.react('❌');
    message.channel.overwritePermissions(user, {
      SEND_MESSAGES: null,
      ADD_REACTIONS: null
    })
    user.removeRole(sa.id)
  });
    const embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setTimestamp()
      .addField('Eylem:', 'Süreli Susturma')
      .addField('Kullanıcı:', `${user1.username}#${user1.discriminator} (${user1.id})`)
      .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
      .addField("Kişinin susturulma süresi", `${ms(ms(mutetime), { long:true })}`)
      .addField('Sebep', reason)
    return guild.channels.get(modlog.id).send({embed});

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sürelisustur'],
  permLevel: 0
};

exports.help = {
  name: 'tempmute',
  description: 'Kişiyi süreli olarak susturur.',
  usage: 'tempmute'
};
