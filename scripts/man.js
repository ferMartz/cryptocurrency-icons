'use strict';
const man = require('../manifesto.json');
const fs = require('fs');
const path = require('path');
const extract = require('extract-svg-path');

const arr = [
    'ABT',
    'ADX',
    'AE',
    'AMP',
    'ANT',
    'APEX',
    'ARDR',
    'AUTO',
    'BDL',
    'BOS',
    'BQ',
    'BTC',
    'BTX',
    'CENZ',
    'CHAT',
    'CRW',
    'CS',
    'DCN',
    'DCR',
    'DGB',
    'DGD',
    'DOGE',
    'DTR',
    'EDG',
    'EMC',
    'ETC',
    'ETH',
    'ETP',
    'EXP',
    'FAIR',
    'FCT',
    'FSN',
    'GAS',
    'GNO',
    'GNT',
    'GRC',
    'GRS',
    'ICN',
    'KCS',
    'LKK',
    'LTC',
    'MCAP',
    'MCO',
    'MED',
    'MIOTA',
    'MITH',
    'MLN',
    'MZC',
    'NAV',
    'NEBL',
    'NEO',
    'NLG',
    'NMC',
    'NXS',
    'NTX',
    'OMG',
    'PART',
    'POT',
    'PPC',
    'PURA',
    'QTUM',
    'RDD',
    'REP',
    'RLC',
    'RVN',
    'SC',
    'SLR',
    'SNGLS',
    'STEM',
    'STORJ',
    'STRAT',
    'UBQ',
    'USDT',
    'VET',
    'VTC',
    'WAN',
    'XCP',
    'XEM',
    'XMR',
    'XPA',
    'XTZ',
    'XZC',
    'ZEC'
];
const mydata = {};

Object.entries(man).forEach(function(key) {
    // console.log(key[1].symbol.toLowerCase())
    const lower = key[1].symbol.toLowerCase()
    const filename = `${lower}.svg`;
    const svgPath = path.resolve(__dirname, '../svg/black/', filename);
    const d   = extract(svgPath);
    var fill = "";
    
    arr.map(m=>{
        if(key[1].symbol === m){
            fill = "evenodd"
        } 
        mydata[key[1].symbol] = {
            id: key[1].id,
            symbol: key[1].symbol,
            name: key[1].name,
            color: key[1].color,
            fillRule: fill,
            d: d
            
        };
    })
    
	return mydata ;
   
});

const data = JSON.stringify(mydata, null, '\t') + '\n';
fs.writeFileSync(path.resolve(__dirname, '../manifestox.json'), data);
// console.log(data)