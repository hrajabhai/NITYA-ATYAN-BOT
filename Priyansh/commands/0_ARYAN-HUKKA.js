const fs = require("fs");
module.exports.config = {
        name: "hukka",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AMAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "hukka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("hukka")==0 || event.body.indexOf("Hukka")==0 || event.body.indexOf("HUKKA")==0 || event.body.indexOf("Hukkaa ")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀MAN💐\n_______________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐇𝐮𝐊𝐊𝐚\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/SheSha_Snap_💀_in_2024_|_Cigratte_snapchat,_Snap_streak_ideas_easy,_Night_club_aesthetic(360P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
