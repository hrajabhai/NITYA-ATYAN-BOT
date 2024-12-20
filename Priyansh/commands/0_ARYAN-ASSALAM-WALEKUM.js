const fs = require("fs");
module.exports.config = {
        name: "BYE",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AMAN", 
        description: "THIS BOT IS AMAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("assalamualaikum") ||
     react.includes("JAY SERI RAM") || react.includes("JAYE SERI RAM") || react.includes("Aslam") ||
react.includes("JAY SERI RAM") ||
react.includes("JAY SERI RAM")) {
                var msg = {
                                body: `──────────────────\n\nRAM RAM  😇\n──────────────────\n𝐎𝐰𝐧𝐞𝐫 ➻  💐AMAN💐─`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
