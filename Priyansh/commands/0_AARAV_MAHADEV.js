const fs = require("fs");
module.exports.config = {
	name: "poja",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "arif babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mahadev")==0 || event.body.indexOf("mahadev")==0 || event.body.indexOf("महादेव")==0 || event.body.indexOf("Shiv")==0) {
		var msg = {
				body: "❤️JAI MAHAKAL♥️HAR HAR MAHADEV❤️ ",
				attachment: fs.createReadStream(__dirname + `/AADI/4.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("♥️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
