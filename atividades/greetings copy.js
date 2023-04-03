const getFlagsValue = require('./flags')
console.log(`oi ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')} `)