const debug = require('debug')('resi-dmx:pattern:default')

const fadeBrightness = require('./lib/fadeBrigthness')
const fadeColor = require('./lib/fadeColor')

function defaultPattern(devices) {
    debug('default')

    devices.forEach(device => {
        device.color = '#ffd800'
        device.brightness = 1
    })

    return {
        stop: () => true
    }

    //let handleBrightness = fadeBrightness(devices, 1)
    //let handleColor = fadeColor(devices, '#ffd800')
    //
    //return {
    //    stop: () => {
    //        handleBrightness.stop()
    //        handleColor.stop()
    //    }
    //}
}

module.exports = defaultPattern