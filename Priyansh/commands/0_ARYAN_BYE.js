const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "bye-bye",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "AMAN",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/Zbaeazz.gif",
                "https://i.imgur.com/nZnDpGI.gif",
                "https://i.imgur.com/7LhOFWz.gif",
                "https://i.imgur.com/wuynUCU.gif",
                "https://i.imgur.com/R0pxe8Q.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐AMAN💐 \n──────────────────\n\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MA𝐍💐 \n──────────────────\n\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MA𝐍💐 \n──────────────────\n\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MA𝐍💐 \n──────────────────\n\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MA𝐍💐 \n──────────────────\n\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("BYE") || 
                                event.body.toLowerCase().startsWith("bye") || 
                                event.body.toLowerCase().startsWith("Bye") || 
                                event.body.toLowerCase().startsWith("allah Hafiz") || 
                                event.body.toLowerCase().startsWith("Allah Hafiz")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'bye-bye-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🤞", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
