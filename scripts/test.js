'use strict';
const manifest = require('../manifesto.json');

const data = {};

manifest.map(i=>{
    var s = i.symbol
    data[s] = i
})
// Object.keys(manifest).forEach(function(key) {
//     var value = manifest[key];
//     var s = value.symbol
    
//     data.push(obj[s] = value)
    
//     // ...
// });

console.log(data);