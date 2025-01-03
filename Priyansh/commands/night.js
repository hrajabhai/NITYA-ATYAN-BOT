const fs = require("fs");
module.exports.config = {
        name: "night",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "night",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Good night")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("Gud night")==0 || event.body.indexOf("Gud nini")==0) {
                var msg = {
                                body: "🌸=𝐆𝐎𝐎𝐃__𝐍𝐈𝐆𝐇𝐓___😘 𝐒𝐎𝐍𝐄 𝐒𝐄 𝐏𝐀𝐇𝐋𝐄 𝐌𝐄𝐑𝐀 𝐍𝐀𝐀𝐌 𝐋𝐄 𝐋𝐀𝐍𝐀 𝐁𝐇𝐎𝐎𝐓 𝐍𝐀𝐇𝐈 𝐀𝐀𝐄𝐆𝐀_____ 😂:))",
                                attachment: fs.createReadStream(__dirname + `/noprefix/20240808_085027.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }