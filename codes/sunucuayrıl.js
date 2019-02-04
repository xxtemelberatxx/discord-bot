const Discord = require('discord.js');


exports.run = async(client, message, args) => {
  let id = args[0];
  if(!id) return message.channel.send("Sunucudan ayrılmamı istediğin idyi girmelisin")
  if(isNaN(id)) return message.channel.send("ID girmelisin.")
  client.guilds.get(id).leave();
  message.channel.send("Sunucudan ayrıldım.")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['serverayrıl'],
  permLevel: 4
};

exports.help = {
  name: 'sunucuayrıl',
  description: 'Sunucudan ayrılır.',
  usage: 'sunucuayrıl'
};
