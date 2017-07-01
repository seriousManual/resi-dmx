const debug = require('debug')('resi-dmx:pattern:shutdown')

const fadeBrightness = require('./lib/fadeBrigthness')

function shutdown(devices) {
    const patterns = require('../patterns')

    debug('shutdown')

    patterns.default(devices)

    const intervalHandle = setInterval(() => {
        devices.forEach(device => {
            device.brightness = device.brightness - 0.01
            debug(device.brightness)

            if (device.brightness <= 0.05) {
                clearInterval(intervalHandle)
            }
        })
    }, 100)

    return {
        stop: () => clearInterval(intervalHandle)
    }
}

module.exports = shutdown