const Discord = require('discord.js');

	const kopekler = [
	"https://media.giphy.com/media/zUdFehNEYEMFi/giphy.gif",
	"https://img-s2.onedio.com/id-50d1e89ff63b9a5e380004b3/rev-0/w-500/s-8e42d90089c63f96cf75b3344ec97ca91f1e97f3.gif",
	"https://s3.amazonaws.com/barkpost-assets/50+GIFs/17.gif",
	"http://geikoo.s3.amazonaws.com/139236512252fdce42b9e04.gif",
	"https://www.askideas.com/media/39/Pug-Dog-Trying-To-Taking-Food-Funny-Gif-Image.gif",
	"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2012/12/15/17/anigif_enhanced-buzz-2659-1355609720-5.gif",
	"https://78.media.tumblr.com/259b5e29666bfe36ae9e021034fb4a98/tumblr_oococp6a951s8c9jeo1_400.gif",
	"http://68.media.tumblr.com/9bfd5ddf800b22e0275cd24d3d4f7f28/tumblr_o2cgvleQk61u4nbmvo1_500.gif",
	"https://media1.tenor.com/images/79e9dde2823aece9814afe3747712fef/tenor.gif?itemid=8925390",
	"http://www.doseoffunny.com/wp-content/uploads/2014/04/wrqFM5m.gif",
	"http://gif-finder.com/wp-content/uploads/2016/06/Dog-Digging.gif",
	"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2012/12/15/17/anigif_enhanced-buzz-3732-1355608887-2.gif",
	"https://image.yenisafak.com/resim/upload/2016/03/31/12/53/2edfa70dgiphy3.gif",
	"http://www.cutecatgifs.com/wp-content/uploads/2014/09/funny-gif-puppy-cat-sitting.gif"
];


exports.run = async(client, message, args) => {
	var kopek = kopekler[Math.floor(Math.random() * kopekler.length)];
	const embed = new Discord.RichEmbed()
	.setDescription("**"+message.author.username+"**, İşte bir komik köpek !")
	.setImage(kopek)
	.setTimestamp()
	.setColor('RANDOM')
	message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpek', 'kopek', 'dog'],
  permLevel: 0
};

exports.help = {
  name: 'komikköpek',
  description: 'Komik bir köpek gönderir.',
  usage: 'komikköpek'
};
