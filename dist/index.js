"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getChainById: () => getChainById,
  getChains: () => getChains,
  getTokens: () => getTokens,
  getTokensByChainId: () => getTokensByChainId,
  getTokensByChainIdAndAddress: () => getTokensByChainIdAndAddress
});
module.exports = __toCommonJS(src_exports);

// src/chains/chains.ts
var import_chains = require("viem/chains");
var import_axios = __toESM(require("axios"));
var supportedChainIds = [
  // mainnet.id,
  import_chains.sepolia.id
  // lukso.id,
  // luksoTestnet.id,
  // polygon.id,
  // polygonMumbai.id,
  // fantom.id,
  // zkSyncSepoliaTestnet.id,
  // zkSync.id,
  // base.id,
  // optimism.id,
  // optimismSepolia.id,
  // celo.id,
  // celoAlfajores.id,
  // avalanche.id,
  // avalancheFuji.id,
  // scroll.id,
  // scrollSepolia.id,
  // pgn.id,
  // pgnTestnet.id,
];
var fetchChainData = async () => {
  let chains = [];
  for (const chainId of supportedChainIds) {
    let response;
    try {
      response = await import_axios.default.get(
        `https://gitcoinco.github.io/chain-data/chains/${chainId}/chain.json`
      );
    } catch (error) {
      console.error("Error fetching chains", error);
      return [];
    }
    chains.push(response.data);
    console.log("Fetching chains response", {
      response: chains
    });
  }
  return chains;
};
var fetchChainDataById = async (chainId) => {
  let chains;
  try {
    const response = await import_axios.default.get(
      `https://gitcoinco.github.io/chain-data/chains/${chainId}/chain.json`
    );
    chains = response.data;
    console.log("Fetching chains response", {
      response: chains
    });
    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);
    return {};
  }
};
var getChains = async () => {
  return await fetchChainData();
};
var getChainById = async (chainId) => {
  return await fetchChainDataById(chainId);
};
var getTokens = async () => {
  try {
    const chains = await fetchChainData();
    const tokens = [];
    for (const chain of chains) {
      if (chain.tokens && chain.tokens.length > 0) {
        tokens.push(...chain.tokens);
      } else {
        console.warn(`Chain ${chain.name} does not have a valid tokens array.`);
      }
    }
    return tokens;
  } catch (error) {
    console.error("Error fetching chain data:", error);
    throw error;
  }
};
var getTokensByChainId = async (chainId) => {
  const chainData = await fetchChainDataById(chainId);
  const tokens = [];
  if (chainData) {
    tokens.push(...chainData.tokens);
  }
  return tokens;
};
var getTokensByChainIdAndAddress = async (chainId, address) => {
  const chainData = await fetchChainDataById(chainId);
  let token;
  if (chainData) {
    token = chainData.tokens.find((token2) => token2.address === address);
  }
  return token;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getChainById,
  getChains,
  getTokens,
  getTokensByChainId,
  getTokensByChainIdAndAddress
});
//# sourceMappingURL=index.js.map