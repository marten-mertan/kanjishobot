module.exports = async (chat_id, text) => {  
    try {
        const res = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                chat_id: chat_id,
                text: text
            },
        })
        const data = await res.json();
        console.log('Data: ', data);
        
    } catch (e) {
        console.error('Error: ' + e);
    }
};