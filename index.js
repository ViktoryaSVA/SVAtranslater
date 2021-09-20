const { Telegraf } = require('telegraf')
const bot = new Telegraf('2025056057:AAHEG4Qzyv9QJrYd6s7tGcH1hBHsq5obPYM')

let qwertyArray = {'q':'й','w':'ц','e':'у','r':'к','t':'е','y':'н','u':'г','i':'ш','o':'щ','p':'з','[':'х'
                    ,']':'ї','a':'ф','s':'і','d':'в','f':'а','g':'п','h':'р','j':'о','k':'л'
                    ,'l':'д',';':'ж',"'":"є",'z':'я','x':'ч','c':'с','v':'м','b':'и','n':'т','m':'ь',',':'б','.':'ю'};

let test = Object.entries(qwertyArray);

bot.on('text', (ctx) => {
    let userMessage = ctx.message.text;
    let newUserMessage = userMessage.split('');
    let testBuff = [];
    newUserMessage.forEach(element => {
        if (element == ' '){
            testBuff.push(' ')
        }
        test.forEach(key => {
            if (element.toLowerCase() == key[0]){

                testBuff.push(key[1]);
            }

        })

    })
    ctx.telegram.sendMessage(ctx.message.chat.id, testBuff.join(''));

})
bot.launch() // запуск бота


