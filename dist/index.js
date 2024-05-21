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
  getTokenByChainIdAndAddress: () => getTokenByChainIdAndAddress,
  getTokens: () => getTokens,
  getTokensByChainId: () => getTokensByChainId
});
module.exports = __toCommonJS(src_exports);

// src/chains/chains.ts
var import_chains = require("viem/chains");
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var supportedChainIds = [
  import_chains.mainnet.id,
  import_chains.sepolia.id,
  import_chains.lukso.id,
  import_chains.luksoTestnet.id,
  import_chains.polygon.id,
  import_chains.polygonMumbai.id,
  import_chains.fantom.id,
  import_chains.zkSyncSepoliaTestnet.id,
  import_chains.zkSync.id,
  import_chains.base.id,
  import_chains.optimism.id,
  // optimismSepolia.id,
  import_chains.celo.id,
  import_chains.celoAlfajores.id,
  import_chains.arbitrum.id,
  // arbitrumSepolia.id,
  import_chains.avalanche.id,
  import_chains.avalancheFuji.id,
  import_chains.scroll.id,
  // scrollSepolia.id,
  import_chains.pgn.id,
  // pgnTestnet.id,
  import_chains.seiDevnet.id
];
var fetchChainData = () => {
  let chains = [];
  for (const chainId of supportedChainIds) {
    let response;
    try {
      const filePath = path.join(
        __dirname,
        `../dist/data/chains/${chainId}/chain.json`
      );
      const fileContent = fs.readFileSync(filePath, "utf-8");
      response = JSON.parse(fileContent);
    } catch (error) {
      console.error("Error fetching chains", error);
      return [];
    }
    chains.push(response);
    console.log("Fetching chains response", {
      response: chains
    });
  }
  return chains;
};
var fetchChainDataById = (chainId) => {
  let chain;
  try {
    const filePath = path.join(
      __dirname,
      `../dist/data/chains/${chainId}/chain.json`
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    chain = JSON.parse(fileContent);
    console.log("Fetching chains response", {
      response: chain
    });
    return chain;
  } catch (error) {
    console.error("Error fetching chains", error);
    return {};
  }
};
var getChains = () => {
  return fetchChainData();
};
var getChainById = (chainId) => {
  return fetchChainDataById(chainId);
};
var getTokens = () => {
  try {
    const chains = fetchChainData();
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
var getTokensByChainId = (chainId) => {
  const chainData = fetchChainDataById(chainId);
  const tokens = [];
  if (chainData) {
    tokens.push(...chainData.tokens);
  }
  return tokens;
};
var getTokenByChainIdAndAddress = (chainId, address) => {
  const chainData = fetchChainDataById(chainId);
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
  getTokenByChainIdAndAddress,
  getTokens,
  getTokensByChainId
});
//# sourceMappingURL=index.js.map