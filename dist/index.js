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
  getChain: () => getChain,
  getChains: () => getChains,
  getTokens: () => getTokens,
  getTokensByChainId: () => getTokensByChainId
});
module.exports = __toCommonJS(src_exports);

// src/chains/chains.ts
var import_axios = __toESM(require("axios"));
var fetchChainData = async () => {
  let chains = [];
  try {
    const response = await import_axios.default.get(
      "https://gitcoinco.github.io/chain-data/chains/chains.json"
    );
    chains = response.data;
    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);
    return [];
  }
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
var getChain = async (chainId) => {
  return await fetchChainDataById(chainId);
};
var getTokens = async () => {
  const chains = await fetchChainData();
  const tokens = [];
  chains.forEach((chain) => {
    tokens.push(...chain.tokens);
  });
  return tokens;
};
var getTokensByChainId = async (chainId) => {
  const chainData = await fetchChainDataById(chainId);
  const tokens = [];
  if (chainData) {
    tokens.push(...chainData.tokens);
  }
  return tokens;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getChain,
  getChains,
  getTokens,
  getTokensByChainId
});
//# sourceMappingURL=index.js.map