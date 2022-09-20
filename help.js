const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {
return `━━━━━━━━━━━━━━━━━━━
*OTHERS MENU*
• ${prefix}simi
• ${prefix}obfus
• ${prefix}rules
• ${prefix}stats
• ${prefix}listgc
• ${prefix}listpc
• ${prefix}owner
• ${prefix}script
• ${prefix}menfes
• ${prefix}runtime
• ${prefix}sewabot
━━━━━━━━━━━━━━━
*BAILEYS MENU*
• ${prefix}afk
• ${prefix}react
• ${prefix}fitnah
• ${prefix}inspect
• ${prefix}towame
• ${prefix}hidetag
• ${prefix}fakehidetag
━━━━━━━━━━━━━━━
*STORE MENU*
• ${prefix}list
• ${prefix}addlist
• ${prefix}dellist
• ${prefix}update
• ${prefix}kali
• ${prefix}bagi
• ${prefix}kurang
• ${prefix}tambah
━━━━━━━━━━━━━━━
*TOPUP OTOMATIS*
• ${prefix}topupff
• ${prefix}topupml
━━━━━━━━━━━━━━━
*PROSES/DONE*
• proses < reply chat >
• done < reply chat >
• ${prefix}setproses
• ${prefix}changeproses
• ${prefix}delsetproses
• ${prefix}setdone
• ${prefix}changedone
• ${prefix}delsetdone
━━━━━━━━━━━━━━━
*WELCOME/LEFT*
• ${prefix}getleft
• ${prefix}setleft
• ${prefix}delleft
• ${prefix}changeleft
• ${prefix}setwelcome
• ${prefix}delwelcome
• ${prefix}getwelcome
• ${prefix}changewelcome
━━━━━━━━━━━━━━━
*GROUP SETTING*
• ${prefix}left on
• ${prefix}left off
• ${prefix}antilink on
• ${prefix}antilink off
• ${prefix}antiwame on
• ${prefix}antiwame off
• ${prefix}welcome on
• ${prefix}welcome off
━━━━━━━━━━━━━━━
*GROUP MENU*
• ${prefix}add
• ${prefix}kick
• ${prefix}linkgc
• ${prefix}infogrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}open
• ${prefix}close
• ${prefix}listsewa
• ${prefix}ceksewa
• ${prefix}setppgc
• ${prefix}setppgc 'panjang'
• ${prefix}setnamegc
• ${prefix}setdesc
• ${prefix}revoke
━━━━━━━━━━━━━━━
*OWNER MENU*
• ${prefix}bc
• ${prefix}join
• ${prefix}delsewa
• ${prefix}addsewa
• ${prefix}sendsesi
• ${prefix}setppbot 
• ${prefix}setthumb
• ${prefix}bugpc 628xxx
• ${prefix}sendbug 628xxx
• ${prefix}block 628xxx
• ${prefix}unblock 628xxx
• ${prefix}broadcast *text*
• ${prefix}setppbot 'panjang'
• ${prefix}creategc *namagrup*
━━━━━━━━━━━━━━━
*TOOLS/CONVERT*
• ${prefix}tts
• ${prefix}ttp
• ${prefix}attp
• ${prefix}isgd
• ${prefix}tourl
• ${prefix}cuttly
• ${prefix}tinyurl
• ${prefix}nulis
• ${prefix}reverse
• ${prefix}ssweb
• ${prefix}shorturl
• ${prefix}sticker
• ${prefix}swm
• ${prefix}stikerwm
• ${prefix}toimg
• ${prefix}emojimix
• ${prefix}emojimix2
• ${prefix}base32
• ${prefix}base64
• ${prefix}debase32
• ${prefix}debase64
• ${prefix}smeme
━━━━━━━━━━━━━━━
*DOWNLOADER*
• ${prefix}play
• ${prefix}musik
• ${prefix}tiktok
• ${prefix}ytmp3
• ${prefix}ytmp4
• ${prefix}gitclone
• ${prefix}mediafire
• ${prefix}facebook
• ${prefix}soundcloud
━━━━━━━━━━━━━━━
*EXECUTE*
• > evalcode
• x evalcode-2
• $ executor
━━━━━━━━━━━━━━━`
}

exports.textprem  = (sender, prefix) => {
return `Jika kamu ingin menjadi Member Premium, kamu cukup membayar 
Rp5.000 untuk 1 Minggu
Rp20.000 untuk 1 Bulan 
dan jika ingin menjadi Member Premium Permanen kamu hanya membayar Rp50.000. Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner

*Payment :* 
Dana/Qris/Ovo`
}

exports.textdonasi = (sender, prefix) => {
return `*DONASI BOT*

*E-walet Monay :*
➭ Dana : 0857-8900-4732
➭ Ovo : 0857-8900-4732
➭ Gopay : 08xxxxxxxxx
➭ Pulsa : 0857-8900-4732
    
*Qris All Payment :*
https://telegra.ph/file/d015def9028eb1c0a156b.jpg`
}