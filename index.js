const fetch = require('node-fetch');

// Your Telegram bot token
const TOKEN = '7488762311:AAGuRko7hFIdg62UZehofzu2bo3xatKFlnA';
// Telegram API endpoint for sending a message
const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// Function to send a message with a custom User-Agent
async function sendMessage(chatId, text) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'MyCustomUserAgent/1.0', // Custom User-Agent
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
        }),
    });

    const data = await response.json();
    console.log(data);
}

// Replace with your actual chat ID and message
sendMessage('6720286026', 'Hello from your bot!');
