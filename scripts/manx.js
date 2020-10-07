'use strict';
const man = require('../manifestox.json');
const manx = require('../man.json');
const fs = require('fs');
const path = require('path');
// const extract = require('extract-svg-path');

const arr = [
    '$PAC',   'AGI',  'AION',
    'AMPL',   'BZE',   'CIX',
     'CNX',  'DRGN',   'DTR',
     'ELA',  'ELIX',  'EMC2',
     'ETC',   'ETH', 'ETHOS',
     'HPB',   'INS', 'KLOWN',
     'KMD',   'LEO',  'MAID',
   'MATIC',   'MOD',   'MTH',
    'PINK',   'RDD',   'REQ',
     'SIN',   'UBQ', 'UNITY',
   'WINGS',   'WTC',   'ZIL'
 ];
const mydata = {};

Object.entries(man).forEach(function(key) {
   
    if(arr.includes(key[1].symbol)){
      mydata[key[1].symbol] = manx[key[1].symbol]
       
    } else {
        var fill = key[1].fillRule;
        var x;
       if(fill === ""){
           x = [{d:key[1].d}]
       } else {
           x = [{d:key[1].d,fillRule:fill}]
       }
        mydata[key[1].symbol] = {
            id: key[1].id,
            symbol: key[1].symbol,
            name: key[1].name,
            color: key[1].color,
            blueprint: ["p"],
            d: x
            
        };
    }

    
	return mydata ;
   
});



const data = JSON.stringify(mydata, null, '\t') + '\n';
fs.writeFileSync(path.resolve(__dirname, '../manifestoxx.json'), data);
// console.log(mydata);