const Discord = require ('discord.js')

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
        .setTitle(` **Chaos Bot Yardım Menüsüne Hoşgeldiniz** `)
        .addField('Gif Komutları', '.gif \n .gif-woman \n.random-pp \n.gif-man \n.random-emoji', true)
        .setFooter(`Chaos`)
    return  message.channel.send(embed);
  
        };




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-g'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım-g',
  description: '!!davet-sistemi Menüsü',
  usage: 'yardım-g'
};