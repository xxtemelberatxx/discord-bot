module.exports = member => {
    let username = member.user.username;
    member.channel.send('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
