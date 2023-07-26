const Telegraf = require('telegraf');

const bot = new Telegraf('6194858291:AAHslHIA-XDtArLfpQ5EJwGGl5f2UEROJJ8');

// const axios = require('axios');
const fs = require('fs');

const mysql = require('mysql');

const helpMessage =  ' welcome to  ሃዋሳ Reformed Baptist bot😂😂 \nhere is the menu for our bot \n /start \n /help \n /book_list \n /reformed_doctrines \n /london_baptist_confession \n /book_list_here \n /reformed_doctrines_detail';
     

bot.start(ctx => {
    ctx.reply(helpMessage);
});

bot.help(ctx => {
    ctx.reply('this bot is made by hawassa reformed felloship. it used to give information about what hawassa reformed baptist belive and give some information about the books found in the library.');
})

bot.command('book_list', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/books.txt"  
        })
})

bot.command('reformed_doctrines_detail', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/ref.txt"  
        })
})



bot.command('reformed_doctrines', (ctx) => {
  
        ctx.reply('https://founders.org/articles/what-is-a-reformed-baptist/');
    
 })

bot.command('london_baptist_confession', (ctx) => {
  
    
        ctx.reply('https://founders.org/library-book/1689-confession/');
           

 })

 bot.command('book_list_here', (ctx) => {
    let rawdata = fs.readFileSync("./booklist.json", "utf8");
    let data = JSON.parse(rawdata);
    // console.log(data);
    let message = "በቤተመጽሐፍታችን ውስጥ የሚገኙ የመጽሐፍት ዝርዝር: \n \n \n ";
    data.forEach(item => {
        message += `- ${item}\n`
    });
    ctx.reply(message);
})



bot.launch();
