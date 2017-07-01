const express = require('express')

const dmxInit = require('./lib/dmx')
const devicesInit = require('./lib/devices')
const patterns = require('./lib/patterns')

const output = dmxInit()
const devices = devicesInit(output)

let currentPattern = patterns.default(devices)

express()
    .get('/pattern/:pattern', (req, res, next) => {
        let patternName = req.params.pattern

        currentPattern.stop()

        if (!patterns[patternName]) {
            return res.status(401).end(`pattern "${patternName}" not found`)
        }

        currentPattern = patterns[patternName](devices)

        res.end('running')
    })
    .listen(8080)