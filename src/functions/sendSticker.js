module.exports = async (chatId, sticker = null) => {  
    try {
        const stickerList = [
            'CAACAgQAAxkBAAMeZQYy2FYDMlj8-H8oq01MYHcsDS0AAjEAA845CA3LdQk6GshD1zAE',
            'CAACAgQAAxkBAAMmZQY72ZT3-Q2_9guTmZBonOtEYoAAAjUAA845CA0g9YUvlV_YYzAE',
            'CAACAgQAAxkBAAMoZQY8DiAN2hqPnizNrvNcb0swkWcAAlcAA845CA0n9f3m_XpJhjAE',
            'CAACAgQAAxkBAAMqZQY8T3DpYgymS6ciy735EQylvfIAAmsAA845CA1ZZupjdpJL0DAE',
        ];
        const dataSticker = sticker || stickerList[Math.floor(Math.random() * stickerList.length)];

        const res = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendSticker`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                sticker: dataSticker
            }),
        })
        const data = await res.json();
        console.log('Data: ', data);
        
    } catch (e) {
        console.error('Error: ' + e);
    }
};