const Bot = require('node-telegram-bot-api');

const bot = new Bot('281761192:AAE7h61HIio8eviXggpssYHrJJ58nHWT32A', { polling: true });

const onChatMessage = (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'oh, hello', {
    disable_notification: true,
  }).then(() => {
    // reply sent!
  });
}

bot.on('message', (msg) => {
  console.log(msg);
  if (msg.text) {
    return onChatMessage(msg);
  }
});

