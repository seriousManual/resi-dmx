const debug = require('debug')('resi-dmx:pattern')

const alarm = require('./patterns/alarm')
const shutdown = require('./patterns/shutdown')
const defaultPattern = require('./patterns/default')
const defaultRet = { stop: () => true }

const patterns = {
    off: devices => {
        debug('off')

        devices.forEach(device => device.brightness = 0)

        return defaultRet
    },
    default: devices => {
        debug('default')

        defaultPattern(devices)

        return defaultRet
    },
    shutdown: devices => {
        debug('shutdown')

        return shutdown(devices)
    },
    alarm: devices => {
        debug('alarm')

        return alarm(devices)
    }
}

module.exports = patterns