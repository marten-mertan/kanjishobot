const sendMessage = require("../../app/functions/sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat.id, "Сообщение принято!");
  return { statusCode: 200 };
};