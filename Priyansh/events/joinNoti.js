module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("JAY SERII RAM💖💖 Everyone🥀🥀", event.threadID, () => api.sendMessage({body:`🌺- ꯭𓆩〭ͥ〬 ⃪ᷟ꯬꯭⃗ ̶ͬ 𓆩★ᎯᎯᏒᎯᏤ𓆪 輪🦋🌺 CONNECTED«

💐𝐁𝐎𝐓 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑. 🍒💚 ≛⃝𝐌𝐫.AARAV☘️🎀💐
<------------------------------>  
💐𝐁𝐎𝐓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 𝐒𝐔𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘💐 !!! 

💐𝐀𝐏𝐊𝐄 𝐆𝐑𝐎𝐔𝐏 𝐊𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐀AARAV 𝐍𝐄 𝐀𝐏𝐏𝐑𝐎𝐕𝐄 𝐊𝐑 𝐃𝐈𝐘𝐀 𝐇💐!!!
<------------------------------>

💐𝐌𝐄𝐑𝐄 𝐂𝐎𝐌𝐌À𝐍𝐃 𝐃𝐄𝐊𝐇𝐍𝐄 𝐊 𝐋𝐈𝐘𝐄 À𝐏 𝐇𝐄𝐋𝐏 𝐊𝐀 𝐔𝐒𝐄 𝐊𝐀𝐑 𝐒𝐊𝐓𝐄 𝐇𝐀𝐈💐 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
💐𝐊𝐈𝐒𝐈 𝐁𝐇𝐈  𝐢𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐊 𝐋𝐈𝐘𝐄 𝐀𝐏 𝐌𝐄4𝐄 𝐁𝐎𝐒𝐒 𝐀M𝐀𝐍 𝐒𝐄 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐊𝐀𝐑 𝐒𝐊𝐓𝐄 𝐇💐

💐𝐎𝐖𝐍𝐄𝐑💐: 𝐌𝐑.𝐀ARAV

♻️💐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃💐:: 

https://www.facebook.com/100085548302154

💐𝐘𝐎𝐔 𝐓𝐔𝐁𝐄 𝐒𝐈𝐓𝐄💐 : N/A

💐𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌💐: https://www.instagram.com/aarav.singh1/profilecard/?igsh=MTAxNXcwcGNxMWJiaQ==

💐𝐁𝐀𝐁𝐘 𝐌𝐔𝐉𝐄 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐀ARAV 𝐍𝐄 𝐁𝐀𝐍𝐀𝐘𝐀 𝐇𝐀𝐈💐

💐𝐄𝐌𝐀𝐈𝐋💐: cutekamina554@gmail.com

💐𝐑𝐄𝐀𝐋𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏💐:  SINGLE `, attachment: fs.createReadStream(__dirname + "/cache/received_1972044686648184.mp4")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "💐𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐀ARAV 𝐁𝐎𝐓 𝐁𝐀𝐁𝐘💐  😇● ========================= ●\n● ======= 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ======= ●\n● ========================= ●\n\n● ==== 🆆 🅴🅻🅻 🅲🅾🅼 🅴 ==== ●\n\n● ========= 𝐍𝐄𝐖 ========= ●\n\n● ==== 🇲‌ 🇪‌ 🇲‌ 🇧‌ 🇪‌ 🇷‌ ==== ●\n\n● ========================= ● [   {name} ]\n● ========================= ●\n● ====== 𝐌𝐘 𝐆𝐑𝐎𝐔𝐏 ===== ●\n\n{threadName}\n\n● = 🥀 𝐇𝐀𝐏𝐏𝐘 𝐄𝐍𝐉𝐎𝐘 🥀 = ●\n\n● == 🥀 𝐌𝐀𝐉𝐄 𝐊𝐀𝐑𝐎 🥀  == ●\n● ========================= ● 𝐎𝐑 𝐓𝐔𝐌 𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐄  {soThanhVien} 𝐌𝐄𝐌𝐁𝐀𝐑 𝐇𝐎 𝐄𝐍𝐉𝐎𝐘 𝐊𝐀𝐑𝐎 𝐌𝐀𝐉𝐄 𝐋𝐎 [ . ] ● ========================= ●\n\n● ========================= ●\n● ======= 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 ====== ●\n\n☟  ========== ☟ ==========  ☟\n\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 💐🍒💚 ≛⃝𝐌𝐫.AARAV☘️🎀💐 🌹\n● ========================= ●" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }
