const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "miss-you",
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
                "https://i.imgur.com/OKrKL2C.gif",
                "https://i.imgur.com/zxBWsmb.gif",
                "https://i.imgur.com/QmVz2iO.gif",
                "https://i.imgur.com/pxegLjj.gif",
                "https://i.imgur.com/OW736Wt.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MAN💐 \n──────────────────\n\n𝐌𝐄𝐑 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐\n──────────────────\n\n𝐌𝐄𝐑 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n𝐌𝐄𝐑 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n𝐌𝐄𝐑 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐\n──────────────────\n\n𝐌𝐄𝐑 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("MISS YOU") || 
                                event.body.toLowerCase().startsWith("miss you") || 
                                event.body.toLowerCase().startsWith("Miss you") || 
                                event.body.toLowerCase().startsWith("Miss me") || 
                                event.body.toLowerCase().startsWith("miss me")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'miss-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🥺", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
