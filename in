<!<!DOCTYPE HTML>
<html>
    <body>
        

        <script>
const token = '7488762311:AAGuRko7hFIdg62UZehofzu2bo3xatKFlnA';
let inputConfig = input.config();
let message = `${inputConfig.first_name}, документ готов по заказу №${inputConfig.order}.<br>Вы можете скачать его <a href = "${inputConfig.doc_link}"по ссылке</a>.<br>Ждем Вас снова.<br>Ваш, RealEstate DocuService`;
console.log(`${message}`);
const options = {
  method: 'POST',
  Host: 'api.telegram.org:443',
  headers: {
    Accept: 'application/json',
    'User-Agent': 'Airtable',
    'Content-Type': 'application/json',    
  },
  body: JSON.stringify({
    text: `${message}`,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    disable_notification: true,
    reply_to_message_id: 0,
    chat_id: `${inputConfig.chat_id}`
 })
};
fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${inputConfig.6720286026}`)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
        </script>
    </body>
</html>
