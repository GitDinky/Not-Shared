const discord = require("discord.js");
//Coded By SLote & Snzy
module.exports = {
  name: "ping",
  category: "📢info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("BLUE")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
}