const fs = require("fs");
module.exports.config = {
        name: "pizza",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AMAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "pizza",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("pizza")==0 || event.body.indexOf("Pizza")==0 || event.body.indexOf("PIZZA")==0 || event.body.indexOf("PIZZAA")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐AMAN💐\n_______________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐏𝐈𝐙𝐙𝐀 \n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pinterest-Abhijeet-Agnihotri-pizza.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
