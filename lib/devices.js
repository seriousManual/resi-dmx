const fivetwelve = require('fivetwelve/es5')
let DmxDevice = fivetwelve.DmxDevice

function initialize(output) {
    let device = new DmxDevice(1, {
        brightness: new fivetwelve.param.RangeParam(1),
        color: new fivetwelve.param.RgbParam([2,3,4])
    })

    device.setOutput(output)

    return [device]
}

module.exports = initialize