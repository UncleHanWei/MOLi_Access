require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.on('message', (msg) => {
  const channel_ID = process.env.CHANNEL_ID;
  let message = '測試連接成功';
  bot.sendMessage(channel_ID, message);
});

module.exports = {bot};