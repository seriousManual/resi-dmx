const debug = require('debug')('resi-dmx:faders:fadeBrightness')

function fadeBrigthness(devices, to, callback = () => true) {
    let initialBrightness = devices[0].brightness

    let dir = initialBrightness < to ? 1 : -1
    let intervalHandle = setInterval(() => {
        devices.forEach(device => {
            let brightness = device.brightness + (0.01 * dir)

            debug(brightness)
            device.brightness = brightness

            if ((dir === 1 && device.brightness >= to) || (dir === -1 && device.brightness <= to)) {
                clearInterval(intervalHandle)
                callback()
            }
        })
    }, 100)

    return {
        stop: () => clearInterval(intervalHandle)
    }
}

module.exports = fadeBrigthness