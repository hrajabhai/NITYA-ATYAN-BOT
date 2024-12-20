const fs = require("fs");
module.exports.config = {
        name: "khana-khao",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AMAN",
        description: "THIS BOT IS MR ARYAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("Dinner") ||
     react.includes("dinner") || react.includes("DINNER") || react.includes("KHANA") ||
react.includes("Khana") ||
react.includes("khana")) {
                var msg = {
                                body: `=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MAN💐 \n_______________________\n\n𝐋𝐨 𝐁𝐚𝐁𝐲\n_______________________`,attachment: fs.createReadStream(__dirname + `/noprefix/a4c9df2382cde45d1bf57e2dc863f882.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
