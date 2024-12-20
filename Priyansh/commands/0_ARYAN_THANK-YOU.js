const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "thank-you",
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
                "https://i.imgur.com/tHEXvmB.gif",
                "https://i.imgur.com/1JHNURO.gif",
                "https://i.imgur.com/33o7MID.gif",
                "https://i.imgur.com/MLO0Dsu.gif",
                "https://i.imgur.com/p7CU3PB.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀M𝐀𝐍💐 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("Wlm") || 
                                event.body.toLowerCase().startsWith("wlm") || 
                                event.body.toLowerCase().startsWith("welcome") || 
                                event.body.toLowerCase().startsWith("Welcome") || 
                                event.body.toLowerCase().startsWith("WELCOME")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'thank-you-Gif-Images.gif');

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
