module.exports = (client)=>{
    //const adminId ='675415572703346693'
    //const idServeur = '675374925527252993'
    //const prefix = '!'
    const {SERVERID,ADMINID,PREFIX} =require('./../config.js');


client.on("message", function(message) {
        if(message.content.startsWith(PREFIX+'rem')){
        if(message.member.roles.cache.get(ADMINID)) { // Si l'utilisateur est bien admin

        let memberRem
        let roleRem
        
        if(typeof message.mentions.members.first() !== "undefined") {
            memberRem = client.guilds.cache.get(SERVERID).members.cache.get(message.mentions.members.first().id)
            message.delete()
            let check2 = client.emojis.cache.find(emoji => emoji.name === "check2");
             let utilisateur = message.mentions.members.first()
             let rolea = message.mentions.roles.first()
             message.channel
             .send(`${check2}J\ai bien retiré le role ${rolea} de ${utilisateur} `)
             .then(m => {
                setTimeout(function() {
                  m.delete()
                }, 5000)
              })
            if(typeof message.mentions.roles.first() !== "undefined") {
                roleRem = message.mentions.roles.first()
                
                memberRem.roles.remove(roleRem).catch(console.error)
            }
        }
    }
}
});

}
