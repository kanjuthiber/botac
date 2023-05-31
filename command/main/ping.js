require('../../settings')
require('@adiwajshing/baileys')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { runtime, formatp } = require('../../lib/Function')
const { getBuffer, muptime, jsonformat } = require('../../lib/Function')

module.exports = {
  name: "ping",
  cmd: ['ping','botstatus','statusbot','infobot'],
  category: 'main',
  start: async (mom, m, { text }) => {
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
    }, {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0
      }
    })
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    respon = `*Bot Information*\n*- Name :* Hostage Bot\n*Version :* 1.0\n*Developer :* Egi Corleone\n\n*Server Information*\n*- Hostname :* ${os.hostname}\n*- Platform :* ${os.platform()}\n*- RAM :* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n*Respon Speed :* ${latensi.toFixed(4)} _Second_\n\n*Runtime Bot :* ${runtime(process.uptime())}\n\n*Runtime OS :* ${Func.runtime(os.uptime())}\n\n*NodeJS Memory Usaage :*\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `*Total CPU Usage :*\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n\n*CPU Core(s) Usage (${cpus.length} Core CPU)*\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
    m.reply(respon)
  }
}
