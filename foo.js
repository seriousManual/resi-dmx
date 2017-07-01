const Color = require('fivetwelve/lib-es5/util/color')

let foo = new Color('#f00')
let bar = new Color('#00f')

console.log(Color.mix(foo, bar, 0.9));