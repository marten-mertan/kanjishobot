export const sendMessage = async (chat_id, text) => {
    try {
        const res = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: text
            }),
        })
        const data = await res.json();
        console.log('Data: ', data);
        
    } catch (e) {
        console.error('Error: ' + e);
    }
}
