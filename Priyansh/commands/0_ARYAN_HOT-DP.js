module.exports.config = {
  name: "hotdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AMAN",
  description: "Boys Dp photos",
  commandCategory: "Admin",
  usages: "hot",
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
"https://i.imgur.com/yjwQQsv.jpg","https://i.imgur.com/bMuOehO.jpg","https://i.imgur.com/2N3AFR7.jpg","https://i.imgur.com/xzBD0ix.jpg","https://i.imgur.com/xTqk7WU.jpg","https://i.imgur.com/SoT9yiF.jpg","https://i.imgur.com/U7ObQKZ.jpg","https://i.imgur.com/mGTgUIo.jpg","https://i.imgur.com/5i8c062.jpg","https://i.imgur.com/7P284Ef.jpg","https://i.imgur.com/zHljRae.jpg","https://i.imgur.com/7c3trME.jpg","https://i.imgur.com/dU7Q9G2.jpg","https://i.imgur.com/or0X9VR.jpg","https://i.imgur.com/1pWtonH.jpg","https://i.imgur.com/vRQNUdC.jpg","https://i.imgur.com/UkFkap5.jpg","https://i.imgur.com/97CPa6I.jpg","https://i.imgur.com/bbaFITj.jpg","https://i.imgur.com/cAqL7Be.jpg","https://i.imgur.com/zFcFMIl.jpg","https://i.imgur.com/BYZHrmg.jpg","https://i.imgur.com/iqbMDA0.jpg","https://i.imgur.com/VtGk5Kd.jpg","https://i.imgur.com/co0WWby.jpg","https://i.imgur.com/c7FLjDU.jpg","https://i.imgur.com/udAHrZ2.jpg","https://i.imgur.com/hSxC0Vm.jpg","https://i.imgur.com/mjGUUYz.jpg","https://i.imgur.com/uvJk8jw.jpg","https://i.imgur.com/zHVUxOn.jpg","https://i.imgur.com/WFC5vWV.jpg","https://i.imgur.com/nnM8JlY.jpg","https://i.imgur.com/CuFYVko.jpg","https://i.imgur.com/LAKYcnn.jpg","https://i.imgur.com/VhTssee.jpg","https://i.imgur.com/DXqJzRP.jpg","https://i.imgur.com/KFbDLrv.jpg","https://i.imgur.com/JocSABV.jpg","https://i.imgur.com/PB0dg8c.jpg","https://i.imgur.com/5gllMiy.jpg","https://i.imgur.com/aS8qCAE.jpg","https://i.imgur.com/z1iKMf7.jpg","https://i.imgur.com/X3PQnPb.jpg","https://i.imgur.com/d4db0rY.jpg","https://i.imgur.com/6kjfe2s.jpg","https://i.imgur.com/hf6tfLl.jpg","https://i.imgur.com/RF3Sze5.jpg","https://i.imgur.com/khJQrvO.jpg","https://i.imgur.com/VTmPBc0.jpg","https://i.imgur.com/KiccOK1.jpg","https://i.imgur.com/pVvPxRS.jpg","https://i.imgur.com/ko2yNHY.jpg","https://i.imgur.com/4xoDs60.jpg","https://i.imgur.com/7C3nisi.jpg","https://i.imgur.com/moOFGSf.jpg","https://i.imgur.com/206q38t.jpg",
  ];
     var callback = () => api.sendMessage({body:`\n☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ──── 💐𝐀𝐑𝐘𝐀𝐍💐\n\n\n`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
