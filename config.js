hiconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFxOVBnb0tUQmdLLzVTQTRQaktDZTNPZXA3dFNYcVFwRVF1MVE0MmRWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2NHb0EzdG9rTzBVWkliOS9ieHVQbGtSUE54a3BrQkR1bFJBTWJxL1FFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT3RZQkRhcEtpbnQwL0FhT014eGFocG5zd3E1NHBpZmxnVXdCNzIxYzFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNDVKd0R0NFF5cXF5SVZEZjZkNGE3aUNuVWxjdHJldWdRbW8ydmlpd1FvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMT3FlR3piaFl5WTBuNTkvakZjV21MbEpxbWJaYVUzTVdOblUwZWxkMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik82S1BJMVFkTWNTRHZYZ01GZDZCWlNiaDljMi9BTjZUQ3k4SU0zOVh5aVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0gzNjNubW1NMm5VTnJGenRLdHhhanJ2UEV3N1MrVlZrakh1N3ZGVUcwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1c2U25QL2YvSVN3aUFMa2hhSVVSc0pnc0UyTTMxNitYQnkyOEhMT0NWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpCeUt0aEhuMjJIaWxLYmgwd2J1RE0zZkYxMlZFUGZ1dEsxaUp2UEdUWWxaVWthbHR2dlova2pZOFoxWXl2bC9KbXBZazZoc1ozOGdubXVUY0Iwa2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiI1a3NPd1ZVUFZGZDhuellCVWRQdXluN1d5OHBiVzE4WnJwUWdiKzI3Mk1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkWC0wN3VSb1MtS1JXVU5fczB3bEVnIiwicGhvbmVJZCI6ImQ4ZjI2NGFiLTVjNDgtNGJiMy05YTRhLTFkNTlhNjkwZWQ2MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuOU93Z2haT04wdGJnSzNBQXYzb3NkRnJEUjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjZiOHIrbjE4ZXVYazZRWGpVblp1UFZ3QWlBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1QSzc4MjhYIiwibWUiOnsiaWQiOiIyNTQ3NzY1NDEwNzE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6u0QWRhbXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLRDRla0hFUEdNbXJBR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFMcXgvZ0oyZzJIYjdZc0JZYnMxWjM4RWxSM21DTDhxdm9tVmFFQk9XbDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRTZjNjL2xZR0lDTk5xeHVnekJMSnVKc2ZFcnFkZ0xsMnJPMUcwSTVnVWJRZFNOR0I5VjQyRkhoS3Z5aFBVd2pSRGNBZ1M1ai9WeW5OaFVaVm44RERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxNmZ0eXNCVW85bURHVHdxaUxoZjBiNFErQmgzb0xWNzIxVGxPV2R0SktkV2l6eVpNSEhlQkRML0tUeURpZnM5SDEwa2d3WUFrbmJ6ejYreUVXT2dqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3NjU0MTA3MToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVDNnNmNENkb05oMisyTEFXRzdOV2QvQkpVZDVnaS9LcjZKbFdoQVRscGQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTE3MDM2Nzl9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
 
