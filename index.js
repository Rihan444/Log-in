const fetch = require('node-fetch');

// Define your bot token
const token = '7488762311:AAGuRko7hFIdg62UZehofzu2bo3xatKFlnA';
const chatId = '6720286026';
const message = 'Hello from my bot!';

// Make a request to Telegram API
fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'MyCustomUserAgent/1.0'
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message
  })
})
.then(response => response.json())
.then(data => {
  console.log('Message sent:', data);
})
.catch(error => {
  console.error('Error sending message:', error);
});
