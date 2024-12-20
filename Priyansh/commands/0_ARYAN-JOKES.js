const axios = require('axios');

module.exports.config = {
  name: "joke",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AMAN",
  description: "Ek mazedaar joke bhejta hai",
  commandCategory: "Fun",
  usages: "joke",
  cooldowns: 5,
};

const API_KEY = 'ed5919074363a4a1fcd8a77578e9'; // API key

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, body } = event;

  if (body.toLowerCase() === "joke") {
    try {
      const response = await axios.get(`https://hindi-jokes-api.onrender.com/jokes?api_key=${API_KEY}`);
      const jokeContent = response.data.jokeContent;

      if (jokeContent) {
        return api.sendMessage(jokeContent, threadID);
      } else {
        return api.sendMessage("😕 Abhi joke nahi mil paaya. Kripya baad mein try karein.", threadID);
      }
    } catch (error) {
      console.error("Joke fetch karne me error aayi:", error);
      return api.sendMessage("😕 Abhi joke nahi mil paaya. Kripya baad mein try karein.", threadID);
    }
  }
};

module.exports.run = function () {};
