let total = 0;
for (let i = 0; i < 10; i++) {
  total += i;
}
console.log("Total: " + total);
const {WAConnection, MessageType, Presence, Mimetype, GroupSettingChange} = require("@adiwajshing/baileys");
const fs = require("fs");
const {exec} = require("child_process");
const moment = require("moment-timezone");
const {getBuffer, banner, start, success} = require("./lib/functions");
const {color} = require("./lib/color");
const { version, scripts } = require('./package.json');
const { loader } = require('./functions/loader')
const name = "-";
const nokon = "6282331787920";
require("./database/claim.json");
nocache("./database/claim.json", _0x9ee0x5 => {
  return console.log(`${""}${_0x9ee0x5}${" is now updated!"}`);
});
require("./msg.js");
nocache("./msg.js", _0x9ee0x5 => {
  return console.log(`${""}${_0x9ee0x5}${" is now updated!"}`);
});
const starts = async (_0x9ee0x7 = new WAConnection) => {
  _0x9ee0x7.logger.level = "warn";
  _0x9ee0x7.version = [2, 2123, 8];
  _0x9ee0x7.browserDescription = ["Miku Bot Server", "Linux", "3.0"];
  console.log(banner.string);
    console.log(color('=> Bot successfully loaded! Database:', 'yellow'))
    console.log(color('=> Source code version:', 'yellow'), color(version))
    console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color(scripts.url))
    console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))

  _0x9ee0x7.on("qr", () => {
    console.log(color("[", "white"), color("!", "red"), color("]", "white"), color(" Scan bang"));
  });
  fs.existsSync("./session.json") && _0x9ee0x7.loadAuthInfo("./session.json");
  _0x9ee0x7.on("connecting", () => {
    start("2", "Menyambung ke Server...");
  });
  _0x9ee0x7.on("open", () => {
    success("2", "Terhubung Dengan Server...");
    console.log(color('[MIKU]'), color('Miku Bot is now online!', 'yellow'))
  });
  await _0x9ee0x7.connect({timeoutMs: 3e4});
  fs.writeFileSync("./session.json", JSON.stringify(_0x9ee0x7.base64EncodedAuthInfo(), null, "	"));

  _0x9ee0x7.on("chat-update", async _0x9ee0x16 => {
    require("./msg.js")(_0x9ee0x7, _0x9ee0x16);
  });
};
function nocache(_0x9ee0x5, _0x9ee0x18 = () => {}) {
  console.log("Module", `${"'"}${_0x9ee0x5}${"'"}`, "is now being watched for changes");
  fs.watchFile(require.resolve(_0x9ee0x5), async () => {
    await uncache(require.resolve(_0x9ee0x5));
    _0x9ee0x18(_0x9ee0x5);
  });
}
function uncache(_0x9ee0x5 = ".") {
  return new Promise((_0x9ee0x1a, _0x9ee0x1b) => {
    try {
      delete require.cache[require.resolve(_0x9ee0x5)];
      _0x9ee0x1a();
    } catch (e) {
      _0x9ee0x1b(e);
    }
  });
}
starts();
