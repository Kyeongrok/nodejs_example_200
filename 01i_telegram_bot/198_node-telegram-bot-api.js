const Bot = require('node-telegram-bot-api');

const bot = new Bot('467248902:AAEOrWmNop0oLAlTMf-0DSAj1F6HO-wm8jY', { polling: true });

const onChatMessage = (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'oh, hello', {
    disable_notification: true,
  }).then(() => {
    // reply sent!
  });
};

bot.on('message', (msg) => {
  console.log(msg);
  if (msg.text) {
    return onChatMessage(msg);
  }
});

