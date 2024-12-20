const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "kiss-you",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "ARYAN",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/ydSH5c6.gif",
                "https://i.imgur.com/gWONMKL.gif",
                "https://i.imgur.com/8NdZubK.gif",
                "https://i.imgur.com/vFiSyAs.gif",
                "https://i.imgur.com/N74hjd0.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐\n──────────────────\n\n🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻ 💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("KISS YOU") || 
                                event.body.toLowerCase().startsWith("kiss you") || 
                                event.body.toLowerCase().startsWith("Kiss you") || 
                                event.body.toLowerCase().startsWith("Kiss me") || 
                                event.body.toLowerCase().startsWith("kiss me")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'kiss-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
