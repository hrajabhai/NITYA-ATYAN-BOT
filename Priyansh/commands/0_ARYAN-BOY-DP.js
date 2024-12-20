module.exports.config = {
  name: "boy sad dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AMAN",
  description: "boys sad dp",
  commandCategory: "Random-IMG",
  usages: "boy sad dp",
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
"https://i.imgur.com/QGvOiB5.jpeg","https://i.imgur.com/H4cYWY4.jpeg","https://i.imgur.com/aL2c9B7.jpeg","https://i.imgur.com/nxL74kG.jpeg","https://i.imgur.com/YZYyd7c.jpeg","https://i.imgur.com/SaAHt5G.jpeg","https://i.imgur.com/4nkBCa6.jpeg","https://i.imgur.com/Fkn4sC5.jpeg","https://i.imgur.com/b4u0afN.jpeg","https://i.imgur.com/tBnS466.jpeg","https://i.imgur.com/koOWPKh.jpeg","https://i.imgur.com/W7kB0Ln.jpeg","https://i.imgur.com/hlwrnuO.jpeg","https://i.imgur.com/r3JG3ca.jpeg","https://i.imgur.com/AsYZQvQ.jpeg","https://i.imgur.com/IWxPk85.jpeg","https://i.imgur.com/ZTckkwP.jpeg","https://i.imgur.com/7xpjjTy.jpeg","https://i.imgur.com/Gn85CLX.jpeg","https://i.imgur.com/XF3jVwF.jpeg","https://i.imgur.com/cyvvY2h.jpeg","https://i.imgur.com/mtfGRY4.jpeg","https://i.imgur.com/KqzaM5a.jpeg","https://i.imgur.com/EXByYmi.jpeg","https://i.imgur.com/BuMCMX6.jpeg","https://i.imgur.com/Itr6CZq.jpeg","https://i.imgur.com/I7nw1mA.jpeg","https://i.imgur.com/f9mcyFs.jpeg","https://i.imgur.com/Mk4aicB.jpeg","https://i.imgur.com/IhSSyUl.jpeg","https://i.imgur.com/4ZeWTNI.jpeg","https://i.imgur.com/slOmQAE.jpeg","https://i.imgur.com/33ediX7.jpeg","https://i.imgur.com/nfrV8Vh.jpeg","https://i.imgur.com/9mhGGIk.jpeg","https://i.imgur.com/aCUv8Rs.jpeg","https://i.imgur.com/iU28uXc.jpeg","https://i.imgur.com/UCJyGYs.jpeg","https://i.imgur.com/9w28d2w.jpeg","https://i.imgur.com/ohIbBYW.jpeg","https://i.imgur.com/CSWWOQx.jpeg","https://i.imgur.com/PdRMKQn.jpeg","https://i.imgur.com/iS7j7IY.jpeg","https://i.imgur.com/7nsuV19.jpeg","https://i.imgur.com/sElpK8x.jpeg","https://i.imgur.com/b5xJzmx.jpeg","https://i.imgur.com/5vSlt7d.jpeg","https://i.imgur.com/sCQjjsf.jpeg","https://i.imgur.com/83Q3DJh.jpeg","https://i.imgur.com/IXh3PWv.jpeg","https://i.imgur.com/kiIg0Dl.jpeg","https://i.imgur.com/4f4766u.jpeg"
     ];
     var callback = () => api.sendMessage({body:`☟  ========== ☟ ==========  ☟          💐𝐇𝐄𝐑𝐄 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐒𝐀𝐃 𝐏𝐇𝐎𝐓𝐎💐                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫➻ ╔╬⓼★⓼╃───────➣™🄼🅁🄱🄾🅃🄾🅆🄽🄴🅁🄰🅁🅈🄰🄽𝄠━─━Ⓔ╰✾✾®️╀✿✿╀─━ↈⓇ⧐⧐💐`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
