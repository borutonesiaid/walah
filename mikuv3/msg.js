// SC BY X - Dev Team
// Ndyie Botz
// JANGAN DIPERJUAL BELIKAN !

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, wait, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { bayarHeal, addHealUser, healAdd, bayarPotion, addPotioUser, potionAdd} = require('./hel.js')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { help, help2 } = require('./message')
const { ind } = require('./language')
const game = require("./lib/game");

let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const ikan2 = JSON.parse(fs.readFileSync('./database/user/ikan2.json'))
const ikan3 = JSON.parse(fs.readFileSync('./database/user/ikan3.json'))
const ikan4 = JSON.parse(fs.readFileSync('./database/user/ikan4.json'))
const user = JSON.parse(fs.readFileSync('./lib/user.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const magic = JSON.parse(fs.readFileSync('./lib/magic.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))

banChats = false
offline = false
targetpc = '0'
ownerNumber = ["6282331787920@s.whatsapp.net"]
fake = 'CREATED BY HENDRIK'//ubah nama lu
fake1 = 'MikuBot'
numbernye = '0'
waktu = '-'
global.lolkey = "SiestaChan"; 
alasan = '-'
limitawal = 15
blocked = []
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
self = false;
roomttt = [];
let tebakanime = [];
global.gamewaktu = "70";
healawal = 10
potionawal = 10


     /*******Anti Call*******/
    
    /********** FUNCTION IKAN ***************/
        
        const addIkan = (sender) => {
        	const obj = {id: sender, ikan : 0}
            ikan.push(obj)
            fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
        
        const addIkanUser = (sender, amount) => {
            let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].ikan += amount
                fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
            }
        }
        
        const checkIkanuser = (sender) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan[position].ikan
            }
        }
        
        
        const confirmIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].ikan -= amount
                fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
            }
        }
        
        //adven
        
        
        /********** FUNCTION ikan2 ***************/
        
        const addikan2 = (sender) => {
        	const obj = {id: sender, ikan2 : 0}
            ikan2.push(obj)
            fs.writeFileSync('./database/user/ikan2.json', JSON.stringify(ikan2))
        }
        
        const addikan2User = (sender, amount) => {
            let position = false
            Object.keys(ikan2).forEach((i) => {
                if (ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan2[position].ikan2 += amount
                fs.writeFileSync('./database/user/ikan2.json', JSON.stringify(ikan2))
            }
        }
        
        const checkikan2user = (sender) => {
        	let position = false
            Object.keys(ikan2).forEach((i) => {
                if (ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan2[position].ikan2
            }
        }
        
        const confirmikan2 = (sender, amount) => {
        	let position = false
            Object.keys(ikan2).forEach((i) => {
                if (ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan2[position].ikan2 -= amount
                fs.writeFileSync('./database/user/ikan2.json', JSON.stringify(ikan2))
            }
        }
        
        /********** FUNCTION ikan3 ***************/
        
        const addikan3 = (sender) => {
        	const obj = {id: sender, ikan3 : 0}
            ikan3.push(obj)
            fs.writeFileSync('./database/user/ikan3.json', JSON.stringify(ikan3))
        }
        
        const addikan3User = (sender, amount) => {
            let position = false
            Object.keys(ikan3).forEach((i) => {
                if (ikan3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan3[position].ikan3 += amount
                fs.writeFileSync('./database/user/ikan3.json', JSON.stringify(ikan3))
            }
        }
        
        const checkikan3user = (sender) => {
        	let position = false
            Object.keys(ikan3).forEach((i) => {
                if (ikan3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan3[position].ikan3
            }
        }
        
        const confirmikan3 = (sender, amount) => {
        	let position = false
            Object.keys(ikan3).forEach((i) => {
                if (ikan3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan3[position].ikan3 -= amount
                fs.writeFileSync('./database/user/ikan3.json', JSON.stringify(ikan3))
            }
        }
        
        /********** FUNCTION ikan4 ***************/
        
        const addikan4 = (sender) => {
        	const obj = {id: sender, ikan4 : 0}
            ikan4.push(obj)
            fs.writeFileSync('./database/user/ikan4.json', JSON.stringify(ikan4))
        }
        
        const addikan4User = (sender, amount) => {
            let position = false
            Object.keys(ikan4).forEach((i) => {
                if (ikan4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan4[position].ikan4 += amount
                fs.writeFileSync('./database/user/ikan4.json', JSON.stringify(ikan4))
            }
        }
        
        const checkikan4user = (sender) => {
        	let position = false
            Object.keys(ikan4).forEach((i) => {
                if (ikan4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan4[position].ikan4
            }
        }
        
        const confirmikan4 = (sender, amount) => {
        	let position = false
            Object.keys(ikan4).forEach((i) => {
                if (ikan4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan4[position].ikan4 -= amount
                fs.writeFileSync('./database/user/ikan4.json', JSON.stringify(ikan4))
            }
        }

/******Leveling******/
        /**
 * GET xp user from db
 * params {string} userid
 * return {number}
**/
const getLevelingXp = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}

/**
 * GET level user from db
 * params {string} userid
 * return {number}
**/
const getLevelingLevel = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}

/**
 * GET id user from db
 * params {string} userid
 * return {string}
**/
const getLevelingId = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}

/**
 * add Xp user
 * params {string} userid
 * params {number} amount
**/
const addLevelingXp = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

/**
 * add level user
 * params {string} userid
 * params {number} amount
**/
const addLevelingLevel = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

/**
 * GET xp user from db
 * params {string} userid
**/
const addLevelingId = (userid) => {
    const obj = {id: userid, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}

const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        

/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝘿𝘿 𝘾𝙈𝘿 & 𝘿𝙀𝙇𝙀𝙏𝙀***\\\\\
 var _0x7dfa=["\x70\x75\x73\x68","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x73\x63\x6F\x6D\x6D\x61\x6E\x64\x2E\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x69\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x63\x68\x61\x74\x73"];const addCmd=(_0x69b2x2,_0x69b2x3)=>{const _0x69b2x4={id:_0x69b2x2,chats:_0x69b2x3};_scommand[_0x7dfa[0]](_0x69b2x4);fs[_0x7dfa[3]](_0x7dfa[1],JSON[_0x7dfa[2]](_scommand))};const getCommandPosition=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _0x69b2x6}};const getCmd=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _scommand[_0x69b2x6][_0x7dfa[7]]}};const checkSCommand=(_0x69b2x2)=>{let _0x69b2xa=false;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2xa= true}});return _0x69b2xa}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌃'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore 🌆'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang 🏙️'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi 🌇'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌅'                                       }
//=================================================//

module.exports = client = async (client, dev) => {
	try {
        if (!dev.hasNewMessage) return
        dev = dev.messages.all()[0]
		if (!dev.message) return
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		global.blocked
        	dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message
        	const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
               
               
               
               //MengAutoRespon
               const type = Object.keys(dev.message)[0]        
               var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
               var tas = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
		       const messagesC = pes.slice(0).trim()

                const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')

		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const date = new Date().toLocaleDateString()
		const botNumber = client.user.jid
		const botNumberss = client.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? client.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await client.chats.all()
		const tescuk = ["0@s.whatsapp.net"]
		const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBanchat = isGroup ? bancht.includes(from) : false
		const isBadWord = isGroup ? badword.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isUser = user.includes(sender)
        const isMagic = magic.includes(sender)
        const isClaimOn = _claim.includes(sender)
        const conts = dev.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
       if (self) {
        if (!isOwner || !botNumber) return
      }
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
     


       client.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        client.sendMessage(callerId, "*[CALL DETECTED]*\nBakaa!!! Hentai!!!!!!!!", MessageType.text)
        await sleep(4000)
        await client.blockUser(callerId, "add") // Block user
})

        //MESS
		mess = {
			wait: '_Tunggu sebentar ya kak_',
			admin: '_Kusus admin_',
			owner: '_Kusus owner_',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title": `NGEJUDI GAK BROH?\n${pushname}`,"description": "Ndyie-Botz", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "Ndyie-Botz original","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            //IMG
           ///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//img
            const sendButtonMsg = (id, text, footer, but = [], options = {}) => {
        const buttonMessagek = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 1
        };
        client.sendMessage(
          id,
          buttonMessagek,
          buttonsMessage,
          options
        )
      }
            
            
            
            
            
        const reply = (text) => {
                client.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: false}, quoted: dev, sendEphemeral: false ,thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})
        }
        const sendMess = (hehe, teks) => {
            client.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:dev,caption:yes})
        }
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:dev})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            

            var chats = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
            chats.map( async ({ jid }) => {
            await client.chatRead(jid)
            })
            //AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      client.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
      }
      }
      
      client.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log(`[WARN] ${callerId.split('@')[0]} is calling!`);
        client.blockUser (`${callerId.split('@')[0]}`, "add")
});

/*[-- no badword --]*/
           var kic = `${sender.split("@")[0]}@s.whatsapp.net`
 	   	if (isGroup && isBadWord) {
            if (bad.includes(mesejAnti)) {
                if (!isGroupAdmins) {
                    try { 
                        reply("JAGA UCAPAN DONG!! 😠")
                        setTimeout( () => {
 	                           client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
 					   	}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!")
							}, 0)
                        } catch { client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : dev}) }
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
      
            /////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙂𝙍𝙐𝙋***\\\\\
				if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				client.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\
    if (budy.length > 3500) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('Tandai telah dibaca\n'.repeat(300))
    reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    client.groupRemove(from, [sender])
    }
    
    //function Currency
            if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender) 
                const uangsaku = Math.floor(Math.random() * 10) + 5
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
        //serial
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }  
        const nebal = (angka) => {
            return Math.floor(angka)
        }   
        
        
        //mono
        function monospace(string) {
return '```' + string + '```'
}
function speedText(speed) {
  let bits = speed * 8;
  const units = ['', 'K', 'M', 'G', 'T'];
  const places = [0, 1, 2, 3];
  let unit = 0;
  while (bits >= 2000 && unit < 4) {
  unit++;
  bits/= 1000;
  }
  return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
} 
        
        //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: dev})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : dev})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : dev})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: dev})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
	
    
    /*[-- function level bar --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			/*[-- auto expired --]*/
			
			
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Trainee'
   	     if (levelRole <= 3) {
   	         role = 'senior trainee'
   	     } else if (levelRole <= 5) {
   	         role = 'private'
   	     } else if (levelRole <= 7) {
   	         role = 'corporal'
   	     } else if (levelRole <= 8) {
   	         role = 'Sergeant'
   	     } else if (levelRole <= 9) {
   	         role = 'staff sgt I'
   	     } else if (levelRole <= 10) {
   	         role = 'staff sgt II'
   	     } else if (levelRole <= 11) {
   	         role = 'staff sgt II'
   	     } else if (levelRole <= 12) {
   	         role = 'Sgt 1st class I'
   	     } else if (levelRole <= 13) {
   	         role = 'Sgt 1st class II'
   	     } else if (levelRole <= 14) {
   	         role = 'Sgt 1st class III'
   	     } else if (levelRole <= 14) {
   	         role = 'Ggt 1st class IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Master sgt I'
   	     } else if (levelRole <= 16) {
   	         role = 'Master sgt II'
   	     } else if (levelRole <= 17) {
   	         role = 'Master sgt III'
   	     } else if (levelRole <= 18) {
   	         role = 'Master sgt IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Master sgt V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd Lt I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd Lt II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd Lt III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd Lt IV'
   	     }
   		 
				
				
	        /*[-- function Level --]*/
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
        
        //tebakanime
        game.cekWaktuTA(client, tebakanime)
		
		
		//funcjawaban
        if (game.isTebakAnime(from, tebakanime)){
if (chatss.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(1500)
addKoinUser(sender, vinna)
await reply(`*TEBAK ANIME*\n
*🎊Selamat Jawaban Kamu Benar!!!*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* ${vinna} Koin\n
Ingin *Bermain* Lagi?
kirim *!tebakanime*`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
} 	        
		
//FUNCTION
            cekafk(afk)
            if (!dev.key.remoteJid.endsWith('@g.us') && offline){
            if (!dev.key.fromMe){
            if (isAfk(dev.key.remoteJid)) return
            addafk(dev.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            client.sendMessage(dev.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (dev.key.remoteJid.endsWith('@g.us') && offline) {
        if (!dev.key.fromMe){
        if (dev.message.extendedTextMessage != undefined){
        if (dev.message.extendedTextMessage.contextInfo != undefined){
        if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(dev.key.remoteJid)) return
        addafk(dev.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        client.sendMessage(dev.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
   
    
    // Yang Respon Itu Bang
   
    if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	client.sendMessage(from, buffer, sticker, {quoted:dev })
	}
	
	if (audionye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
	client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: dev, ptt: true })
	}
	
	if (imagenye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/foto/${namastc}jpeg`)
	client.sendMessage(from, buffer, image, {quoted : dev})
	}
	
	if (videonye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
	client.sendMessage(from, buffer, video, {quoted : dev})
	}
	
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!isOwner) return
if (chatss.toLowerCase().startsWith('unbanchat')){
if (!isBanchat) return reply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
}
}
	
	//function check heal
             const checkHeal = (sender) => {
         	let foundh = false
             for (let heallmt of _heal) {
             if (heallmt.id === sender) {
             let healCounts = healawal - heallmt.heal
             if (healCounts <= 0) return client.sendMessage(from,`ya udah habis Heal kamu\n\n_Note : tenang Heal bisa didapatkan dengan cara ${prefix}usepotion_`, text,{ quoted: dev})
             client.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted : dev})
             foundh = true
             }
             }
             if (foundh === false) {
             let obj = { id: sender, heal: 0 }
             _heal.push(obj)
             fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
             client.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted : dev})
             }
	         }
		 //funtion potion
          const isPotion = (sender) =>{ 
	      let position = false
          for (let i of _potion) {
          if (i.id === sender) {
          let potions = i.potion
          if (potions >= potionawal ) {
          position = true
          client.sendMessage(from, `Beli Potion ngab di /buypotion`, text, {quoted: dev})
          return true
           } else {
           _potion
           position = true
           return false
           }
           }
           }
           if (position === false) {
           const obj = { id: sender, potion: 0 }
           _potion.push(obj)
           fs.writeFileSync('./database/adventure/potion.json',JSON.stringify(_potion))
           return false
            }
            }
            const checkPotion = (sender) => {
        	let foundh = false
            for (let potionlmt of _potion) {
            if (potionlmt.id === sender) {
            potionCounts = potionawal - potionlmt.potion
            if (potionCounts <= 0) return client.sendMessage(from,`ya udah habis potion kamu\n\n_Note : tenang limit bisa dibeli dengan cara ${prefix}buypotion_`, text,{ quoted: dev})
            client.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted : dev})
            foundh = true
            }
            }
           if (foundh === false) {
           let obj = { id: sender, potion: 0 }
            _potion.push(obj)
           fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
           client.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted : dev})
            }
	        }
	
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285695451209@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285695451209@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!dev.key.fromMe && !isOwner && banChats === true) return

const atibot = dev.isBaileys
if (atibot === true) return

switch (command) {
    
    case 'limit':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				   checkLimit(sender)
					break 
					
				case 'inventory':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
            const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
            const jumlahikan = checkIkanuser(sender)
				const jumlahikan2 = checkikan2user(sender)
				const jumlahikan3 = checkikan3user(sender)
				const jumlahikan4 = checkikan4user(sender)
				resul = `*「 INVENTORY 」*
➸ Coins : ${checkATMuser(sender)}
──────────────────

*> | ITEM LIST | <*

_❏ Ikan Salmon: ${jumlahikan} 🐟_
_❏ Ikan Buntal:  ${jumlahikan2} 🐡_
_❏ Ikan Hiu: ${jumlahikan3} 🦈_
_❏ Lumba Lumba: ${jumlahikan4} 🐬_

──────────────────`
			   reply(resul)
				break
				
				case 'verify':
					client.updatePresence(from, Presence.composing)
					//if (isUser) return reply('kamu sudah terdaftar')
					const serialUser = createSerial(20)
						user.push(sender)
						addIkan(sender)
                      addikan2(sender)
                      addikan3(sender)
                      addikan4(sender)
						fs.writeFileSync('./lib/user.json', JSON.stringify(user))
						client.sendMessage(from, `*VERIFIKASI BERHASIL*\n\n*Nama* : ${pushname}\n*ID* : ${sender}\n*SN* : ${serialUser}\n*Waktu* : *${date} ${time}*\n\n_Untuk Menggunakan Bot Silahkan Ketik #help_`, text, {quoted: dev})
						client.sendMessage(`${sender}`, `Hai User ${pushname} Terima Kasih Telah Mendaftar Menjadi Bagian Dari Keluarga Miku Bot:)\nMelanggar Peraturan Seperti Menelpon Bot Dan Spam Akan Kami Banned ID Anda...Selamat Menggunakan`, text)
						break
            
            case 'buy':
            if (args.length < 1) return reply('Masukan Item Yang Ingin Dibeli')
					if (args[0]  === "limit") {
						payout10 = body.slice(11)
				if(payout10 <= 0) return reply('Masukan Jumlah Limit Dengan Benar')
				const koinPerlimit = 500
				const total9 = koinPerlimit * payout10
				if ( checkATMuser(sender) <= total9) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total9 ) {
					confirmATM(sender, total9)
					bayarLimit(sender, payout10)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout10} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
                 } else if (args[0]  === "potion") {
                 	reply('Sukses Membeli Potion')
                 } else {
						reply('Item Yang Kamu Beli Tidak Ada Didalam Database Kami!!')
					}
					break
					
					case 'jackpot':
			if (isLimit(sender)) return
			if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
console.log('Getting Fruit Data..')
const buah = ['🍊','🍒','🍐','🍇','🍓','🍎'] 
          const satu = buah[Math.floor(Math.random() * (buah.length))]	
          const dua = buah[Math.floor(Math.random() * (buah.length))]	
          const tiga = buah[Math.floor(Math.random() * (buah.length))]	
if (satu === dua && dua === tiga){
	client.sendMessage(from, `*🎰JACKPOT 🎰*
	

${satu} - ${dua} - ${tiga}  *<=*


*KAMU MENANG LORD ${pushname}🎊🎉*\n*+Coins 5000*`,MessageType.text, { quoted: dev})
addKoinUser(sender, 5000)
	} else {
	client.sendMessage(from, `* 🎰JACKPOT 🎰*
	

${satu} - ${dua} - ${tiga}  *<=*

*KAMU KALAH*`,MessageType.text, { quoted: dev})
	} 
		console.log('Result Berhasil Di Kirim...')
		await limitAdd(sender)
		
break

case 'casino':
if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
			if (isLimit(sender)) return
			
			judi = body.slice(8)
			if (judi <= 0) return reply('Masuka Jumlah Taruhan')
			reply(`Kamu Main Sebanyak ${judi}💰 Semoga Berungung\n*Nanti Kalah Nangis*`)
			const judikali2 = 2
				const totaljudi2 = judikali2 * judi
				if ( checkATMuser(sender) <= judi) return reply(`Uang lu Kurang Nyet`)
				if ( checkATMuser(sender) >= judi ) {
console.log('Getting Casino Data..')
const buah3 = ['1','2','3','4','5','6','7','8','9','0'] 
          const satu = buah3[Math.floor(Math.random() * (buah3.length))]	
          const dua = buah3[Math.floor(Math.random() * (buah3.length))]	
          const tiga = buah3[Math.floor(Math.random() * (buah3.length))]	
          setTimeout( () => {
          client.sendMessage(from, `*[CASINO INFO]*\n\nBot Mendapatkan : ${satu}\n*VS*\nKamu Mendapatkan : ${dua}`,MessageType.text, { quoted:dev})
          }, 5000) // 1000 = 1s,
if (satu <= dua){
	setTimeout( () => {
	client.sendMessage(from, `*[WINNER]* Kamu Kamu Menang, Kamu Mendapatkan Uang 2× Lipat : ${totaljudi2}`,MessageType.text, { quoted: dev})
	}, 6000) // 1000 = 1s,
addKoinUser(sender, totaljudi2)
	} else {
		confirmATM(sender, judi)
		setTimeout( () => {
	client.sendMessage(from, `*[YOU LOSE]* Kamu Kalah Dan Kamu Kehilangan Uang : ${judi}`,MessageType.text, { quoted: dev})
	}, 5000) // 1000 = 1s,
	} 
	}
		console.log('Result Berhasil Di Kirim...')
		await limitAdd(sender)
		break
		
		case 'transfer':
				if (!isUser) return reply(mess.only.userB)
				if (!q.includes('|')) return  reply('Format Salah!!! Contoh: transfer 6282331787920 | 1000')
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6282331787920@s.whatsapp.net', fee)
                reply(`*SUKSES*\n\nPengiriman uang berhasil\n➸ *Dari* : +${sender.split("@")[0]}\n➸ *Ke* : +${tujuan}\n➸ *Jumlah Transfer* : ${jumblah}\n➸ *Pajak* : ${fee}`)
                break
                
                case 'fight':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
			if (isLimit(sender)) return
			
			judif = body.slice(7)
			if (judif <= 0) return reply('Masuka Jumlah Taruhan')
			const lipat = ['1','2','3','4','5','6']
			reply('Nanti Di Cingcang Nangis')
			const hlipat = [Math.floor(Math.random() * (lipat.length))]	
				const totaljudif = hlipat * judif
				if ( checkATMuser(sender) <= judif) return reply(`Uang lu Kurang Nyet`)
				if ( checkATMuser(sender) >= judif ) {
console.log('Getting Fight Data..')
const buah3 = ['1','2','3','4','5','6','7','8','9','0'] 
          const satu = buah3[Math.floor(Math.random() * (buah3.length))]	
          const dua = buah3[Math.floor(Math.random() * (buah3.length))]	
          const tiga = buah3[Math.floor(Math.random() * (buah3.length))]	
          const lawan = ['Dedy Corbuzier','The Rock','maria ozawa','sugiono','spiderman','venom','dajjal','alien','rizal','kukuh','levi ackerman','mikasa','hinata','naruto'] 
          const hlawan = lawan[Math.floor(Math.random() * (lawan.length))]	
          const dmglu = ['Kamu Menusuk Dada','Menghantam Kepala','Ngejumshot','Memakan','Memperkosa','Menendang Titidnya'] 
          const hdmglu = dmglu[Math.floor(Math.random() * (dmglu.length))]	
          const dmglw = ['Bokong Mu Di Tendang','Titid Mu Di Tendang','Kepala mu Di Jumshot','kamu Di Perkosa','DiMakan','Di cingcang'] 
          const hdmglw = dmglw[Math.floor(Math.random() * (dmglw.length))]	
          setTimeout( () => {
          client.sendMessage(from, `*[FIGHT]*\n\n ${pushname} *VS* ${hlawan}\n\n_Menunggu Hasil..._`,MessageType.text, { quoted:dev})
          }, 2000) // 1000 = 1s,
if (satu == dua){
	setTimeout( () => {
	client.sendMessage(from, `*[WINNER]* Kamu Menang Karna Kamu ${hdmglu} ${hlawan}\n\n_Hasil ${totaljudif} Coin Telah Masuk Ke Inventorymu_`,MessageType.text, { quoted: dev})
	}, 5000) // 1000 = 1s,
addKoinUser(sender, totaljudif)
	} else {
		confirmATM(sender, judif)
		setTimeout( () => {
	client.sendMessage(from, `*[YOU LOSE]* Kamu Kalah Karena ${hdmglw} oleh ${hlawan}\n\n_Dan Kamu Juga Kehilangan Coin Sebanyak : ${judif}_`,MessageType.text, { quoted: dev})
	}, 5000) // 1000 = 1s,
	} 
	}
		console.log('Result Berhasil Di Kirim...')
		await limitAdd(sender)
		
break

					case 'level':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					if (isLimit(sender)) return
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                const totalrank = userLevel - 2
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                try {
					ppimg = await client.getProfilePicture(sender)					
					} catch {
					ppimg = 'https://i.ibb.co/X4Pbgpr/images-2021-09-19-T152641-155.jpg'
				}
				var val = Math.floor(1000 + Math.random() * 9000);
				console.log(ppimg)
				var imgbb = require('imgbb-uploader')
				const opsiup = {
					apiKey: "3b8594f4cb11895f4084291bc655e510", // MANDATORY
					imageUrl: ppimg,
					};
				su = await imgbb(opsiup)
				console.log(su.display_url)
				levelimg = await getBuffer(`https://api.no-api-key.com/api/v2/rank/2?current=${userXp}&total=${requiredXp}&rank=${totalrank}&level=${userLevel}&username=${pushname}&discrim=${val}&avatar=${su.display_url}&status=online&mainColor=white&background=https://i.ibb.co/whcWWvQ/images-2021-09-19-T130211-728.jpg&key=rYpZjfV7lpDwuUorgnPJH4Wdu`)
				client.sendMessage(from, levelimg, image, {quoted: dev})
                await limitAdd(sender)
				break 
				
				case 'menu':
				case 'help':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isGroup) {
				if (isLimit(sender)) return
				const reqXp1  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					const covid = await fetchJson(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
					const menusu = `${ucapanWaktu} kak ${pushname}

*❏ About User*
├ *👨🏻‍💻Name* : ${pushname} 
├ *☎️Nomer* : ${sender.split("@")[0]}
├ *🔱Xp* : ${getLevelingXp(sender)}/${reqXp1}  
├ *📈Level* : ${getLevelingLevel(sender)}
├ *👑Rank* : ${role}
└ *💰Money* : *Rp.${uangku}.-*

*❏ Data Covid Indonesia*
├ *Positif* : *${covid.positif}*
├ *Dirawat* : *${covid.dirawat}*
├ *Sembuh* : *${covid.sembuh}*
└ *Meninggal* : *${covid.meninggal}*

*❏ Sticker*
├ *${prefix}attp* <teks>
└ *${prefix}sticker* _<reply image,video,sticker>_

*❏ Anime*
├ *${prefix}waifu*
├ *${prefix}husbu*
├ *${prefix}animewallpaper*
├ *${prefix}nekonime*
├ *${prefix}shinobu*
└ *${prefix}loli*

*❏ Game*
├ *${prefix}jackpot*
├ *${prefix}casino <jumlah taruhan>*
├ *${prefix}fight <jumlah taruhan>*
├ *${prefix}level*
├ *${prefix}suit*
├ *${prefix}tictactoe*
├ *${prefix}adventure*
├ *${prefix}fishing*
├ *${prefix}daily*
├ *${prefix}mining*
└ *${prefix}inventory*

*❏ Quiz Area*
├ *${prefix}tebakanime*
└ *${prefix}pancasila5* (SOON)

*❏ Nsfw*
├ *${prefix}nsfwboruto*
├ *${prefix}nsfwtrap*
├ *${prefix}waifunsfw*
├ *${prefix}hentai*
├ *${prefix}nsfwcosplay*
├ *${prefix}animensfw*
├ *${prefix}waifunsfw*
├ *${prefix}nsfwneko*
└ *${prefix}yuri*

*❏ Basic*
├ *${prefix}funfact*
├ *${prefix}bijak*
├ *${prefix}quotes*
├ *${prefix}motivasi*
└ *${prefix}nulis <teks>*

*❏ Group Setting*
├ *${prefix}add <62×××>*
├ *${prefix}kick <@tag>*
├ *${prefix}group <close/open>*
├ *${prefix}everyone <teks>*
├ *${prefix}setname <teks>*
├ *${prefix}demote <@tag>*
├ *${prefix}promote <@tag>*
├ *${prefix}sedesc <teks>*
├ *${prefix}antilink <1/0>*
├ *${prefix}antivirtext <1/0>*
├ *${prefix}nsfw <1/0>*
└ *${prefix}revoke*`

    gmenu = ["https://i.ibb.co/S5n07Kc/images-2021-09-15-T154958-345.jpg", "https://i.ibb.co/4VzHkjc/images-2021-09-15-T154951-900.jpg", "https://i.ibb.co/N7v11w8/images-2021-09-15-T154942-949.jpg"]
    nimenu =  gmenu[Math.floor(Math.random() * gmenu.length)];
   pic = await getBuffer(nimenu)
   sendButLocation(from, `${menusu}`, "*© Miku Whatsapp Bot*", {jpegThumbnail:pic}, [{buttonId:`${prefix}groupsetmen`,buttonText:{displayText:'GROUP SETTING'},type:1}, {buttonId:`${prefix}report`,buttonText:{displayText:'REPORT BUG'},type:1}], {quoted:dev})
   }else{
   	sendButLocation(from, `${menusu}`, "*© Miku Whatsapp Bot*", {jpegThumbnail:pic}, [{buttonId:`${prefix}inventory`,buttonText:{displayText:'MY PROFILE'},type:1}, {buttonId:`${prefix}report`,buttonText:{displayText:'REPORT BUG'},type:1}], {quoted:dev})
   }
					await limitAdd(sender)
					break
					
					case 'nsfw':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
					if (!isGroupAdmins) return reply('Bot Harus Menjadi Admin')
					if (args.length < 1) return reply('Masukan Parameter 1/0')
					if (Number(args[0]) === 1 ) {
						if (isNsfw) return reply('Udah aktif um')
						nsfw.push(from)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan fitur nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0 ) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses menonaktifkan fitur nsfw di group ini ✔️')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
					
					case 'yuri':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                       if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                reply('Getting Data From Server....')
                try {
                res = await getBuffer('https://hadi-api.herokuapp.com/api/yuri')
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, res, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				case 'sologirl':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                       if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                reply('Getting Data From Server....')
                try {
                res = await getBuffer('https://dapuhy-api.herokuapp.com/api/nsfw/nsfwgirlsolo?apikey=miku')
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, res, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				case 'pussyart':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                       if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                reply('Getting Data From Server....')
                try {
                res = await getBuffer('https://dapuhy-api.herokuapp.com/api/nsfw/nsfwpussyart?apikey=miku')
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, res, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				case 'nsfwkitsune':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                       if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                reply('Getting Data From Server....')
                try {
                res = await getBuffer('https://dapuhy-api.herokuapp.com/api/nsfw/nsfwpussyart?apikey=miku')
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, res, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				
				case 'animensfw':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                       if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                reply('Getting Data From Server....')
                try {
                res = await getBuffer('https://hadi-api.herokuapp.com/api/anime')
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, res, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				case 'hentai':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                       if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                
                reply('Getting Data From Server....')
                try {
                res = await getBuffer('https://hadi-api.herokuapp.com/api/hentai')
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, res, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				    
				case 'waifunsfw':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                reply('[INFO] Fitur Ini Dalam Masa Maintenance Gunakan Fitur NSFW Lain')
                try {
                res = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
                has = await getBuffer(res.url)
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, has, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				    
				case 'nsfwneko':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                reply('[INFO] Fitur Ini Dalam Masa Maintenance Gunakan Fitur NSFW Lain')
                try {
                res = await fetchJson(`https://api.waifu.pics/nsfw/neko`)
                has = await getBuffer(res.url)
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, has, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				    
				case 'nsfwtrap':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                reply('[INFO] Fitur Ini Dalam Masa Maintenance Gunakan Fitur NSFW Lain')
                try {
                res = await fetchJson(`https://api.waifu.pics/nsfw/trap`)
                has = await getBuffer(res.url)
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, has, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				    case 'nsfwboruto':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                reply('Getting Data From Server....')
                try {
                res = await fetchJson('http://127.0.0.1:3000/nsfwboruto')
                has = await getBuffer(res.result)
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, has, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
				
				case 'nsfwcosplay':
					      if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                       if (isLimit(sender)) return 
                if (!isNsfw) return reply('Memerlukan Izin Untuk Mengirim Konten Dewasa!! Hidupkan Fitur NSFW Terlebih dahulu!!!')
                if (!isGroup) return reply('Hanya Bisa Digunakan Didalam Group')
                reply('Getting Data From Server....')
                try {
                res = await fetchJson('http://127.0.0.1:3000/nsfwcosplay')
                has = await getBuffer(res.result)
                } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                client.sendMessage(from, has, image, {quoted: dev, caption: 'Done'})
                await limitAdd(sender)
				    break
					
					case 'waifu':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`https://api.waifu.pics/sfw/waifu`, {method: 'get'})
					} catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
                    pok = await getBuffer(res.url)
					client.sendMessage(from, pok, image, { quoted: dev, caption: `*nih*`})
					await limitAdd(sender)
					break
					
					case 'attp':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
				anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				} catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
				client.sendMessage(from, anu, sticker, {quoted: dev})
				await limitAdd(sender)
				break
    
    case 'nekonime':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
    reply("Getting Data From Server....")
    try {
		data = await fetchJson(`https://mhankbarbar.herokuapp.com/api/nekonime`)
		} catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
     tod = await getBuffer(data.result)
    client.sendMessage(from, tod, image, {quoted: dev, caption: 'Done'})
    await limitAdd(sender)
    break
    
    case 'loli':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`https://api.zeks.me/api/gimg?apikey=9hid7u5aEFpO3TNqf5OapmcJ7lb&q=loli+cute+image`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					n = (res.data)
					nidev =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nidev)
					client.sendMessage(from, pok, image, { quoted: dev, caption: `*nih*`})
					await limitAdd(sender)
					break
					
					case 'shinobu':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`https://waifu.pics/api/sfw/shinobu`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					pok = await getBuffer(res.url)
					client.sendMessage(from, pok, image, { quoted: dev, caption: `*nih*`})
					await limitAdd(sender)
					break
					
					case 'husbu':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`https://api.zeks.me/api/gimg?apikey=9hid7u5aEFpO3TNqf5OapmcJ7lb&q=anime+boy+image`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					n = (res.data)
					nidev =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nidev)
					client.sendMessage(from, pok, image, { quoted: dev, caption: `*nih*`})
					await limitAdd(sender)
					break
					
					case 'animewallpaper':
    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`https://api.zeks.me/api/gimg?apikey=9hid7u5aEFpO3TNqf5OapmcJ7lb&q=anime+wallpaper+smartphone`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					n = (res.data)
					nidev =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nidev)
					client.sendMessage(from, pok, image, { quoted: dev, caption: `*nih*`})
					await limitAdd(sender)
					break
					
					case 'funfact':
					  if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`http://vikoapi-index.herokuapp.com/api/fakta?apikey=P5ivWiwA`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					reply(res.result)
					await limitAdd(sender)
					break
					
					case 'bijak':
					  if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`http://vikoapi-index.herokuapp.com/api/bijak?apikey=P5ivWiwA`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					reply(res.result)
					await limitAdd(sender)
					break
					
					case 'motivasi':
					  if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`http://vikoapi-index.herokuapp.com/api/motivasi?apikey=P5ivWiwA`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					reply(res.result)
					await limitAdd(sender)
					break
					
					case 'nulis':
					nul = body.slice(7)
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await getBuffer(`https://hadi-api.herokuapp.com/api/nulis?teks=${nul}`)
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					client.sendMessage(from, res, image, {quoted: dev, caption: `Nih`})
					await limitAdd(sender)
					break
					
					case 'quotes':
					  if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				reply("Getting Data From Server....")
				try {
    res = await fetchJson(`http://vikoapi-index.herokuapp.com/api/quotes?apikey=P5ivWiwA`, {method: 'get'})
    } catch (e) {
						console.log('Error :', e)
						reply('*[DOWN]* Server Rest API Sedang Down Coba Lagi Nanti, Jika Masalah Ini Terus Berlanjut Hubungi Admin!!')}
					hasil = `*Teks :* _${res.quotes}_\n*Author:* ${res.author}`
					reply(hasil)
					await limitAdd(sender)
					break
					
					case 'sticker':
					case 's':
					case 'stiker':
          reply('[ 📤 ] Uploading Image >> Telegra.ph')
          var a = "Created With";
          var b = "Miku Bot";
          if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
           media = await client.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          console.log(media)
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
          .on('exit', () => {
          client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
          const media = await client.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
          .on('exit', () => {
          client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await client.downloadAndSaveMediaMessage(encmedia)
            createExif(a, b);
            modStick(media, client, dev, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break
          
          
          //Group
					
					case 'adminlist':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender)
					break
					case 'grup':
					case 'group':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					if (args[0] === 'open') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					await limitAdd(sender)
					break
				case 'add':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* TARGET MUNGKIN DI PRIVATE:)')
					}
					await limitAdd(sender)
					break
			     	case 'kick':
			if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 ??𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					await limitAdd(sender)
					break
                case 'everyone':
                if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: dev
					}
					client.sendMessage(from, options, text)
				await limitAdd(sender)
					break					
    
                 case 'linkgrup':
                 if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: dev})
			 await limitAdd(sender)
					break
					
					case 'setname':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: dev})
                await limitAdd(sender)
					break
					
					case 'setdesc':
                if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, {quoted: dev})
                await limitAdd(sender)
					break
           case 'demote':
           if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					await limitAdd(sender)
					break
				case 'promote':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶??𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					await limitAdd(sender)
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
					client.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					
					case 'revoke': 
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
                        client.revokeInvite(from)
                        await limitAdd(sender)
                        break
                        
                        case 'antilink':
					if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mengaktifkan antilink digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mematikan antilink digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					await limitAdd(sender)
					break
					case 'antivirtex':
if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
					    if (isLimit(sender)) return
                        if (!isGroup) return reply('Ini Adalah Command Khusus Group')
                       if (!isGroupAdmins) return reply('*[CANCEL]* Hanya Untuk Admin Grup')
                        if (!isBotGroupAdmins) return reply('*[INFO]* Bot Memerlukan Otoritas Admin')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiVirtex) return reply('Sudah Aktif')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes menyalakan antivirtex di group ini_')
} else if (args[0] === "0") {
if (!AntiVirtex) return reply('Sudah Mati')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes mematikan antivirtex di group ini_')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
await limitAdd(sender)
break
          
          case 'ttt':
        case 'tictactoe':
          if (!isGroup) return reply("mainkan di group")
          if (args.length < 1) return reply ("tag orang yang mau kamu aja main")
          if (isTTT) return reply("permainan sedang berlangsung di group ini")
          if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Tag salah satu orang untuk di ajak bermain')
          ment = dev.message.extendedTextMessage.contextInfo.mentionedJid;
          player1 = sender
          player2 = ment[0]
          number = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
          id = from
          turn = player2
          roomttt.push({player1,player2,id,number,turn})
          client.sendMessage(from, `@${player1.split("@")[0]} Telah Memulai Game\n\n*@${player2.split("@")[0]}* anda di tantang untuk bermain game tic tac toe oleh *@${player1.split("@")[0]}*\nketik Y/N untuk menerima/menolak tantangan\n\nketik ${prefix}delttt untuk membatalkan permainan di group ini`, text, {contextInfo: {mentionedJid: player2}})
          break;
          case 'delttt':
          if (!isGroup) return reply("command ini hanya untuk group")
            if (!isTTT) return reply("tidak ada permainan yang sedang berlangsung")
          rooms = roomttt.filter(titid => titid.id.includes())
          roomttt = rooms;
          reply("Sukses Membatalkan Permainan")
          break;
        
        case 'suit':
          if (args.length < 1) return reply("pilih batu/gunting/kertas | Ex: !suit batu")
          if (args[0] === "gunting") {
            gunting = [
              "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
              "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
              "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
              ]
            gun = gunting[Math.floor(Math.random() * gunting.length)]
            reply(gun)
          } else if (args[0] === 'kertas') {
            ker = [
              "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
              "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
              "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
              ]
            kertas = ker[Math.floor(Math.random() * ker.length)]
          	reply(kertas)
          } else if (args[0] === 'batu') {
            bat = [
              "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
              "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
              "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
              ]
            batu = bat[Math.floor(Math.random() * bat.length)]
            reply(batu)
          } else {
            reply('Pilih gunting/batu/kertas')
          }
          break; 
          
          case 'nobadword':
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Masuka Parameter 1/0')
                if (Number(args[0]) === 1 ) {
                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`[WARN] Anti Kata Kasar Telah Diaktifkan Di Grup Ini!! Gunakan Perintah !addbadword untuk menambah kata larangan`)
              	  } else if (Number(args[0]) === 0 ) {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`[WARN] Anti Kata Kasar Telah Dimatikan`)
             	   } else {
                 	   reply('[INFO] Masukan Parameter 1/0')
                	}
                    break
                    
                    case 'addbadword':
                    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    
                       case 'mining':
                if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                if (isMagic) {
            
                      	const mining2 = Math.ceil(Math.random() * 30000)
                      reply(`*> [ GOLD MINER ] <*
──────────────────

*> | ABILITY INFO | <*

• _Magic Run Aktif_ •
📈 Kecepatan Menambang
📈 Kapasitas Penyimpanan

*> | DETAIL | <*
Waktu : 30 Detik
Kapasitas : Max 30000`)
                      setTimeout( () => {
                      addKoinUser(sender, mining2)
                      reply(`*[MINER]* Selamat ${pushname} Kamu Mendapatkan Coin: *${mining2}*\n\n *Hasil Telah Masuk Ke Saldomu:)*`)
                      }, 30000) // 1000 = 1s,
                      
                      }else{
                      	const mining = Math.ceil(Math.random() * 3000)
                      reply(`*> [ GOLD MINER ] <*
──────────────────

*> | ABILITY INFO | <*
Anda Tidak Memiliki Item Sihir Apapun, Kecepatan Dan Kapasitas Menambang Normal.

*> | DETAIL | <*
Waktu : 3 Menit
Kapasitas : Max 3000 Koin`)
                      setTimeout( () => {
                      addKoinUser(sender, mining)
                      reply(`*[MINER]* Selamat ${pushname} Kamu Mendapatkan Coin: *${mining}*\n\n *Hasil Telah Masuk Ke Saldomu:)\n*`)
                      }, 180000) // 1000 = 1s,
                      	}
					break
					
					case 'ticketopen':
					var not = Math.floor(1000 + Math.random() * 9000);
					const ttu = `Ruang Support Telah Dibuat Dengan Nomer Ticket *#${not}* Silahkan Sampaikan Kendala, Kritik Atau Saran Anda Disana!!!`
					reply(ttu)
					const own = `6282331787920@s.whatsapp.net`
					const groupi = await client.groupCreate (`SUPPORT OPEN #${not}`, [sender])
					client.sendMessage(own, `*[NOTIF]* ADA TICKET YANG BELUM DIBACA`, text)
					console.log ("created group with id: " + groupi.gid)
					const ttiket = `Hai *${pushname}* Sebelumnya Kami Ucapakan Terimakasih Karena Telah Menggunakan *Miku Bot*\n\nSilahkan Sampaikan Kendala, Kritik Atau Saran Anda, Dan Tunggu Sampai Moderator Kami Menanggapinya!!\n\nJika Ingin *Menutup* Sesi Support Ini, Silahkan Klik Tombol ✅ Dibawah`
					sendButtonMsg(groupi.gid, ttiket, `Ticket By Miku Bot *#${not}*`,[{
                    buttonId: `${prefix}tclose`,
                    buttonText: {
                    displayText: "✅"
                    },
                    type: 1
                    }])
                    break
                    
                    case 'tclose':
                    reply('Baik, Terimakasih Telah Menghubungi Kami!!')
                    client.groupUpdateSubject(from, `TICKET CLOSED`)
                    client.groupRemove(from, [sender])
                    setTimeout( () => {
                    client.groupLeave(from)
                    }, 9000)
                    break
                    
                    case 'report':
                    const tre = `Punya Masukan, Saran Atau Kritik? Sampaikan Kepada *Moderator* Kami Melalui Tombol Dibawah Ini`
                    sendButtonMsg(from, tre, `Miku Support`,[{
                    buttonId: `${prefix}ticketopen`,
                    buttonText: {
                    displayText: "LANJUT REPORT"
                    },
                    type: 1
                    }])
                    break
                    
                    case 'groupsetmen':
                    const tre2 = `Hanya *Admin* Yang Dapat Menggunakan Fitur Ini!!`
                    if (!isGroupAdmins) return sendButtonMsg(from, tre2, `Miku Bot`,[{
                    buttonId: `${prefix}groupsetmen`,
                    buttonText: {
                    displayText: "GROUP SETTING"
                    },
                    type: 1
                    }])
                        if (isBotGroupAdmins){
                        	const stmen = `*Apa Yang Ingin Kamu Atur?*\n_Silahkan Pilih Beberapa Tombol Dibawah Ini!!_`
                        sendButtonMsg(from, stmen, `Group Setting`,[{
                    buttonId: `${prefix}anl`,
                    buttonText: {
                    displayText: "ANTI LINK"
                    },
                    type: 1
                    },{buttonId: `${prefix}ant`,
                    buttonText: {
                    displayText: "ANTI TOXIC"
                    },
                    type: 1
                    },{buttonId: `${prefix}ns`,
                    buttonText: {
                    displayText: "NSFW"
                    },
                    type: 1
                    }])} else {
                    	const tre3 = `Bot Harus Menjadi Admin`
                    	 sendButtonMsg(from, tre3, `Miku Bot`,[{
                    buttonId: `${prefix}groupsetmen`,
                    buttonText: {
                    displayText: "GROUP SETTING"
                    },
                    type: 1
                    }])}
                    break
                    
                    case 'anl':
                    const anl = `*[ANTI LINK]*\n\nFitur Ini Bermanfaat Jika Kalian Ingin Group Kalian Terbebas Dari Sebuah Link Whatsapp\nUntuk Mengaktifkan Klik Tombol Dibawah!!`
                    const anl2 = `*[ANTI LINK]*\n\nFitur Ini Sudah Aktiv Sebelumnya!!! Klik Tombol Dibawah Untuk Menonaktifkan Fitur Ini!!`
                    if (isAntiLink){
                    sendButtonMsg(from, anl2, `Miku Support`,[{
                    buttonId: `${prefix}antilink 0`,
                    buttonText: {
                    displayText: "DISABLE"
                    },
                    type: 1
                    }])
                    } else{
                    	sendButtonMsg(from, anl, `Miku Support`,[{
                    buttonId: `${prefix}antilink 1`,
                    buttonText: {
                    displayText: "ENABLE"
                    },
                    type: 1
                    }])}
                    break
                    
                    case 'ant':
                    const ant = `*[ANTI TOXIC]*\n\nFitur Ini Bermanfaat Jika Kalian Ingin Group Kalian Terbebas Dari Sebuah Kata-Kata Kasar\nUntuk Mengaktifkan Klik Tombol Dibawah!!`
                    const ant2 = `*[ANTI TOXIC]*\n\nFitur Ini Sudah Aktiv Sebelumnya!!! Klik Tombol Dibawah Untuk Menonaktifkan Fitur Ini!!`
                    if (isBadWord){
                    sendButtonMsg(from, ant2, `Miku Support`,[{
                    buttonId: `${prefix}nobadword 0`,
                    buttonText: {
                    displayText: "DISABLE"
                    },
                    type: 1
                    }])
                    } else{
                    	sendButtonMsg(from, ant, `Miku Support`,[{
                    buttonId: `${prefix}nobadword 1`,
                    buttonText: {
                    displayText: "ENABLE"
                    },
                    type: 1
                    }])}
                    break
                    
                    case 'ns':
                    const ns = `*[NSFW]*\n\nFitur Ini Merupakan Tombol Untuk Mengaktifkan Otoritas Bot Dapat Mengirimkan Konten 18+\nUntuk Mengaktifkan Klik Tombol Dibawah!!`
                    const ns2 = `*[NSFW]*\n\nFitur Ini Sudah Aktiv Sebelumnya!!! Klik Tombol Dibawah Untuk Menonaktifkan Fitur Ini!!`
                    if (isNsfw){
                    sendButtonMsg(from, ns2, `Miku Support`,[{
                    buttonId: `${prefix}nsfw 0`,
                    buttonText: {
                    displayText: "DISABLE"
                    },
                    type: 1
                    }])
                    } else{
                    	sendButtonMsg(from, ns, `Miku Support`,[{
                    buttonId: `${prefix}nsfw 1`,
                    buttonText: {
                    displayText: "ENABLE"
                    },
                    type: 1
                    }])}
                    break
                    
                    case 'fishing':
                    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
                    if (!isGroupAdmins) return reply(ind.admin())
				if (isLimit(sender)) return
                    if (args.length < 1) return reply('Masukan Spot Mancing')
                    if (args[0] === "indonesia" ) {
                    const koinPerindo = 100
                                        const total = koinPerindo
                                                confirmATM(sender, total)
                                                reply(`Lokasi : Indonesia\nPajak : Free\nWaktu : 30 Detik\n_Sedang Memancing, Lokasi Ini Membutuhkan Waktu 30 Detik_`)
                                        
                      const ikan = Math.ceil(Math.random() * 25)
                      setTimeout( () => {
                      addIkanUser(sender, ikan)
                      reply(`🎣Selamat ${pushname} Kamu Mendapatkan *${ikan}*🐟 Ikan\n\n *Hasil Telah Masuk Ke Invertory Mu:)*`)
                      }, 30000) // 1000 = 1s,
                      } else if (args[0] === "vietnam") {
                      	const koinPerViet = 300
                                        const total2 = koinPerViet
                                        if ( checkATMuser(sender) <= total2) return reply(`🏧Maaf Uang Kamu Belum Mencukupi Untuk Memancing Di Spot Ini. Coba Lagi Nanti`)
                                        if ( checkATMuser(sender) >= total2 ) {
                                                confirmATM(sender, total2)
                                                reply(`Lokasi : Vietnam\nPajak : 300\nWaktu : 1 Menit\n_Sedang Memancing, Lokasi Ini Membutuhkan Waktu 1 Menit_`)
                                        }
                      const ikan2 = Math.ceil(Math.random() * 20)
                      setTimeout( () => {
                      addikan2User(sender, ikan2)
                      reply(`🎣Selamat ${pushname} Kamu Mendapatkan *${ikan2}*🐡 Ikan\n\n *Hasil Telah Masuk Ke Invertory Mu:)*`)
                      }, 60000) // 1000 = 1s,
                      	} else {
                      	const mancmenu = `*[ FISHING MENU ]*\n\n_Lokasi Yang Tersedia Saat Ini :_\n*1.*Indonesia\n*Skor Lokasi :* 4.2\n*Biaya :* 100 Koin\n*1.*vietnam\n*Skor Lokasi :* 4.7\n*Biaya :* 300 Koin\n\nUntuk Memulai Menangkap Ikan Ketik !fishing tempat | Ex: !fishing indonesia\n*Lokasi* Fishing Akan Di Tambah Secara Bertahap!!!`
                      reply(mancmenu)
                      }
                      await limitAdd(sender)
                      break
  
                      case 'tebakanime': case 'ta':{
if (!isGroup) return reply('Hanya Dapat Digunakan Dalam Group')
if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
if (game.isTebakAnime(from, tebakanime)) return reply(`[GAGAL] Masih Ada Soal Yang Belum Di Selesaikan`)
let anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/anime/tebakwaifu?apikey=miku`)
const petunjuk = anu.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendMediaURL(from, anu.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), dev)
let nurulsayank = anu.result.name.toLowerCase()
game.addanime(from, nurulsayank, gamewaktu, tebakanime)
}
await limitAdd(sender)
break

case 'daily':   
if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
                    if (isClaimOn) return reply('Kamu Telah Klaim Hari Ini!!! Lakukan Lagi Besok')
                    var htgn6 = randomNomor(1000)
                    addLevelingXp(sender, htgn6)
                    var htgm6 = randomNomor(5000)
                    addKoinUser(sender, htgm6)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(`*── 「 CLAIM  」 ──*
                    
Selamat Hamu Mendapatkan\n*${htgn6} XP*\n*${htgm6} Koin*
Dari Claim Harian!! Klaim Lagi Besok Untuk Mendapatkan Lebih Banyak Hadiah!!`)
await limitAdd(sender)
                    break
                    
                    case 'resetdata':
				if (!isOwner && !dev.key.fromMe) return reply("Hanya Owner")
				var obj = [] 
                fs.writeFileSync('./database/claim.json', JSON.stringify(obj))
				await reply(`DATA BERHASIL DI RESET`)
				break 
				
				
					//GAME NYA NGAB 
                    
                    case 'adventure': 
                    if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				    ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
				    const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
				    await setTimeout(() => {
                    reply(`${pushname} Sedang Berpetualang`)
                    }, 1000)		
                    await setTimeout(() => {		    
				    reply(`Tiba Tiba Ada ${sesuatu}`)
				    }, 2000)		
				    await setTimeout(() => {
				     reply(`AWAS!!`)
				    }, 3000)		
			        const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
			        const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
				    anu = fs.readFileSync('./database/adventure/dungeon.js');
                    jsonAnu = JSON.parse(anu);
                    randIndex = Math.floor(Math.random() * jsonAnu.length);
                    randKey = jsonAnu[randIndex];
                    hasil = await getBuffer(randKey.result)
				    const adven = Math.ceil(Math.random() * 7000)
                    addLevelingXp(sender, adven)
				    const money = Math.ceil(Math.random() * 6000)
				    addKoinUser(sender, money)
				    client.sendMessage(from, hasil, image, { quoted: dev, caption: `◪ *「 DEATH 」*\n\n├─ ❏ *Tempat  ${ad}*\n├─ ❏ *MONEY : Rp.${money}*\n├─ ❏ *EXP : ${adven}Xp*` })
				    await limitAdd(sender)
				    break 
				
				case "ytmp4":
				if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply('Masukan Url Yang Valid');
        try {
          reply('Getting Data From Server...');
          ytv(args[0]).then((res) => {
            const { dl_link, foto, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    foto,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk Filesize lebih dari batas whatsapp!!! Bot Tidak Bisa Mengirimnya_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, foto, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply('Gagal!! Kesalahan Mungkin Disebabkan Oleh Penyedia Layanan API'));
              });
          });
        } catch (err) {
          reply('Gagal!! Kesalahan Mungkin Disebabkan Oleh Penyedia Layanan API');
        }
        limitAdd(sender)
        break;   
        
   case "ytmp3": 
   if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply('Masukan URL Dengan Benar');
        try {
          reply('Getting Data From Server...');
          yta(args[0]).then((res) => {
            const { dl_link, foto, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    foto,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam rojaktuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, foto, captions);
                sendMediaURL(from, dl_link).catch(() => reply('Gagal!! Kesalahan Mungkin Disebabkan Oleh Penyedia Layanan API'));
              });
          });
        } catch (err) {
          reply('Gagal!! Kesalahan Mungkin Disebabkan Oleh Penyedia Layanan API');
        }
        limitAdd(sender)
        break; 
        
        case 'mediafire':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        if (args.length < 1) return reply('Masukan URL Dengan Benar')
        anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/mediafire?url=${args[0]}&apikey=miku`)
        const mddata = `*[ MediaFire Direct Link Generator ]*\n\n*Name:* ${anu.result.nama}\n*Type:* ${anu.result.mime}\n*Size:* ${anu.result.size}\n*Link:* ${anu.result.link}`
        reply(mddata)
        limitAdd(sender)
        break
        
        case 'asupan':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        reply('Wait..')
        anu = `https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=miku`
        sendMediaURL(from, anu)
        limitAdd(sender)
        break
        
        case 'amv':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        reply('Wait..')
        anu = `https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=miku`
        sendMediaURL(from, anu)
        limitAdd(sender)
        break
        
        case 'imgquotes':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        reply('Wait..')
        anu = `https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=miku`
        sendMediaURL(from, anu)
        limitAdd(sender)
        break
        
        case 'darkjokes':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        reply('Wait..')
        anu = `https://dapuhy-api.herokuapp.com/api/randomimage/darkjokes?apikey=miku`
        sendMediaURL(from, anu)
        limitAdd(sender)
        break
        
        case 'cerpen':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        reply('Wait..')
        anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/cerpen?apikey=miku`)
        cerpen = `*[ RANDOM CERPEN ]*\n\n*JUDUL* : ${anu.result.judul}\n*GENRE* : ${anu.result.kategori}\n\n${anu.result.cerita}`
        reply(cerpen)
        limitAdd(sender)
        break
        
        
        case 'samehadaku':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				if (args.length < 1) return reply('Masukan Judul Anime Dengan Benar')
        reply('Wait..')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/anime/samehadaku?query=${args[0]}&apikey=miku`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*Status* : ${i.status}\n*Type* : ${i.type}\n*Sinopsis* : ${i.desc}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					limitAdd(sender)
					break
					
					case 'isekaisub':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				if (args.length < 1) return reply('Masukan Judul Anime Dengan Benar')
        reply('Wait..')
					client.updatePresence(from, Presence.composing) 
					data2 = await fetchJson(`https://dapuhy-api.herokuapp.com/api/anime/isekaisubs?query=${args[0]}&apikey=miku`, {method: 'get'})
					teks2 = '=================\n'
					for (let i of data2.result) {
						teks2 += `*Title* : ${i.title}\n*Status* : ${i.status}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					limitAdd(sender)
					break
				
					case 'manga':
        if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
				if (args.length < 1) return reply('Masukan Judul Anime Dengan Benar')
        reply('Wait..')
        anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/manga/komikstation?query=${args[0]}&apikey=miku`)
        const dmanga = `*Judul* : ${anu.result.title}\n*Total Chapter* : ${anu.result.episode}\n*Url* : ${anu.result.url}`
        const thma = await getBuffer(anu.result.thumb)
        client.sendMessage(from, thma, image, { caption: dmanga, quoted: dev })
        break
        
        case 'wait':
           if (!isUser) return reply('Hai Kak!! Kamu Belum Terdaftar!!! Silahkan Ketik #verify Untuk Memverifikasi Akun Anda')
				if (isLimit(sender)) return
        if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply('Wait...')
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: dev, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
					
default:
//tictactoe func start
if (isTTT && isPlayer2) {
            if (budy.startsWith("Y")){
    tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*
Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕
${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}
giliran = @${tty.player1.split('@')[0]}`
              client.sendMessage(from, teksboard, text, {quoted: dev, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            if (budy.startsWith('N')) {
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              client.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:dev,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '❎'
            main[0].number[noober] = s
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              client.sendMessage(from, ucapan1, text, {quoted:dev, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            client.sendMessage(from, ucapan, text, {quoted: dev, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '🅾️'
            main[0].number[noober] = s
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              client.sendMessage(from, ucapan1, text, {quoted:dev, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            client.sendMessage(from, ucapan, text, {quoted: dev, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }


//function tictactoe end
if (button == 'CREATOR') {
console.log('CREATOR')
let inilist = []
for (let i of ownerNumber) {
const vname = client.contacts[i] != undefined ? client.contacts[i].vname || client.contacts[i].notify : undefined
inilist.push({
"displayName": 'Pengembang Bot',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${client.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await client.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: dev })
client.sendMessage(from,'Nih Kak Creator Ndyie-Botz',text,{quoted: hehe})
}
if (button == 'SEWA BOT') {
console.log('SEWA BOT')
client.sendMessage(from, `*── 「 PRICE LIST 」 ──*\n \n*Sewa Ndyie-Botz*\n*Keuntungan Sewa Diantaranya:*\n♲ *Bisa Dimasukan Ke Grup Anda*\n♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*\n*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*\n*Dana : 083818744065*\n*Gopay : 083818744065*\n*Gopay : 083818744065*\n*OVO : 083818744065 atau melalui Qris*\n \n*= Rp. 2.000 /PERBULAN*\n*= Rp. 5.000 /PERMANEN*\n \nDi Sponsori Oleh *@083818744065*\n*Info Lebih Lengkap Chat Owner, Ketik !owner*\n*_note_*:\n*Sewa Bot Pada Tanggal 7 November Cuma Rp.1.000 ( Spesial ULTAH KE-16 )*`, text, {quoted: dev})
}
if (button == 'RULES BOT') {
console.log('RULES BOT')
client.sendMessage(from, `*RULES BOT*\n \n1. Jangan spam bot. \nSanksi: *WARN/SOFT BLOCK*\n2. Jangan telepon bot.\nSanksi: *SOFT BLOCK*\n \n3. Jangan mengejek bot.\nSanksi: *PERMANENT BLOCK*\n \n3. Gpp sc gw jelek yg penting \nBot gw jalan awokawoak\nJika sudah dipahami rules-nya, silakan ketik *!menu* untuk memulai!\n \n*Jika ingin Sc ini harap hubungi owner kami*\n \nOwner Ndyie-Botz:\nwa.me/6283818744065`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/c6990a64b71687dc1157e.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: dev})
}
if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@Ndyie Ndyie-Botz:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), `${fake}`, color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
