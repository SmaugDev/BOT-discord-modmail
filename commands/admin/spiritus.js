
module.exports = (client)=>{
            const Discord =require('discord.js');
            // const user = message.author
            let fleche = client.emojis.cache.find(emoji => emoji.name === "fleche");
            let g4 = client.emojis.cache.find(emoji => emoji.name === "g4");
            const {PREFIX} =require('./../../config.js');

            const adminId ='675415572703346693'


            client.on("message", function(message) {
                if(!message.author.bot){       
                    if(message.content===PREFIX+"spiritus"){
                        if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#8bc34a')
                        .setTitle('[Commandes(administartion)]')
                        .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
                        .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription(`**__Voici mes commandes :__**\r\n\r\n${g4} **${PREFIX}commandes**\r\nLa liste des commandes du BOT\r\n\r\n ${g4}**${PREFIX}m @User#0000 message **\r\nPour envoyer un message privé à une personne \r\n\r\n **!m #chanel message**\r\n Pour poster un message au nom du BOT dans un salon du serveur \r\n\r\n${g4}**${PREFIX}r message** \r\n Pour répondre à un message depuis le salon où se trouve la demande. \r\n\r\n${g4}**${PREFIX}close** \r\nPour  supprimer le salon que le BOT avait créé et clore la demande.\r\n\r\n${g4}**${PREFIX}add @User#0000 @role ** \r\nPour ajouter un role a une personne\r\n\r\n${g4}**${PREFIX}rem @User#0000 @role ** \r\nPour supprimer le role d\'une personne.`)
                        //.setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/1585873893041.png');
                        message.channel.send(exampleEmbed)
                        }
                    }
                    if(message.content===PREFIX+"raid"){
                        if(message.member.roles.cache.get(adminId)) {
                           let salon = message.channel
                            message.channels.cache.get('700417951928549456').send('La commande raid a été utiliser ! '+salon)
                        }
                    }
                }
            })
    
}