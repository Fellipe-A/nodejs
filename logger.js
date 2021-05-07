const EventEmitter = require('events')
const fs = require('fs') // fs works with filesystem
const path = require('path') // Take files paths, independently of operating system

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})

function log(message) {
    emitter.emit('log', message)
}

module.exports = log