'use strict';
const fs = require('fs');
const path = require('path');
const coins = require('coinlist');
const getColors = require('get-svg-colors');
const alphaSort = require('alpha-sort');
const manifest = require('../manifest.json');
const extract = require('extract-svg-path');


const overrides = new Map([
	['VRSC', 'VerusCoin'],
	['GMR', 'Gimmer'],
	['NEXO', 'Nexo'],
	['GUSD', 'Gemini dollar'],
	['CALL', 'Capital'],
	['BOS', 'BOScoin'],
	['CIX', 'Cryptonetix'],
	['COQUI', 'COQUI Cash'],
	['DEEZ', 'DeezNuts'],
	['MZC', 'MAZA'],
	['CVC', 'Civic'],
	['BTM', 'Bitmark'],
	['GLXT', 'GLX Token'],
	['ONG', 'SoMee.Social'],
	['CC', 'CoinCollect'],
	['2GIVE', '2Give'],
	['BOOTY', 'Booty'],
	['PUNGO', 'Pungo Token'],
	['X', 'GLX Equity Token'],
	['AYWA', 'Aywa'],
	['CHAIN', 'Chainmakers'],
	['LPT', 'Livepeer Token'],
	['AUDR', 'AUDRamp'],
	['BAB', 'Bitcoin Cash ABC'],
	['BSV', 'BitcoinSV'],
	['GOLD', 'Dragonereum Gold'],
	['USDC', 'USD Coin'],
	['AEUR', 'Augmint Euro Token'],
	['BCIO', 'Blockchain.io'],
	['BEAM', 'Beam'],
	['BTT', 'BitTorrent'],
	['GRIN', 'Grin'],
	['ILK', 'Inlock Token'],
	['BTM', 'Bytom'],
	['D', 'Denarius'],
	['BTCD', 'BitcoinDark'],
	['CMT', 'Comet'],
	['CTR', 'Centra'],
	['HSR', 'HShare'],
	['ICN', 'Iconomi'],
	['IOST', 'IOStoken'],
	['PRL', 'Oyster'],
	['RCN', 'Rcoin'],
	['REN', 'Ren'],
	['RYO', 'Ryo Currency'],
	['SKY', 'Skycoin'],
	['XVC', 'Vcash'],
	['MATIC', 'Matic Network']
]);
const mydata = {};
const icons = manifest.map((icon,x) => {
	const id = typeof icon === 'string' ? icon : icon.symbol;
	const filename = `${id.toLowerCase()}.svg`;
	const svgPath = path.resolve(__dirname, '../svg/color/', filename);
	const svg = fs.readFileSync(svgPath, 'utf8');
	const fillColor = getColors(svg).fills[0];
    const d   = extract(svgPath);
    

	if (!fillColor) {
		throw new Error(`Couldn't get color for \`${id}\``);
	}
    mydata[id.toUpperCase()] = {
        id: x + 1,
		symbol: id.toUpperCase(),
		name: overrides.get(id) || coins.get(id, 'name') || id,
		color: fillColor.hex().toLowerCase(),
        d: d
	};
	return mydata ;
});

// mydata.sort((a, b) => alphaSort.asc(a.symbol, b.symbol));

const data = JSON.stringify(mydata, null, '\t') + '\n';

fs.writeFileSync(path.resolve(__dirname, '../manifesto.json'), data);
// console.log(data)
