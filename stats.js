// Show system memory info every second

const os = require('os')

setInterval(() => {
    const { freemem, totalmem } = os

    const mem = parseInt(freemem() /1024 /1024)
    const total = parseInt(totalmem() /1024 /1024)
    const usedmem = total - mem
    const percents = parseInt((1 - (mem / total)) * 100)
    
    const stats = {
        free: `${mem} MB`,
        used: `${usedmem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    
    console.clear()
    console.log("######## PC STATS ########")
    console.table(stats)
}, 1000);

