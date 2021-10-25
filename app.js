module.exports = (bot, qwertyArray, mysqlClient, connectMongoose) => {
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

      mysqlClient(connectMongoose.mongoose, ctx.message.from);
    }
  });

  bot.launch();
};
