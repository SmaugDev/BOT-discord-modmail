module.exports = (client) => {
    const prefix = '!'
    client.on('message',message=>{
        if(message.content===prefix+"ping"){
            let debut = Date.now();
            message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now()-debut}ms`));
        }
    })
    
   
    
}