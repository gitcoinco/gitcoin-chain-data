// chainImportMap.ts
import { mainnet } from "../data/chains/1/chain.js";
import { optimism } from "../data/chains/10/chain.js";
import { lukso } from "../data/chains/42/chain.js";
import { polygon } from "../data/chains/137/chain.js";
import { fantom } from "../data/chains/250/chain.js";
import { zksyncEraTestnet } from "../data/chains/300/chain.js";
import { zkSyncEraMainnet } from "../data/chains/324/chain.js";
import { pgnMainnet } from "../data/chains/424/chain.js";
import { luksoTestnet } from "../data/chains/4201/chain.js";
// import { mainnet } from "../data/chains/8453/chain.js";
// import { mainnet } from "../data/chains/42161/chain.js";
// import { mainnet } from "../data/chains/42220/chain.js";
// import { mainnet } from "../data/chains/43113/chain.js";
// import { mainnet } from "../data/chains/43114/chain.js";
// import { mainnet } from "../data/chains/44787/chain.js";
// import { mainnet } from "../data/chains/58008/chain.js";
// import { mainnet } from "../data/chains/80001/chain.js";
// import { mainnet } from "../data/chains/534351/chain.js";
// import { mainnet } from "../data/chains/534352/chain.js";
// import { mainnet } from "../data/chains/713715/chain.js";
// import { mainnet } from "../data/chains/11155111/chain.js";
// import { mainnet } from "../data/chains/11155420/chain.js";

import { TChain } from "../types.js";
// Add other imports here

const chainImportMap: { [key: number]: TChain } = {
  1: {
    ...mainnet,
  },
  10: {
    ...optimism,
  },
  42: {
    ...lukso,
  },
  137: {
    ...polygon,
  },
  250: {
    ...fantom,
  },
  300: {
    ...zksyncEraTestnet,
  },
  324: {
    ...zkSyncEraMainnet,
  },
  424: {
    ...pgnMainnet,
  },
  4201: {
    ...luksoTestnet,
  },
};

export default chainImportMap;
