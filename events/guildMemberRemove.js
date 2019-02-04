module.exports = member => {
   let guild = member.guild;
   member.channel.send('niye gittin? ;(');
   guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
