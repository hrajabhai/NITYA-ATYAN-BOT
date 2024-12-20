const fs = require("fs");
module.exports.config = {
	name: "mahadev",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "AMAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Har har mahadev")==0 || event.body.indexOf("har har mahadev")==0 || event.body.indexOf("HAR HAR MAHADEV")==0 || event.body.indexOf("Har Har mahakal")==0) {
		var msg = {
				body: "__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/ᴴ_ᴬ_ᴿ__ᴴ_ᴬ_ᴿ__ᴹ_ᴬ_ᴴ_ᴬ_ᴰ_ᴱ_ⱽ__🙏🏻_ᴶ_ᴬ_ᴵ__ˢ_ᴴ_ᴵ_ⱽ__ˢ_ᴴ_ᴬ_ᴺ_ᴷ_ᴬ_ᴿ__🥰❣️(360P).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
