const fs = require("fs");
module.exports.config = {
	name: "poooja",
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
	if (event.body.indexOf("Ram")==0 || event.body.indexOf("Jay")==0 || event.body.indexOf("Jai")==0 || event.body.indexOf("ram")==0 || event.body.indexOf("राम")==0) {
		var msg = {
				body: "JAI SHREE RAM ",
				attachment: fs.createReadStream(__dirname + `/AADI/3.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
