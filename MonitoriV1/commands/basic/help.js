const discord = require('discord.js');
//Coded By SLote & Snzy
module.exports = {
  name: "help",
  run: async (client, message, args ) => {
      
      let embed = new discord.MessageEmbed()
      .setAuthor("Commands")
      .addField("> 🎗️Basic", '`help`,`uptime`,`ping`')
      .addField("> 🖥️Monitor",'`Monitor`,`Remove`,`Stats`,`info`')
			.setFooter('Monitoring Bot')
			.setColor("GREEN");
			message.channel.send(embed)
    }
  };
