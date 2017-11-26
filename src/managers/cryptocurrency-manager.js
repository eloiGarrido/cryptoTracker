'use strict';

const coinMarketCap = require('node-coinmarketcap');
const utils = require('../utils');

function getCurrentCurrencyPrice(coin, callback){
    if (utils.isNullOrUndefined(coin)){
        return null;
    }
    coinMarketCap.get(coin, (err, res)=>{
        if (err){
            return callback(err);
        }

        return res.price_usd;
    });
}

function getCurrencyInfo(coin, callback) {
    if (utils.isNullOrUndefined(coin)){
        return null;
    }
    coinMarketCap.get(coin, callback);
}

module.exports = {
    getCurrentCurrencyPrice: getCurrentCurrencyPrice,
    getCurrencyInfo : getCurrencyInfo
};