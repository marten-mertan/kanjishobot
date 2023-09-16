const sendMessage = require("../../src/functions/sendMessage");
const sendSticker = require("../../src/functions/sendSticker");
const isSticker = require("../../src/functions/isSticker");

exports.handler = async (event) => {
  console.log('Chat object: ', JSON.parse(event.body));

  const { message } = JSON.parse(event.body);

  if (!message || !message.chat || !message.chat.id) {
    return { statusCode: 500 };
  }

  if (isSticker(message)) {
    await sendSticker(message.chat.id);
  } else {
    await sendMessage(message.chat.id, 'Сообщение получено!');
  }

  return { statusCode: 200 };
};