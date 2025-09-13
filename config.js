const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "QyEg0CZA#WuFOnb5V9Wa_sw3x06EeVkggj_5EKLD0bqc3s8al4Yk":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
