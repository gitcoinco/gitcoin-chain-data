"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenByChainIdAndAddress = exports.getTokensByChainId = exports.getTokens = exports.getChainById = exports.getChains = void 0;
var chains_1 = require("viem/chains");
var fs = require("fs");
var path = require("path");
var chainImportMap_1 = require("./chainImportMap");
var supportedChainIds = [
    chains_1.mainnet.id,
    chains_1.sepolia.id,
    chains_1.lukso.id,
    chains_1.luksoTestnet.id,
    chains_1.polygon.id,
    chains_1.polygonMumbai.id,
    chains_1.fantom.id,
    chains_1.zkSyncSepoliaTestnet.id,
    chains_1.zkSync.id,
    chains_1.base.id,
    chains_1.optimism.id,
    // optimismSepolia.id,
    chains_1.celo.id,
    chains_1.celoAlfajores.id,
    chains_1.arbitrum.id,
    // arbitrumSepolia.id,
    chains_1.avalanche.id,
    chains_1.avalancheFuji.id,
    chains_1.scroll.id,
    // scrollSepolia.id,
    chains_1.pgn.id,
    // pgnTestnet.id,
    chains_1.seiDevnet.id,
];
/**
 * Fetch chains for all supported networks.
 *
 * @returns `TChain`
 */
var fetchChainData = function () {
    /** Initialize a default empty response or your preferred default structure */
    var chains = [];
    for (var _i = 0, supportedChainIds_1 = supportedChainIds; _i < supportedChainIds_1.length; _i++) {
        var chainId = supportedChainIds_1[_i];
        var response = void 0;
        try {
            // Fetch the chain data from the import map
            response = chainImportMap_1.default[chainId];
            if (!response) {
                throw new Error("Chain data not found for chainId: ".concat(chainId));
            }
        }
        catch (error) {
            console.error("Error fetching chains", error);
            return []; // Return an empty array in case of an error
        }
        chains.push(response);
        console.log("Fetching chains response", {
            response: chains,
        });
    }
    return chains;
};
/**
 * Fetch a specific chains data by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
var fetchChainDataById = function (chainId) {
    /** Initialize a default empty response or preferred default structure */
    var chain;
    try {
        var filePath = path.join(__dirname, "../dist/data/chains/".concat(chainId, "/chain.json"));
        var fileContent = fs.readFileSync(filePath, "utf-8");
        chain = JSON.parse(fileContent);
        console.log("Fetching chains response", {
            response: chain,
        });
        return chain;
    }
    catch (error) {
        console.error("Error fetching chains", error);
        return {}; /** This can be null or a default value if that's more appropriate */
    }
};
/**
 * Get all supported chains
 *
 * @returns `TChain`
 */
var getChains = function () {
    return fetchChainData();
};
exports.getChains = getChains;
/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
var getChainById = function (chainId) {
    return fetchChainDataById(chainId);
};
exports.getChainById = getChainById;
/**
 *
 * @returns `TToken`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `TToken]>`
 */
var getTokens = function () {
    try {
        var chains_3 = fetchChainData();
        var tokens = [];
        for (var _i = 0, chains_2 = chains_3; _i < chains_2.length; _i++) {
            var chain = chains_2[_i];
            if (chain.tokens && chain.tokens.length > 0) {
                tokens.push.apply(tokens, chain.tokens);
            }
            else {
                console.warn("Chain ".concat(chain.name, " does not have a valid tokens array."));
            }
        }
        return tokens;
    }
    catch (error) {
        console.error("Error fetching chain data:", error);
        throw error; // Rethrow the error after logging it
    }
};
exports.getTokens = getTokens;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TToken`
 */
var getTokensByChainId = function (chainId) {
    var chainData = fetchChainDataById(chainId);
    var tokens = [];
    if (chainData) {
        tokens.push.apply(tokens, chainData.tokens);
    }
    return tokens;
};
exports.getTokensByChainId = getTokensByChainId;
/**
 * Get all supported tokens for a specific chain by its ID and address
 *
 * @param chainId The ID of the network to fetch data for.
 * @param address The address of the token to fetch.
 * @returns `TToken`
 */
var getTokenByChainIdAndAddress = function (chainId, address) {
    var chainData = fetchChainDataById(chainId);
    var token;
    if (chainData) {
        token = chainData.tokens.find(function (token) { return token.address === address; });
    }
    return token;
};
exports.getTokenByChainIdAndAddress = getTokenByChainIdAndAddress;
var chains = fetchChainData();
console.log("Fetched chains:", chains);
