const { wikimedia } = require('../../lib/Scraper')

module.exports = {
  name: "wikimedia",
  cmd: ['wikimedia'],
  category: 'random',
  example: `Use : %prefix%command <query>`,
  start: async (mom, m, { commands, text, args }) => {
    let anu = await wikimedia(text)
    result = anu[Math.floor(Math.random() * anu.length)]
    let but = [{buttonId: `.wikimedia ${args[0]}`, buttonText: {displayText: 'Next Result'}, type: 1}]
    mom.sendMessage(m.from, { image: { url: `${result.image}` }, caption: `𝐓𝐢𝐭𝐥𝐞 : ${result.title}\n𝐒𝐨𝐮𝐫𝐜𝐞 : ${result.source}\n𝐌𝐞𝐝𝐢𝐚 𝐔𝐫𝐥 : ${result.image}`, buttons: but }, { quoted: m })
  },
  isQuery: true
}