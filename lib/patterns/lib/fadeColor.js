const Color = require('fivetwelve/lib-es5/util/color')
const debug = require('debug')('resi-dmx:faders:fadeColor')

function fadeColor(devices, to, callback = () => true) {
    let initalColor = new Color(devices[0].color)
    let finalColor = new Color(to)

    let amount = 0
    let intervalHandle = setInterval(() => {
        amount += 0.01

        devices.forEach(device => {
            let color = Color.mix(initalColor, finalColor, amount)

            debug(color)
            device.color = color.rgb

            if (amount <= 1) {
                clearInterval(intervalHandle)
                callback()
            }
        })
    }, 100)

    return {
        stop: () => clearInterval(intervalHandle)
    }
}

module.exports = fadeColor