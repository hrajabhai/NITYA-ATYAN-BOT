const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "chiku bot2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "CHIKU BABU",
  description: "chiku bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Aa gye tharki ruko m aapko Dp deta hu Jo Dp chahiye wo likho ☞.girldp/.cpldp/.frnddp/.boydp☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biryani 🥗 deta hu likho ☞Biryani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Mungfali 🥜 deta hu likho ☞Mungfali☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Milk Cake deta hu likho ☞Milk cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Laddu 🍪 deta hu likho ☞Laddu☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Kurkure 🫓 deta hu likho ☞Kurkure☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cold Drink deta hu likho ☞Cold drink☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chips 🥔 deta hu likho ☞Chips☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Watter 🍶 deta hu likho ☞Pani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Tofee 🍬 deta hu likho ☞Tofee☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Barfi 🧀 deta hu likho ☞Barfi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Burgur deta hu likho ☞Burger☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cigarette 🚬 peelata hu likho ☞Cigarette☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Hukka 🏺 peelata hu likho ☞Hukka☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Ice Cream 🍨 deta hu likho ☞Ice Cream☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chowmin 🍜 deta hu likho ☞Chowmin☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chiku ko bulata hu likho ☞Chiku☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pihu Rajput ko bulata hu likho ☞Pihu☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cake 🎂 deta hu likho ☞Cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Jalebi 🥨 deta hu likho ☞Jalebi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi French fries 🍟 deta hu likho ☞French☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Juice 🧃 peelata hu likho ☞Juice☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Daru 🍻 peelata hu likho ☞Daru☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chai ☕ peelata hu likho ☞Chai☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Makroni 🥘 deta hu likho ☞Makroni☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Golgappe 😋deta hu likho ☞Golgappe☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pasta 🥐 deta hu likho ☞Pasta☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Samosa 🔶 deta hu likho ☞Samosa☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pizza 🍕 deta hu likho ☞Pizza☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Momos 🥟 deta hu likho ☞Momos☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "teri ma ki chut") || (event.body.toLowerCase() == "bot teri ma ki chut") || (event.body.toLowerCase() == "tmkc") || (event.body.toLowerCase() == "tmkc bot")) {
     return api.sendMessage("TERI MA KE PASS LAND HAI KYA MADHARCHOD", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("@Aarav Singh Rajputana") == 0 || (event.body.indexOf("@Bot Hu Yal") == 0)) {
    var msg = {
      body: `🍒💚🍁 ${name} 💚🍒🍁\n\n 👉${rand} \n\n                       💙ཫ༄𒁍≛⃝𝐌𝐫.AARAV☘️🎀`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }