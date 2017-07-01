const debug = require('debug')('resi-dmx:pattern:alarm')

function alarm (devices) {
    let currentTimeout = null

    function cycle() {
        allRed()
        currentTimeout = setTimeout(() => {
            allOff()
            currentTimeout = setTimeout(cycle, 800)
        }, 400)
    }

    function allRed() {
        debug('allRed')
        devices.forEach(device => {
            device.brightness = 1
            device.color = '#f00'
        })
    }

    function allOff() {
        debug('allOff')
        devices.forEach(device => device.brightness = 0)
    }

    cycle()

    return {
        stop: () => {
            if (currentTimeout) {
                clearTimeout(currentTimeout)
            }
        }
    }
}

module.exports = alarm