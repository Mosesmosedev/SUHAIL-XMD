const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FYIgBORcOPiG2gwfSzIVcX";
global.website=process.env.GURL || "https://chat.whatsapp.com/FYIgBORcOPiG2gwfSzIVcX" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254721453598";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_31_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNdEhuMFZHY0dCbmZXQ2xhOFRnY3BFdnlEejV4MWZ3dnpsS2kweTlNbWZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFMEIwWFZVbFFwQ2JzR0lCSmpxSjVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNhOTBjMmYzLTJmOTMtNGE3ZC05MzM1LWNhODIyOGY2N2EzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAyNDgsXG4gICAgICAyNTEsXG4gICAgICAxNjYsXG4gICAgICAyMyxcbiAgICAgIDIsXG4gICAgICA4NixcbiAgICAgIDIxMCxcbiAgICAgIDEzMSxcbiAgICAgIDIxOSxcbiAgICAgIDE4MixcbiAgICAgIDI0OSxcbiAgICAgIDE4NyxcbiAgICAgIDExMyxcbiAgICAgIDE2LFxuICAgICAgMTA3LFxuICAgICAgMTg0LFxuICAgICAgNzksXG4gICAgICAxNTAsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAyMDUsXG4gICAgICAxNTgsXG4gICAgICAzOSxcbiAgICAgIDI3LFxuICAgICAgMjIxLFxuICAgICAgOTUsXG4gICAgICA2OSxcbiAgICAgIDM4LFxuICAgICAgMTEsXG4gICAgICA5MSxcbiAgICAgIDI5LFxuICAgICAgNzcsXG4gICAgICAzLFxuICAgICAgNixcbiAgICAgIDEwMCxcbiAgICAgIDI1MCxcbiAgICAgIDczLFxuICAgICAgMTI2LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTZITDZWOFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyMTQ1MzU5ODo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbjwnZaU8J2WmPCdlorwnZaYXCIsXG4gICAgXCJsaWRcIjogXCIyMTQ4OTAzODM5NTgwNzk6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZmNmVjRUVMM0pscmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLMTd6MVVsa2IvdGkzNkxDaWNZVVdzTm5Pd1A1WXFaUittclBGK09tR2k0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9wQmJxU1NYMUM2QXNHUkl6U3Z4dmZvOU9wTXVoL3U5TU9qTjBVUkJhTnhyUzFLNjJGbUpHeGlsZmsrbU1EZU9PcjhLcmxwNHVYRmdadEJiY0dWNEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhaSGl4S2lXRmRTMUs2TlA3MEZwU1FNUE9CODhjSVAwSjVNZzdDZUJQblhOdDJ2RnhFeXpiRi9LcGFwbm9YaWJweVYrcnJFMnh6NnVYSmk3MmRlZENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyMTQ1MzU5ODo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0MjMxMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFORVFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5FUS5qc29uIjogIntcImtleURhdGFcIjpcInB1QTM3aHJsMHJMMzlNWjBwM0NJREQxK0x5dkdLSitFQUNQYUJHcVZlWDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MTQ4MTA0NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4NDIzMDc2NzE3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
