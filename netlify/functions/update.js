const sendMessage = require("../../src/functions/sendMessage");

exports.handler = async (event) => {
  console.log('Chat object: ', JSON.parse(event.body));

  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat.id, "Сообщение принято!");
  
  return { statusCode: 200 };
};