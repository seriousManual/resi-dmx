const fivetwelve = require('fivetwelve/es5')
const EnttecUsbProMk2Driver = require('fivetwelve-driver-usbpro/es5')
const SerialPort = require('serialport')

let fivetwelveInit = fivetwelve.default

function initialize() {
    let usbSerialPort = new SerialPort('COM5') //TODO: port discovery!
    let output = fivetwelveInit(new EnttecUsbProMk2Driver(usbSerialPort))

    output.start(30)

    return output
}

module.exports = initialize