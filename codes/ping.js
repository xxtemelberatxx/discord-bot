const Discord = require('discord.js');



exports.run = async (client, message) => {
	let dönme = await message.channel.send({
		embed: {
			color: 0xf4b942,
			description: `Pingim ölçülüyor...`,
		}
	});
	
	let bitiş = (Math.random() * (5 * 1));
	setTimeout(() => {
		dönme.edit({
			embed: {
				color: 0xf4b942,
				description: "Pingim **" + client.ping + "** ms!"
			}
		});
	}, bitiş * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
