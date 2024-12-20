module.exports.config = {
  name: "sad dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AMAN",
  description: "sad dp photos",
  commandCategory: "Random-IMG",
  usages: "girls sad dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/Xe8BIfQ.jpeg","https://i.imgur.com/ibzvAr5.jpeg","https://i.imgur.com/WsrkV7b.jpeg","","https://i.imgur.com/mVdwovV.jpeg","https://i.imgur.com/liBA2bF.jpeg","https://i.imgur.com/iCj0Dho.jpeg","https://i.imgur.com/fm62LBH.jpeg","https://i.imgur.com/RUM0qv0.jpeg","https://i.imgur.com/VDD9BKf.jpeg","https://i.imgur.com/vq9VJtA.jpeg","https://i.imgur.com/sQZmRUS.jpeg","https://i.imgur.com/hv5eunV.jpeg","https://i.imgur.com/k7PQCMG.jpeg","https://i.imgur.com/8Yui5Gh.jpeg","https://i.imgur.com/wO8CVBt.jpeg","https://i.imgur.com/N6xKYdm.jpeg","https://i.imgur.com/y0Z7gn7.jpeg","https://i.imgur.com/Q5k9aUZ.jpeg","https://i.imgur.com/lBVUhAG.jpeg","https://i.imgur.com/wW5ARms.jpeg","https://i.imgur.com/1aDRBIx.jpeg","https://i.imgur.com/JqCNCEf.jpeg","https://i.imgur.com/i0YXOdv.jpeg","https://i.imgur.com/eG6U3T0.jpeg","https://i.imgur.com/jscyRP0.jpeg","https://i.imgur.com/CDt0S1K.jpeg","https://i.imgur.com/QTUvBqK.jpeg","https://i.imgur.com/ZMUl1gf.jpeg","https://i.imgur.com/hk8bHCr.jpeg","https://i.imgur.com/hk8bHCr.jpeg","https://i.imgur.com/0kHsn0H.jpeg","https://i.imgur.com/jY2bqWW.jpeg","https://i.imgur.com/Ojlw0MS.jpeg","https://i.imgur.com/iXl2RAJ.jpeg","https://i.imgur.com/0ClETXP.jpeg","https://i.imgur.com/6EsEXeL.jpeg","https://i.imgur.com/TGhMj3l.jpeg","https://i.imgur.com/UPjBlYY.jpeg","https://i.imgur.com/xwvh8L7.jpeg","https://i.imgur.com/Mvlbo1v.jpeg","https://i.imgur.com/3PqkGL8.jpeg","https://i.imgur.com/Hkc5Vw0.jpeg","https://i.imgur.com/kof7yK7.jpeg","https://i.imgur.com/g4Llk4M.jpeg","https://i.imgur.com/X7rIunu.jpeg","https://i.imgur.com/JwpcTB9.jpeg","https://i.imgur.com/LYtlIgJ.jpeg","https://i.imgur.com/Yt1aXrb.jpeg","https://i.imgur.com/1tUgl7w.jpeg","https://i.imgur.com/NjWbt2d.jpeg","https://i.imgur.com/WELS4eg.jpeg","https://i.imgur.com/yDRSJur.jpeg","https://i.imgur.com/BTfKIzI.jpeg"
     ];
     var callback = () => api.sendMessage({body:`☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫➻ ╔╬⓼★⓼╃───────➣™🄼🅁🄱🄾🅃🄾🅆🄽🄴🅁AMAN𝄠━─━Ⓔ╰✾✾®️╀✿✿╀─━ↈⓇ⧐⧐💐`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
