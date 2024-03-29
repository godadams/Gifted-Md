const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       
// put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-mdV2";
global.gurl  =process.env.GURL  || 
"https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"
;
global.website=process.env.GURL || 
"https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" 
; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || 
"https://telegra.ph/file/54efddccf41281ad7ec51.jpg" 
; // SET LOGO FOR IMAGE 



global.devs = "254728782591,254762016957" // Do Not Change Else Bot Won't Work After Deploying
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254728782591,254762016957";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728782591,254762016957";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728782591,254762016957,254110853827";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,254762016957,254110853827";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://session.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU0yTytWajB2OHQ5UDAzWUhpWVdMSlM3S1FIbDAxTU0rbDNQNnhOQndXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXNQT0V4UVMxTExrQTN3YUtBdzBMS2ZyaU95Q3I0dnBOWkJNZWRQR3l4RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S3dEUWk1UmVIQVFadllLS2gySmJBWFNybURlWHgvNURnMS9wd1JGeTNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVGduUmtGMEs1ZDQ0MGFvRzJGOFZ0c3pwcExmSTF3a3p4bVdHUDhhSFJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGZlAwMUs3RVlqN1FRVFR1akxyQ3BBUk5yZ1ZoRHpCdDdraDZDRm5QRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5heVF4b3dmNnVsQ21yaWh1eTcrZFZscC9tdzUwaGpXbnc4TlBtT0U3bW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZiS3VIOW5tQVZINzQ5Q1d5K0c5WGxHT3lNbVZJQ0YwUW9FUXhjYUYzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRS90TmMvRUs4VjBQdkxNaTRndWthaFhMYmcwRFVQdEtlSEhXcFJCd0RuYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxYcGVJb1J4SXorYWExNGM4eWxsWDFpdEIrcDM3Mlh6bURpekt6SVJxUlE1QlBZNWFaSE9WWU1PWmFxV0VhNk1Tcnc1UnhmeHZRTk5mOTBWQ1k0SENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJlK1RTbTk3c05meEg0Q1Z1R2JKWmY3MnM4L1ovampzK1B1VCs1UkhUZHJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3R1N5OXVMelFuNnd1R2pNdUFSZmhBIiwicGhvbmVJZCI6IjI5MGNkMTAwLTk3YjYtNGEzYS1hYTE2LTFiNzk5MDhiNGUyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZk9NaFZZTlpSMFJ2YTlnS1JGT0NmcjFRaTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEttRzR6MW5rQWRjYWRxS2xHdXduUjVMK3FFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZDS1JWN1dNIiwibWUiOnsiaWQiOiIyNTQ3NzY1NDEwNzE6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUE9ENGVrSEVPM2ltckFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUUxxeC9nSjJnMkhiN1lzQlliczFaMzhFbFIzbUNMOHF2b21WYUVCT1dsMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWVzazNlY3Y3NUhxZXZDbTNSanpqWXdLakR6SS9hMUZQR1hjWm04RmZRSUF6Kzl1a21GK0lMY0duQTQ1S0w3Z3N3WCswT2djUG9yNllZZitvZlJtQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBGaGo5S2tDMFNwRGI0S2JvRjIzdEsrQUUvekhXb1ZCd0NWVlAxQUVoVVBuajNzTGc5WjJRQ2c0ODRqekY5bi9JMG1xdjV4MGhEUWdzYkYzZElFcUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzc2NTQxMDcxOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUM2c2Y0Q2RvTmgyKzJMQVdHN05XZC9CSlVkNWdpL0tyNkpsV2hBVGxwZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMTcxNDY4NH0=" ;


module.exports = {

  menu: process.env.MENU || "254776541071", /**  Available @MENU @Schemes 1: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Gifted-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's Gifted",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  levelupmessage: process.env.LEVEL_UP_MESSAGE || "false",

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: ( process.env.THEME || "GIFTED" ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
