const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
MONGODB: process.env.MONGODB || "mongodb+srv://lithumhelitha2008:7rDwXUVeTnIfmnjl@cluster0.1d0bq.mongodb.net/",
AUTO_VOICE:"true" //true or false
AUTO_BIO :"true"
};
