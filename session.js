//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExXY0VqL3dwdmUwRmFJdXZDY21Yb0J5TWZNeFNSVzFSbDNwQzVmTXJuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05BVm8vVFE3cCsyWEducFNKZzhUa1JMaDRieTRabnZ0WXlSTE83KzBFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT01GUXZxTU1wT09ERG80RXdXM1pYZ284SDdzall3SVdVekJMMTYzTG1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWlNHTlRJTlVVc1BhYklobkVNaDZLM0VTaG04VmVCQVZLdjNZdkxPcTNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNY0VCTnE0WnloaGtCQVZRNHBBQSt4TVh3aXVzazN4dEVxMzdDWjRCbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik55QS96dUZqaURjQmNPSmpUNGxCTUdvV1BUQzhOcElSZlV5b1lXL2lVMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdTa3ZqWXBKOVRhckt3SklvZU13L2VJVVZpYUE4OFFwcnJCK2tZbzFGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXRoUzVMQXFWN3UwZnNRSXNJOVBTa2ZSVVAxUytqQS9GQ0lGeEFJYWdXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB3ekxrY2pjZmtpaHFXWlZWNXRLZVlWWXgwcXJUS25HL0FRdzRZUGtIRE16STdLcGZNbTdOUnk2WXRCanRnalBIS0s3dkRpRXJMNThjRDZKcmpQYkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJXMVNlZHlkVkZEajU1Nmo0RThObVNrOVozZ2hLZFBPSjNzMngvbFBwRFIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzNTg0NjA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdENkRBNDhDNUE0NTU2QjBCMzZENTI4NTRFQTExRTc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEzMDY5ODV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5VTzlUM2lfUlc2WFREMElkcDdlRlEiLCJwaG9uZUlkIjoiM2YyODNiOWEtZjEwNS00MWMzLTg1ZTQtMmY3MWJhY2ZiYmRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZOYVdURVhyL01sTmpMcjIrZkdlRDJOczRYcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZkFWSFRKbk5SL3UvT1AzbVZhbXpNN1pRcE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQThCVkNYWVkiLCJtZSI6eyJpZCI6Ijk0NzYzNTg0NjA1OjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDk0Njk0MzQwOTc4NDQ6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ055dzhjWURFTnFsaThNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlB3bkExV1JHR0tneUVUK3RRaG9JNFl5REx5TkpnbHZJbmJIVXdiaXJEM289IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFXcWttVi96dWZGUDBWdEhUUUpuSmlHbVltdnk2OU94RUVHRGxGYlo3RDdSamtyclQxWnlRS2YweWZiVkpQbWhUUVlQWDloMnh0NGYwTVVTSUx0MUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQMElySE11L25TNGZGSHpQTyt2YkFKVlpMUU45NU1sUnRYblhIclJJUm9jbnA2NFMzL1VLUkZkN0dsVWhyVEswcXBiWnlsamExN3B6cmRXNGNWSk9EZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzNTg0NjA1OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDhKd05Wa1JoaW9NaEUvclVJYUNPR01neThqU1lKYnlKMngxTUc0cXc5NiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMzA2OTgzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUp0aiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94768387659",
  PASSWORD: 
    process.env.PASSWORD || "Sankalpa00",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
