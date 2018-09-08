const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
var fs = require('fs');

var helplist = fs.readFileSync('./help.txt', 'utf8');
var prefix = config.prefix;
var rando_sarkı = config.rando_sarkı;

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomSarkı() {
	return rando_sarkı[Math.floor(Math.random() * rando_sarkı.length)];
};
 il.add(randomSarkı, []);
   il.run();  //Random Sarkı

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === 'selom'){
    const embed = new Discord.RichEmbed()
      .setTitle('Komutlar')
      .setColor(0xFF0000)
      .setDescription(helplist)
      .setImage(url='https://s1.eksiup.com/85696be3d46.png')
    message.channel.send("" + message.author.toString() + " Selon yaşarken ölenler için var!", embed);
   }
 });   //help

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sen kafayı sıyırmışsın'){
      message.reply(':`)')
    }
}) //kafa

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sen zavallı bi adamsın'){
      message.reply(':`)')
    }
}) //sen zavallı bi adamsın

bot.on('message', message => {
    if(message.content.toLowerCase() === 'yıkıksın'){
      message.reply(':`)')
    }
}) //yıkıksın

bot.on('message', message => {
    if(message.content.toLowerCase() === 'bitmişsin'){
      message.reply(':`)')
    }
}) //bitmişsin

bot.on('message', message => {
    if(message.content.toLowerCase() === 'seni kurtarmanın yolu yok, sen bitmişsin'){
      message.reply('acının tatlı tebessümü :)')
    }
}) //seni kurtarmanın yolu yok, sen bitmişsin

bot.on('message', message => {
    if(message.content.toLowerCase() === 'acılar...'){
      message.reply({
    file: "https://i.ytimg.com/vi/uTAzzfWUJHE/maxresdefault.jpg"
});
    }
}) //acılar

bot.on('message', message => {
    if(message.content.toLowerCase() === 'bu isyanın kimin için selo?'){
      message.reply('isyanım yaşarkennnn ölenler içinn :(')
    }
}) //bu isyanın kimin için selo?

bot.on('message', message => {
    if(message.content.toLowerCase() === 'bu feryad kimin için selom?'){
      message.reply('feryadım yaşarkennnn ölenler içinn :(')
    }
}) //bu feryad kimin için selom?

bot.on('message', message => {
  if (message.content === config.prefix) return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "oku" || tag == ''){

      message.reply(randomSarkı());

     };

    }
  }); //şarkı oku

bot.on('ready', () => {
     bot.user.setActivity('Acılarla');
     console.log('Bot Hazır');
});    // bot hazır ve bot oyunu

bot.login('NDg1MzU3OTkwMjg3OTAwNjgy.DnT_lg.k_2-3Yh0c7EimL_Cl0mokWdwoN8')
