module.exports.config = {
  name: "sayeri",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AMAN",
  description: "THIS BOT IS MADE BY AMAN",
  commandCategory: "AMAN-STATUS",
  usages: "SAYERI",
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
"https://i.imgur.com/L2N4gnh.jpeg","https://i.imgur.com/Jj4x2rA.jpeg","https://i.imgur.com/Is7HJDE.jpeg","https://i.imgur.com/oJUw7Gh.jpeg","https://i.imgur.com/3t5bKFL.jpeg","https://i.imgur.com/tlTObOV.jpeg","https://i.imgur.com/rkVzppE.jpeg","https://i.imgur.com/iazM2aN.jpeg","https://i.imgur.com/niBKTQJ.jpeg","https://i.imgur.com/aSz3SnJ.jpeg","https://i.imgur.com/QcuQ1gN.jpeg","https://i.imgur.com/l5RAB2M.jpeg","https://i.imgur.com/KNoNVSQ.jpeg","https://i.imgur.com/uiFmAwl.jpeg","https://i.imgur.com/e9BAJri.jpeg","https://i.imgur.com/lzf6qSB.jpeg","https://i.imgur.com/0X2u7q3.jpeg","https://i.imgur.com/wOkGVPi.jpeg","https://i.imgur.com/INHCGdv.jpeg","https://i.imgur.com/3SV8uWi.jpeg","https://i.imgur.com/JIalSDN.jpeg","https://i.imgur.com/suSnQQp.jpeg","https://i.imgur.com/hCW1AS1.jpeg","https://i.imgur.com/eaWcT2F.jpeg","https://i.imgur.com/qfZ4oGY.jpeg","https://i.imgur.com/MJQBAj2.jpeg","https://i.imgur.com/lVGr67a.jpeg","https://i.imgur.com/8tE3jBD.jpeg","https://i.imgur.com/W7Ny2aq.jpeg","https://i.imgur.com/pweWNvD.jpeg","https://i.imgur.com/x9oVd1N.jpeg","https://i.imgur.com/ZqURfat.jpeg","https://i.imgur.com/AHhibm4.jpeg","https://i.imgur.com/t0P4bmR.jpeg"
     ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
