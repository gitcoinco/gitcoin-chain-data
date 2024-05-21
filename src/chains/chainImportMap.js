"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// chainImportMap.ts
var chain_js_1 = require("../data/chains/1/chain.js");
var chain_js_2 = require("../data/chains/10/chain.js");
var chain_js_3 = require("../data/chains/42/chain.js");
var chain_js_4 = require("../data/chains/137/chain.js");
var chain_js_5 = require("../data/chains/250/chain.js");
var chain_js_6 = require("../data/chains/300/chain.js");
var chain_js_7 = require("../data/chains/324/chain.js");
var chain_js_8 = require("../data/chains/424/chain.js");
var chain_js_9 = require("../data/chains/4201/chain.js");
// Add other imports here
var chainImportMap = {
    1: __assign({}, chain_js_1.mainnet),
    10: __assign({}, chain_js_2.optimism),
    42: __assign({}, chain_js_3.lukso),
    137: __assign({}, chain_js_4.polygon),
    250: __assign({}, chain_js_5.fantom),
    300: __assign({}, chain_js_6.zksyncEraTestnet),
    324: __assign({}, chain_js_7.zkSyncEraMainnet),
    424: __assign({}, chain_js_8.pgnMainnet),
    4201: __assign({}, chain_js_9.luksoTestnet),
};
exports.default = chainImportMap;
