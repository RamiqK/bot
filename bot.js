const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
var fs = require('fs');
bot.setMaxListeners(0);

var helplist = fs.readFileSync('./help.txt', 'utf8');
var prefix = config.prefix;
var hava = config.hava;
var tokatla = config.tokatla;
var rando_sarkı = config.rando_sarkı;
var rando_hava = config.rando_hava;
var rando_japon = config.rando_japon;

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomSarkı() {
	return rando_sarkı[Math.floor(Math.random() * rando_sarkı.length)];
};
 il.add(randomSarkı, []);
   il.run();  //Random Sarkı

function randomHava() {
	return rando_hava[Math.floor(Math.random() * rando_hava.length)];
};
 il.add(randomHava, []);
	 il.run();  //Randım Hava

function randomJapon() {
	return rando_japon[Math.floor(Math.random() * rando_japon.length)];
};
 il.add(randomJapon, []);
	 il.run();  //Random Japon

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === 'selom'){
    const embed = new Discord.RichEmbed()
      .setTitle('Komutlar')
      .setColor(0xFF0000)
      .setDescription(helplist)
      .setImage(url='https://s1.eksiup.com/85696be3d46.png')
    message.author.sendMessage("" + message.author.toString() + " Selon yaşarken ölenler için var!", embed);
   }
 });   //help

bot.on('message', message => {
    if(message.content.toLowerCase() === 'selo söyle bi söz'){
     message.reply('Kardeşler kalleş, kalleşler kardeş, abilerde kurabiye olmuş')
    }
}); //selo söyle bi söz

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sen kafayı sıyırmışsın'){
      message.reply(':`)')
    }
}); //kafa

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sen zavallı bi adamsın'){
      message.reply(':`)')
    }
}); //sen zavallı bi adamsın

bot.on('message', message => {
    if(message.content.toLowerCase() === 'yıkıksın'){
      message.reply(':`)')
    }
}); //yıkıksın

bot.on('message', message => {
    if(message.content.toLowerCase() === 'bitmişsin'){
      message.reply(':`)')
    }
}); //bitmişsin

bot.on('message', message => {
    if(message.content.toLowerCase() === 'seni kurtarmanın yolu yok, sen bitmişsin'){
      message.reply('acının tatlı tebessümü :)')
    }
}); //seni kurtarmanın yolu yok, sen bitmişsin

bot.on('message', message => {
    if(message.content.toLowerCase() === 'acılar...'){
      message.reply({
    file: "https://i.ytimg.com/vi/uTAzzfWUJHE/maxresdefault.jpg"
});
    }
}); //acılar

bot.on('message', message => {
    if(message.content.toLowerCase() === 'bu isyanın kimin için selo?'){
      message.reply('isyanım yaşarkennnn ölenler içinn :(')
    }
}); //bu isyanın kimin için selo?

bot.on('message', message => {
    if(message.content.toLowerCase() === 'bu feryad kimin için selom?'){
      message.reply('feryadım yaşarkennnn ölenler içinn :(')
    }
}); //bu feryad kimin için selom?

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sen nesin selom'){
      message.reply("ben ne deliyim ne de SeRsEri",{
    file: "https://image.ibb.co/dnOkC9/Screenshot_2018_09_07_20_17_15_441_com_google_android_youtube.png"
})
    }
}); //sen nesin selom

bot.on('message', message => {
    if(message.content.toLowerCase() === 'gamze'){
      message.reply('yapma kızım, gözün öyle kalacak')
    }
}); //gamze

bot.on('message', message => {
    if(message.content.toLowerCase() === 'döner mi?'){
      message.reply('yok ACII lahmacun')
    }
}); //döner mi?

bot.on('message', message => {
    if(message.content.toLowerCase() === 'youtube türkiye'){
      message.reply('patır putur')
    }
}); //youtube türkiye

bot.on('message', message => {
    if(message.content.toLowerCase() === 'selam'){
      message.reply('sosis')
    }
}); //selam

bot.on('message', message => {
    if(message.content.toLowerCase() === 'khontkar'){
      message.reply('mary jane mary jane mary jane')
    }
}); //khontkar

bot.on('message', message => {
    if(message.content.toLowerCase() === 'sosis ve salam'){
      message.reply('polisten gaçın')
    }
}); //sosis ve salam

bot.on('message', message => {
    if(message.content.toLowerCase() === 'layn layn'){
      message.reply('delii evimizi başımıza yıktın delii')
    }
}); //layn layn

bot.on('message', message => {
    if(message.content.toLowerCase() === 'menderes'){
      message.reply('bir kere ölsemde, bin kere gelirim geri!')
    }
}); //menderes

bot.on('message', message => {
    if(message.content.toLowerCase() === 'yaşın kaç?'){
      message.reply('acım kadar')
    }
}); //yaşın kaç?

bot.on('message', message => {
    if(message.content.toLowerCase() === 'nasılsın?'){
      message.reply('acıııı')
    }
}); //nasılsın?

bot.on('message', message => {
    if(message.content.toLowerCase() === 'allahım inşallah selom ölür amin'){
      message.reply('aminnn')
    }
}); //allahım inşallah selom ölür amin

bot.on('message', message => {
    if(message.content.toLowerCase() === 'tosun çiftlik bank'){
      message.reply('feryadım yaşayan aldatılmışlar içinnn...')
    }
}); //tosun çiftlik bank

bot.on('message', message => {
    if(message.content.toLowerCase() === 'aman aman nereye geldik be selom'){
      message.reply('acıya geldik :(')
    }
}); //aman aman nereye geldik be selom

bot.on('message', message => {
	 if (message.content === config.tokatla) return;
   if (message.author.bot) return;
   if (message.content.startsWith(config.tokatla)) {
   let tag = message.content.slice(config.tokatla.length).trim().split(/ +/g)
     if(tag = message.mentions ){
     const embed = new Discord.RichEmbed()
       .setColor(0xCA0209)
       .setImage(url='https://cdn.discordapp.com/attachments/487620294039830528/488424957584343062/giphy-1.gif')
     message.channel.send("Acıı bir tokat senden ona...  " + message.mentions.members.first() + "", embed);
    }
   }
 });   //tokatla

bot.on('message', message => {
  if(message.content.toLowerCase() === 'ping') {
    message.channel.send(''+ `${message.createdTimestamp - Date.now()}` + ' acı kadar gecikmedesiniz');
  }
}); //ping

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

bot.on('message', message => {
  if (message.content === config.hava) return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.hava)) {
  let tag = message.content.slice(config.hava.length).trim().split(/ +/g)
    if(tag == "durumu" || tag == ''){

      message.reply(randomHava());

   };
  }
}); //hava durumu

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === 'japon') {

      message.reply(randomJapon());

   };
}); //japon

bot.on('ready', () => {
     bot.user.setActivity('Acılarla');
     console.log('Bot Hazır');
});    // bot hazır ve bot oyunu

bot.login(process.env.BOT_TOKEN)
