require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(url);

const { Telegraf } = require('telegraf');
const runMongoConnection = require('./config/db');

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
  ',': ',',
  '.': 'ю',
  '?': '?',
  '&': '?',
  '!': '!',
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};

const test = Object.entries(qwertyArray);
const ukrWorlds = Object.values(qwertyArray);

bot.on('text', (ctx) => {
  const userMessage = ctx.message.text;
  const newUserMessage = userMessage.split('');

  const messID = ctx.message.message_id;
  const chatID = ctx.message.chat.id;

  let num = 0;
  if (userMessage.includes(ukrWorlds.forEach((x) => x))) {
    console.log('It is ukr text');
  } else {
    const testBuff = [];

    newUserMessage.forEach((element) => {
      if (element === ' ') {
        testBuff.push(' ');
      }
      test.forEach((key) => {
        if (element.toLowerCase() === key[0]) {
          if (element === ',' && num > 2) {
            key[1] = 'б';
            testBuff.push(key[1]);
          }
          testBuff.push(key[1]);
          num += 1;
        }
      });
    });
    // ctx.telegram.sendMessage(chatID, testBuff.join(''));
    console.log(ctx.message.from);
    runMongoConnection(MongoClient, url, mongoClient, ctx.message.from);
  }
});

bot.launch();
