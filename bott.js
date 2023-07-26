const Telegraf = require('telegraf');

const bot = new Telegraf('6194858291:AAHslHIA-XDtArLfpQ5EJwGGl5f2UEROJJ8');

bot.command('menu', ctx => {
    bot.telegram.sendMessage(ctx.chat.id,  'welcome',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'አዋሳ Reformed ህብረት', callback_data: 'church'},
                    {text: ' ሁለተኛው የለንደን የእምነት መግለጫ', callback_data: 'confession'}
                ],
                [
                    {text: 'የመጽሐፍት ዝርዝር/List of Books', callback_data: 'Books'},
                    {text: 'What Reformed Belives', callback_data: 'baptist'}
                ],
                [
                    {text: 'የመጽሐፍት ዝርዝር ማውረጃ', callback_data: 'Books'},
                    {text: 'የታድሶ አስተምሮዎች/Reformed Doctrines ', callback_data: 'reformed'}
                ],
                [
                    {text: 'about this bot ', callback_data: 'bot'},
               
                ]
               
            ]
        }
    }
    
    )
})

bot.action('menu', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,  '  welcome to  ሃዋሳ Reformed Baptist bot😂😂 here is the menu for our bot',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'አዋሳ Reformed ህብረት', callback_data: 'church'},
                    {text: ' ሁለተኛው የለንደን የእምነት መግለጫ', callback_data: 'confession'}
                ],
                [
                    {text: 'የመጽሐፍት ዝርዝር/List of Books', callback_data: 'Books'},
                    {text: 'What Reformed Belives', callback_data: 'baptist'}
                ],
                [
                    {text: 'የመጽሐፍት ዝርዝር ማውረጃ', callback_data: 'Books'},
                    {text: 'የታድሶ አስተምሮዎች/Reformed Doctrines ', callback_data: 'reformed'}
                ],
                [
                    {text: 'about this bot ', callback_data: 'bot'},
               
                ],
                [
                    {text: 'Back to menu ', callback_data: 'menu'},
               
                ]
            ]
        }
    }
    
    )

})

bot.action('bot', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'ስለ ቦቱ/ መተግበሪያው: \n this bot is made by hawassa reformed baptist. it used to give information about what hawassa reformed baptist belive and give some information about the books found in the library.',
         {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'ስለ ቦቱ', callback_data: 'menu'}
                ],
                [
                    {text: 'Back to menu ', callback_data: 'menu'},
               
                ]
            ]
        }
    })
})

bot.action('reformed', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'የታድሶ አስተምሮ: \n Broadly speaking, Reformed theology includes any system of belief that traces its roots back to the Protestant Reformation of the 16th Century.\n  Of course, the Reformers themselves traced their doctrine to Scripture, as indicated by their credo of “sola scriptura,” so Reformed theology is not a “new” belief system but one that seeks to continue apostolic doctrine. \n Generally, Reformed theology holds to the authority of Scripture, the sovereignty of God, salvation by grace through Christ, and the necessity of evangelism. It is sometimes called Covenant theology because of its emphases on the covenant God made with Adam and the new covenant which came through Jesus Christ (Luke 22:20).\n Authority of Scripture. Reformed theology teaches that the Bible is the inspired and authoritative Word of God, sufficient in all matters of faith and practice.\n Sovereignty of God. Reformed theology teaches that God rules with absolute control over all creation. He has foreordained all events and is therefore never frustrated by circumstances. This does not limit the will of the creature, nor does it make God the author of sin.   \n Salvation by grace. Reformed theology teaches that God in His grace and mercy has chosen to redeem a people to Himself, delivering them from sin and death. The Reformed doctrine of salvation is commonly represented by the acrostic TULIP (also known as the five points of Calvinism):   \n T - total depravity. Man is completely helpless in his sinful state, is under the wrath of God, and can in no way please God. Total depravity also means that man will not naturally seek to know God, until God graciously prompts him to do so (Genesis 6:5; Jeremiah 17:9; Romans 3:10-18).\n  U - unconditional election. God, from eternity past, has chosen to save a great multitude of sinners, which no man can number (Romans 8:29-30; 9:11; Ephesians 1:4-6,11-12).    \n L - limited atonement. Also called a “particular redemption.” Christ took the judgment for the sin of the elect upon Himself and thereby paid for their lives with His death. In other words, He did not simply make salvation “possible,” He actually obtained it for those whom He had chosen (Matthew 1:21; John 10:11; 17:9; Acts 20:28; Romans 8:32; Ephesians 5:25).    \n I - irresistible grace. In his fallen state, man resists God’s love, but the grace of God working in his heart makes him desire what he had previously resisted. That is, God’s grace will not fail to accomplish its saving work in the elect (John 6:37,44; 10:16).    \n P - perseverance of the saints. God protects His saints from falling away; thus, salvation is eternal (John 10:27-29; Romans 8:29-30; Ephesians 1:3-14).\n The necessity of evangelism. Reformed theology teaches that Christians are in the world to make a difference, spiritually through evangelism and socially through holy living and humanitarianism.    \n Other distinctives of Reformed theology generally include the observance of two sacraments (baptism and communion), a cessationist view of the spiritual gifts (the gifts are no longer extended to the church), and a non-dispensational view of Scripture. Held in high esteem by Reformed churches are the writings of John Calvin, John Knox, Ulrich Zwingli, and Martin Luther. The Westminster Confession embodies the theology of the Reformed tradition. Modern churches in the Reformed tradition include Presbyterian, Congregationalist, and some Baptist.', 
        {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'የታድሶ አስተምሮዎች/Reformed Doctrines', callback_data: 'menu'}
                ],
                [
                    {text: 'Back to menu ', callback_data: 'menu'},
               
                ]
            ]
        }
    })
})




bot.action('Books', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'የመጽሐፍት ዝርዝር: \n 1	የነብዩ ሙሐመድ የሕይወት ታሪክ  በረውደቱል አንዋር	001	\n 2	Aselection of ADDRESSES and PREACHING by Mark Lemon	002	\n 3	ትንሣኤ ክርስቶስ  በቃልኪዳን ዘለዓለም 	003	    \n 4	አሪዮሳውያን ``የይሐዋ ምስክሮች`` አስተምሕሮ በቃለእግዚ አብሔር ሲመዘን ከዶ/ር ተስፋዬ ሮበሎ	004	    \n 5	GREEK ENGLISH NEW TESTAMENT  Nestle Aland	005	    \n 6	ስማዩ ዝምሲል በ ሮናልድ ደን ትርጉም ጳውሎስ ፈቃዱ	006	    \n 7	ትምሕርተ ተዋሕዶ  በአቶ አበበ ጋሻዬ 	007	   \n 8	THE PURSUIT OF HOLINESS  BY JERRY BRIDGES ትርጉም ስንታየሁ ዓለሙ 	008	    \n 9	በዮሐንስ ወንጌል ውስጥ ያለ የፀጋ አስተምህሮ ኣር . ብሩስ ስቲዋርድ ትርጉም በስላመ አብ አሰፋ 	009	    \n 10	The Believer’s secret of the master’s Indeweling by ANDREW MURRY 	010	\n 11	THE LORD’S COMING ISRAEL AND THE CHURCH 	011	    \n 12	መጽሐፍ ቅዱስና የትርጓሜ ስልቱ  ከምኒልክ አስፋው 	012	\n 13	What Christ Think of The church by JOHN STOTT An Exposition of Rev 1-3	013	  \n 14	የእግዚአብሔር ጥያቄ እና ሌሎች መጣጥፎች ምሕረቱ ጴ.ጉታ	014	  \n 15	የወንጌል ስርጭት ቁልፍ ዕቅድ በሮበርት  ካልመን	015	\n 16	ክርስቲያናዊ ስነምግባር  ርእሰ ጉዳዮችና ተግዳሮቶች  ከሚኒልክ አስፋው 	016	 \n 17	መጽሐፍ ቅዱሳዊ ቤተሰቦች 	017	\n 18	ወንጌል ለሙስሊሞች  በጌርሃድ ኔልስ 	018	\n 19	Contemporary options in Eschatology  A study of the millennium Milard J.Erickson	019	\n 20	How to READ the BIBlE for All its WORTH  by Gordon D.Fee and Douglas stuart	020	\n 21	እግዚአብሔርን ማወቅ በጀምስ ፓከር 	021	\n 22	የዕብራዊያን መልዕክት ትርጓሜ 	022	\n 23	ገጠር አደግ አናፂ ወይንስ መለኮት ? ( እውነተኛው ኢየሱስ ማነው ) ጆሽ ማክዱዌል 	023	 \n 24	ወቅታዊ ዘላለማዊ  በ ንጉሤ ቡልቻ 	024	  \n 25	የመጽሐፍ ቅዱስ ሥርዓተ ትምህርት ጥናት በዶ/ር በቻርልስ ሲ.ራይሪ	025	\n 26	ወንጌል ምንድነው  በግሬግ ጊልበርት 	026	\n 27	CHRIST AND HIS THREEFOLD OFFICE ( john flavel )	027	\n 28	አባይ ነባይ  መፍቀሬ ነቢያትና እንዴት ማከም ይቻላል ? በዶ/ር ተስፋዬ ሮበሎ	028	 \n 29	THE DAILY STUDY BIBLE the letter of John and Juda by William Barclay 	029	\n 30	ስልታዊ ነገረ መለኮት ቅጽ አንድ  በዌይን ግሩደም 	030	\n 31	ስልታዊ ነገረ መለኮት ቅጽ ሁለት ዌይን ግሩደም 	031	 \n 32	ሥነ አመክንዮ - የሙግት አደረጃጀት ፣ አገማገምና አስናዘር  ከዶ/ር  ተስፋዬ ሮበሌ	032	 \n 33	የአዲስኪዳን ቅኝት በሜሪል ሲ.ቴኒ 	033	\n 34	የመጽሐፍ ትርጓሜ ገላትያ ቅጽ አንድ 	034	\n 35	የክርስትና ትምህርቶች እና የእምነት መግለጫዎች 	035	\n 36	ትምህርተ መንፈስ ቅዱስ በቄስ ኮሊን ማንስል 	036	\n 37	ትምህርተ እግዚአብሔር በቄስ ኮሊን ማንስል	037	\n 38	በልሳኖአች መናገር 	038	\n 39	ትምህርተ ስላሴ በተስፋዬ ሮበሌ	039	\n 40	The Bondage of the will by Martin Luther 040',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'አሁን ላይ ያሉን መጽሐፍቶች እነዚህ ናቸው 😢 አዲስ መጽሐፍቶች ሲገቡ ወደዝርዝሩ ምንጨምር ይሆናል። God bless you 🙏', callback_data: 'menu'}
                ],
                [
                    {text: 'Back to menu ', callback_data: 'menu'},
               
                ]
            ]
        }
    })
})

bot.action('confession', (ctx) => {
    {
        bot.telegram.sendMessage(ctx.chat.id,  ' ሁለተኛው የለንደን የእምነት መግለጫ/ the second london baptist faith confession.',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'chapter one', callback_data: 'one'},
                        {text: ' chapter two', callback_data: 'two'}
                    ],
                    [
                        {text: 'chapter three', callback_data: 'three'},
                        {text: 'chapter four', callback_data: 'four'}
                    ],
                    [
                        {text: 'chapter five', callback_data: 'five'},
                        {text: 'chapter six ', callback_data: 'six'}
                    ],
                    [
                        {text: 'chapter seven ', callback_data: 'seven'},
                   
                    ],
                    [
                        {text: 'Back to menu ', callback_data: 'menu'},
                   
                    ]
                ]
            }
        }
        
        )
    }
})

bot.action('one', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter one.txt"  
        })
})

bot.action('two', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter two.txt"  
        })
})

bot.action('three', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter three.txt"  
        })
})

bot.action('four', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter four.txt"  
        })
})

bot.action('five', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter five.txt"  
        })
})
bot.action('six', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter six.txt"  
        })
})

bot.action('seven', (ctx) => {
    bot.telegram.sendDocument(ctx.chat.id,
        {
            source: "res/chapter seven.txt"  
        })
})

bot.launch();
