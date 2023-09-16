module.exports = (message) => {  
    console.log('Sticker: ', message.sticker);
    return message.sticker ? true : false
};