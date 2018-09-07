const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sen kafayı sıyırmışsın'){
      message.reply(':`)')
    }
}) //kafa 


bot.on('ready', () => {
     bot.user.setActivity('Acılarla');
     console.log('Bot Hazır');
});    // bot hazır ve bot oyunu

bot.login(process.env.BOT_TOKEN)
