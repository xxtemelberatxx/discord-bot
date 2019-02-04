const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
	var soru = args.join(' ');

	if(!soru) return message.reply('Bir işlem belirtin.**Doğru Kullanım** : ?hesapla <işlem>')
	else { let cevap;
		try {
			cevap = math.eval(soru)			
		} catch(error) {
			message.channel.send('Hatalı İşlem')
		}
		
		const embed = new Discord.RichEmbed()
		.addField('Soru', soru)
		.addField('Cevap', cevap)
		.setColor('00d0ff')
		message.channel.send({embed})
	}


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belirtliten işlemi yapar',
  usage: 'hesapla <işlem>'
};
