const {EventEmitter} = require('events')
const events = new EventEmitter()

events.on('saySomething', (message) => {
    console.log('Eu esperava mais kkkk', message)
})
/* events.once ouve apenas uma vez */
events.emit('saySomething', "senhor NodeJs")
