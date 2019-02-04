const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const eco = require("discord-economy");
const xp = require("./xp.json")
const ddiff = require('return-deep-diff');
const YouTube = require('simple-youtube-api');
const yt = require('ytdl-core');
const cd = 5;
const cooldown = new Set();
const youtube = new YouTube(ayarlar.api);
require('./util/eventLoader')(client);


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./codes/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yükleyecem`);
  files.forEach(f => {
    let props = require(`./codes/${f}`);
    console.log(`Yüklediğim zımbırtı => ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./codes/${command}`)];
      let cmd = require(`./codes/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on("message", msg => {
	const uyarıembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(":crown: " + msg.author + " Bir sen akıllı değilsin, reklam yapmayı bırak !:crown:")


const dmembed = new Discord.RichEmbed()
	.setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription("Kişiyi kickleyebilirsin.")
	.addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
	if(msg.member.hasPermission('BAN_MEMBERS')){
	return;
	} else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send({uyarıembed})
	 msg.guild.owner.send({dmembed}).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
	  };
    })

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
   await msg.react('🇦');
    msg.react('🇸');
    }
  });
  client.on("message", async msg => {
    if (msg.content.toLowerCase() === `<@${client.user.id}>`) {
      return msg.channel.send({
        embed: {
          title: "Prefixim `?`",
          color: 0xf4b942
        }
      })
      }
    });


client.on('messageDelete', messageDelete => {
  let kanal = messageDelete.guild.channels.find('name', 'mod-log');
  if(!kanal) return;
  if(messageDelete.author.bot) return;
  const embed = new Discord.RichEmbed()
  .setAuthor(messageDelete.author.tag, messageDelete.author.avatarURL)
  .addField("Mesajın silindiği kanal", messageDelete.channel)
  .addField("Mesaj Silindi!", `${messageDelete}`)
  .setColor("ff0000")
  .setTimestamp()
  return messageDelete.guild.channels.get(kanal.id).send({embed});
});


client.on('channelCreate', channel => {
  let kanal = channel.guild.channels.find('name', 'mod-log');
  if(!kanal) return;
  const embed = new Discord.RichEmbed()
  .addField("Kanal Oluşturuldu!", `${channel}`)
  .setColor('GREEN')
  .setTimestamp()
  return channel.guild.channels.get(kanal.id).send({embed});
});


client.on('roleDelete', role => {
  let kanal = role.guild.channels.find('name', 'mod-log');
  if(!kanal);
  const embed = new Discord.RichEmbed()
  .addField("Rol Silindi!", `${role.name}`)
  .setColor("ff0000")
  .setTimestamp()
  return role.guild.channels.get(kanal.id).send({embed});
});

client.on('channelDelete', channel =>{
  let kanal = channel.guild.channels.find('name', 'mod-log');
  if(!kanal) return;
  const embed = new Discord.RichEmbed()
  .addField("Kanal Silindi!", `${channel.name}`)
  .setColor("ff0000")
  .setTimestamp()
  return channel.guild.channels.get(kanal.id).send({embed});
});

client.on('emojiCreate', emoji => {
  let kanal = emoji.guild.channels.find('name', 'mod-log');
  if(!kanal);
  const embed = new Discord.RichEmbed()
  .addField("Emoji Oluşturuldu!", `${emoji}`)
  .setColor('GREEN')
  .setTimestamp()
  return emoji.guild.channels.get(kanal.id).send({embed});
})

client.on('emojiDelete', emoji => {
  let kanal = emoji.guild.channels.find('name', 'mod-log');
  if(!kanal);
  const embed = new Discord.RichEmbed()
  .addField("Emoji Silindi!", `${emoji.name}`)
  .setColor("ff0000")
  .setTimestamp()
  return emoji.guild.channels.get(kanal.id).send({embed});
})


client.on("message", message => { 
    let kanal = message.guild.channels.find('name', 'küfür-aç');
    if(!kanal) return;
    var etiket = ['amk', 'aq', 'mq', 'oç', 'piç', 'sik', 'sikik', 'mk', 'a.m.k', 'a.q', 'o.ç', 'm.q', 'p.i.ç', 'o.ç', 'amık'];
    if (message.author.bot) return;
    if (etiket.some(word => message.content.toLowerCase() === `${word}`)) {
        message.delete().then(msg => {
          message.guild.channels.get(kanal.id).send("*"+message.author.tag+"*   küfür ediyor.\nKullanıcının ID'si: **"+message.author.id+"**\nKullanıcının mesajı: `"+message.author.lastMessage+"`");
        })
        message.reply("Küfür etme !").then(r => r.delete(5000));
}
if (etiket.some(word => message.content.includes(word))) {
  message.delete().then(msg => {
    message.guild.channels.get(kanal.id).send("*"+message.author.tag+"*   küfür ediyor.\nKullanıcının ID'si: **"+message.author.id+"**\nKullanıcının mesajı: `"+message.author.lastMessage+"`");
  })
  message.reply("Küfür etme !").then(r => r.delete(3000));
}

});

 client.on('message', message => {
    let xpAdd = Math.floor(Math.random() * 7) + 8;
  
    if(!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    if(message.author.bot) return;
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp = curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp) {
      xp[message.author.id].level = curlvl + 1;
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle("Level atladın !")
      .setColor('RANDOM')
      .addField("Yeni Levelin", curlvl + 1)
      message.channel.send({embed}).then(msg => {msg.delete(10000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err);
    });
  });

  client.on('messageUpdate', (oldMessage, newMessage) => {
    let kanal = oldMessage.guild.channels.find('name', 'mod-log');
    if(!kanal) return;
    if(oldMessage.author.bot) return;
    const embed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .addField("Mesajn düzenlendiği kanal", oldMessage.channel)
    .setTitle("Mesaj Yenilendi!")
    .addField("Eski Mesaj", `${oldMessage}`)
    .addField("Yeni Mesaj", `${newMessage}`)
    .setColor("ff0000")
    .setTimestamp()
    return oldMessage.guild.channels.get(kanal.id).send({embed});
  });

client.on('guildMemberAdd', member => {
  let kanal = member.guild.channels.find('name', 'mod-log');
  if(!kanal) return;
  const embed = new Discord.RichEmbed()
  .addField("Kullanıcı Katıldı!", member.user.tag)
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setTimestamp()
  return member.guild.channels.get(kanal.id).send({embed});
});

client.on('guildMemberRemove', member =>{
  let kanal = member.guild.channels.find('name', 'mod-log');
  if(!kanal) return;
  const embed = new Discord.RichEmbed()
  .addField("Kullanıcı Ayrıldı! ", member.user.tag)
  .setThumbnail(member.user.avatarURL)
  .setColor("ff0000")
  .setTimestamp()
  return member.guild.channels.get(kanal.id).send({embed});
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

const settings = {
  prefix: '?',
  admin:["403921311321292803"]
}

client.on('message', async message => {
 
  //bu kod ise prefixinizdes sonraki mesajı okuyarak hangi komutu kullandığınızı anlıyor
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
 
  //bu ise komutlarınızdaki argümanları ayırıp komutu özel kullanmanızı sağlıyor
  var args = message.content.split(' ').slice(1);
 
  //Mesaj prefix ile başlamazsa işlem iptal
  //Mesajı bot yazıyosa işlem iptal
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;
 
  if (command === 'cüzdan') {
 
    var output = await eco.FetchBalance(message.author.id)
    message.channel.send(`Hey ${message.author.tag}! Cüzdanında ${output.balance}TL var.`);
  }
 
  if (command === 'günlükpara') {
 
    var output = await eco.Daily(message.author.id)
    //output.updated bize üyenin günlük parasını alıp almadığını söyler
 
    if (output.updated) {
 
      var profile = await eco.AddToBalance(message.author.id, 100)
      message.reply(`Günlük 100TL'ni aldın! Şuan cüzdanında ${profile.newbalance}TL var.`);
 
    } else {
      message.channel.send(`Üzgünüm, zaten günlük paranı aldın!\n Ama üzülme, ${output.timetowait} sonra tekrar alabilirsin!`)
    }
 
  }

 
  if (command === 'liderliktablosu') {

 
    //Eğer birini etiketlerseniz kullanıcının databasedekiş sıralamasını gösterir
    if (message.mentions.users.first()) {
 
      var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      })
      message.channel.send(`${message.mentions.users.first().tag}, liderlik tablosunda ${output} sırada!`);   
 
    } else {
 
      eco.Leaderboard({
        limit: 3, //Only takes top 3 ( Totally Optional )
        filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
      }).then(async users => { //make sure it is async
 
        if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Databasedeki 1. üyeyi bulur
        if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Databasedeki 2. üyeyi bulur
        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Databasedeki 3. üyeyi bulur
 
        message.channel.send(`Liderlik tablom:
 
1 - ${firstplace && firstplace.tag || 'Şimdilik boş'} : ${users[0] && users[0].balance || 'Para yok'}
2 - ${secondplace && secondplace.tag || 'Şimdilik boş'} : ${users[1] && users[1].balance || 'Para yok'}
3 - ${thirdplace && thirdplace.tag || 'Şimdilik boş'} : ${users[2] && users[2].balance || 'Para yok'}`)
 
      })
 
    }
  }
 
  if (command === 'zar') {
 
    var roll = args[0] //1 ile 6 arasında bir sayı olmalı
    var amount = args[1] //oynayacağınız miktar
 
    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.reply('Lütfen 1-6 arası bir sayı belirtin! Doğru kullanım: **-zar <1-6> <para miktarı>**')
    if (!amount) return message.reply('Lütfen oynayacağınız miktarı belirtin! Doğru kullanım: **-zar <1-6> <para miktarı>**')
 
    var output = eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('Belirttiğiniz miktardan daha az paran var. Maalesef sizinle oynayamam.')
 
    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)


    
    if (gamble.output === "lost") {
	message.reply(`Zar ${gamble.dice} atıldı. Yani kaybettin! Artık cüzdanında ${gamble.newbalance}TL var`)
	} else if (gamble.output === "won"){
	message.reply(`Zar ${gamble.dice} atıldı. Yani kazandın! Artık cüzdanında ${gamble.newbalance}TL var`)
	}
    
    //message.reply(`Zar ${gamble.dice} atıldı. Yani ${gamble.output}! Artık cüzdanında ${gamble.newbalance}TL var`)
 
  }
 

 
  if (command === 'çalış') { //Bu komut için 2 örnek yaptım ikiside çalışıyor
 
    var output = await eco.Work(message.author.id)
    //50% şanla bir şey kazanmama ihtimaliniz var. 1 ile 100 arasında para kazanırsınız. 
    if (output.earned == 0) return message.reply('Hmm, işini iyi yapamadığın için para kazanamadın.')
    message.channel.send(`${message.author.username}
 \` ${output.job} \` olarak çalıştın ve :money_with_wings: ${output.earned}TL kazandın!
Artık cüzdanında :money_with_wings: ${output.balance}TL var`)
 

  }
 
});

let queue = {};

const commands = {
	'play': (msg) => {
    if(!msg.author.id === '403921311321292803') return;
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage("?add ile müzik eklemelisin.");
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Zaten Çalınan var');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Sıra boş.').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Çalınan: **${song.title}** talep eden: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : ayarlar.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(ayarlar.prefix + 'pause')) {
					msg.channel.sendMessage('**Durduruldu.**').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(ayarlar.prefix + 'resume')){
					msg.channel.sendMessage('**Devam ediyor.**').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(ayarlar.prefix + 'skip')){
					msg.channel.sendMessage('**Geçildi.**').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(ayarlar.prefix + 'time')){
					msg.channel.sendMessage(`Süre: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('Hata: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Bir kanala katıl.');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'leave': (msg) => {
					const voiceChannel = msg.member.voiceChannel;

			voiceChannel.leave()
		
	},
	'add': async (msg) => {
		const args = msg.content.split(' ');
		const searchString = args.slice(1).join(' ');
		const url2 = args[1].replace(/<.+>/g, '1');
		
		try {
			var video = await youtube.getVideo(url2)
		} catch (error) {
			try {
				var videos = await youtube.searchVideos(searchString, 1)
				var video = await youtube.getVideoByID(videos[0].id)
			} catch (err) {
				console.log(err)
				message.channel.send('Bir hata oluştu: ' + err)
			};
		};
		
		var url = `https://www.youtube.com/watch?v=${video.id}`
		
		if (url == '' || url === undefined) return msg.channel.sendMessage(`Bir YouTube linki eklemek için ${ayarlar.prefix}add <url> yazınız.`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Geçersiz YouTube Bağlantısı: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`sıraya **${info.title}** eklendi`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Sıraya ilk önce bazı şarkıları ekle : ${ayarlar.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Talep eden: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Müzik Kuyruğu:**__ Şu anda **${tosend.length}** şarkı sırada ${(tosend.length > 15 ? '*[Sadece 15 tanesi gösteriliyor]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
  }
};
client.on('message', msg => {
	if (!msg.content.startsWith(ayarlar.prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(ayarlar.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(ayarlar.prefix.length).split(' ')[0]](msg);
});


client.login(ayarlar.token);
