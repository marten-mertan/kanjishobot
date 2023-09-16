const sendMessage = require("../../src/functions/sendMessage");
const sendSticker = require("../../src/functions/sendSticker");

exports.handler = async (event) => {
  console.log('Chat object: ', JSON.parse(event.body));

  const { message } = JSON.parse(event.body);

  await sendSticker(message.chat.id);

  return { statusCode: 200 };
};