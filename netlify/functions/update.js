import {sendMessage} from '../../src/functions/sendMessage';
import {sendSticker} from '../../src/functions/sendSticker';
import {isSticker} from '../../src/functions/isSticker';
import {createUser, getUser, updateUser, deleteUser} from '../../src/functions/users';


export const handler = async (event) => {
  const { message } = JSON.parse(event.body);

  if (!message || !message.chat || !message.chat.id) {
    return { statusCode: 500 };
  }

  if (isSticker(message)) {
    const user = await getUser(message.from.username);
    if (!user) {
      await createUser(message.from.username, message.from.first_name, message.from.last_name);
    }
    await sendSticker(message.chat.id);
  } else {
    await sendMessage(message.chat.id, 'Сообщение получено!');
  }

  return { statusCode: 200 };
}
