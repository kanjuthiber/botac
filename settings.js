const fs = require('fs')
const chalk = require('chalk')

global.ownerNumber = ['6281320843460']
global.ownerName = 'Egi'

global.botName = 'Hostage'
global.footer = 'Made with ❤️ by @moreegih'
global.thumb = 'https://telegra.ph/file/a9c87ad6a537229b3e4ea.jpg'
global.payment = 'https://telegra.ph/file/792d09c9c8335cc3abb73.jpg'

global.packname = 'Hostage Bot'
global.author = 'Developed by @moreegih'

global.prefa = ['.']

global.quotes = {
  welcome: '*Welcome cuy, gausah banyak tingkah & selalu patuhi peraturan yg ada di Grup ini.*',
  leave: '*Goodbye cuy*'
}

global.mess = (type, m) => {
  let msg = {
    done: 'Done cuy',
    wait: 'Wait cuy',
    owner: 'Perintah ini hanya dapat digunakan oleh *Owner*',
    premium: 'Perintah ini hanya dapat digunakan oleh *Premium*',
    group: 'Perintah ini hanya dapat digunakan didalam *Group*',
    private: 'Perintah ini hanya dapat digunakan di *Private Chat*',
    admin: 'Perintah ini hanya dapat digunakan oleh *Admin Group*',
    botAdmin: 'Bot bukan admin, tidak dapat mengeksekusi fitur tersebut',
    bot: 'Fitur ini hanya dapat diakses oleh Bot',
    dead: 'Fitur ini sedang dinonaktifkan',
    media: 'Reply media',
    error: "_Error_"
  } [type]
  if (msg) return m.reply(msg, m.from, { quoted: m })
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
