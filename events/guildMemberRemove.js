module.exports = (client, member)=>{
        const departChanel = '675374925527253002'
        user = member.user
       // member.guild.channels.cache.get(departChanel).send("**" + user.tag +"** vient de nous quitter. A bientôt l'ami ! :wave:");

            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#4284f3')
            .setTitle('Member left')
            .setAuthor('Module d\'evenement', 'https://french-gaming-family.fr/public/spiritusavatar.png')
            .setDescription("**" + user.tag +"** vient de nous quitter. A bientôt l'ami ! :wave:")
            .setImage(message.author.displayAvatarURL())
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/logoFGF.png');
            message.guild.channel.cache.get(departChanel).send(exampleEmbed)
        
}