const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "jaanbot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "all reply",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["बाबू आज तो लव यू बोलना ही पड़ेगा 🙂🤟","आप ऐसा न बोलो मुझे शर्म आती है। 🙈♥️👌","मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟","यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈","बुलाती है मगर जाने का नही 🙂✋","बस मैं ही सिंगल हूं अहा बाकी सब मिंगल है। 🥺✋","बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈","अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈","क्यूं बुलाया हमे...?😾🔪","Billo bagge billeya da ki kregi🤨" , "what is you mobile number📲 , kru kya dial number📞" , "Abe Padhai Likhai kro, bot bot krne se ghar nahi chalta" , "Mene suna hai mumbai delhi diya kudiya raat bhar nahi sondiya🙄" , "Abee tujhe ek pal bhi shanti nahi😏, baar bar mujhe tang krte ho" , "Long drive pe chaloge😜" , "Aur batao tum zehar kyu nahi pi lete" , "itna cigrette na piyo ki uske dibbe pe tumhara hi photo ajaye" , "mujhe bar bar tang mt kiya kro" , "Tum zinda ho 😯😯", "Muh me se supari   nikaal ke baat kr" , "Tum single ho kya 😜" , "gaanja kam fooka kar" , "Tujhe dikhai nahi deta me ApnY JaNu Ke SaTh BusY hu" , "jindagi me do baate  hmesha yaad rkhna ,1: kisi ko poori baat nahi batana chahiye, aur dusri baat.." , "Itni  badi hogyi ho, biaah hogya tumhara" , "e chhotu 😜Chay lao meri maalkin ishika ke liye" , "Meri maalkin ishika ☕ bolti hai chay ko mana krne se paap lagta hai" , "Haaye mera boss Arun abhi tk Single hai, sharam kro ladkiyo😾" , "Chup saatvi fail" , "Dil doge ya number🤓" , "Apko jo  bolna hai katghare me aake kahiye" , "haaye aaj to tum bahut bahut😍😍 mahnus lag rhe ho" , "Aagye muh utha ke firse🙄","आप मुझे बार-बार बाबू मत बोला करो मेरे नाम आरिफ़ बाबू है। 😒👈","कहो न प्यार हैं 🙈","पहले मेरे बॉस को चाय लेकर आओ जल्दी से 😐👈","जाओ तुम जहर खा के सो जाओ 🫡✌️","यार तुम एक प्यार वाली शायरी सुना दो ना 🤐👈","यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟","बताओ आपको किया पसंद है मौत का फरिश्ता या मेरा रिश्ता 😏👈","जा पहले मुंह धो के आ 🙂🤟","मन कर रहा है तुम्हे छत से गिरा दूं 😕👈","बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈","तुम पागल हो 😐👈","मैं गरीबों से बात नही करता ☹️🤟","बोल दे कोई नहीं देख रहा 🙄✋"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "koi ha") || (event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi hai kiya") || (event.body.toLowerCase() == "Koi hai kya")) {
     return api.sendMessage("_मैं हूं ना डार्लिंग_🤸🤟", threadID);
   };

    if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "call") || (event.body.toLowerCase() == "call aaja") || (event.body.toLowerCase() == "Call aao sab")) {
     return api.sendMessage("मैं कैसे कॉल आऊं मैं तो बोट हूं 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "kiya kar rahe ho") || (event.body.toLowerCase() == "kkrh")) {
    return api.sendMessage("लूंगी डांस कर रहा हूं करना है मेरे साथ 🤨👈", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("कोई इसको लात मार के जगाओ ग्रुप में ही सो गया 🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("उफ्फ कितनी गर्मी है 🥵🥵👈", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha g") || (event.body.toLowerCase() == "oo acha ji")) {
     return api.sendMessage("हांजी बाबू 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "tamina") || (event.body.toLowerCase() == "kamine")) {
     return api.sendMessage("तू डबल कमीना 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("🥳🥳🥳🥳🥳", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("आर ये सब मत भेजा करो मेरा सर दर्द होता है। 🤕🤕👈", threadID);
   };

  if ((event.body.toLowerCase() == "Ludo khele") || (event.body.toLowerCase() == "LUDO  link do") || (event.body.toLowerCase() == "Koi ludo khelega kya") || (event.body.toLowerCase() == "ludo link")) {
     return api.sendMessage("मुझे लूडो खेलना नही आता 🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kiya hua")) {
     return api.sendMessage("कुछ नही बाबू 😒👈", threadID);
   };

   mess = "{name}"

  if (event.body.indexOf("Babu") == 0 || (event.body.indexOf("babu") == 0)) {
    var msg = {
      body: `${rand} \n\n`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }