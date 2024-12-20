const fs = require("fs");
module.exports.config = {
        name: "chicken",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AMAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "chicken",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("chicken")==0 || event.body.indexOf("Chicken")==0 || event.body.indexOf("CHICKEN")==0 || event.body.indexOf("CHIKAN")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐AMAN💐\n_______________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐂𝐡𝐢𝐜𝐇𝐞𝐍\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/62306739ed186731b1f646029335e853.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐔", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
