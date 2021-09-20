require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const qwertyArray = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ї',
  a: 'ф',
  s: 'і',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'є',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
};

const test = Object.entries(qwertyArray);

bot.on('text', (ctx) => {
  const userMessage = ctx.message.text;
  const newUserMessage = userMessage.split('');

  const messID = ctx.message.message_id;
  const chatID = ctx.message.chat.id;

  const testBuff = [];

  newUserMessage.forEach((element) => {
    if (element === ' ') {
      testBuff.push(' ');
    }
    test.forEach((key) => {
      if (element.toLowerCase() === key[0]) {
        testBuff.push(key[1]);
      }
    });
  });

  // ctx.telegram.deleteMessage(chatID, messID);
  ctx.telegram.sendMessage(chatID, testBuff.join(''));
});

bot.launch();
