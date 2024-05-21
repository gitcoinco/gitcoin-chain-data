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

// src/data/chains/1/chain.ts
var mainnet = {
  id: 1,
  name: "mainnet",
  icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
  rpc: "https://mainnet.infura.io/v3/",
  pricesFromTimestamp: 1667354777,
  maxGetLogsRange: 0,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: "DAI"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "CVP",
      icon: "",
      address: "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1"
      },
      redstoneTokenId: "CVP"
    },
    {
      code: "mkUSD",
      icon: "",
      address: "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28"
      },
      redstoneTokenId: "mkUSD"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x03506eD3f57892C85DB20C36846e9c808aFe9ef4"
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x9Cb7f434aD3250d1656854A9eC7A71EceC6eE1EF",
      fromBlock: 16994474
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x4a850F463D1C4842937c5Bc9540dBc803D744c9F",
      fromBlock: 16994526
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x8F8d78f119Aa722453d33d6881f4D400D67D054F",
      fromBlock: 16994526
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 16994526
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x56296242CA408bA36393f3981879fF9692F193cC",
      fromBlock: 16994451
    },
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3",
      fromBlock: 18486688
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 18486975
    }
  ]
};

// src/data/chains/10/chain.ts
var optimism = {
  id: 10,
  name: "optimism",
  icon: "https://ipfs.io/ipfs/QmZzq5SpFNGJr9DTgaUck9iBVAWRpNnJVndTxgTGbrrZn2",
  rpc: "https://opt-mainnet.g.alchemy.com/v2/",
  pricesFromTimestamp: 1667354777,
  maxGetLogsRange: 0,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      decimals: 6,
      priceSource: {
        chainId: 10,
        address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
      },
      redstoneTokenId: "DAI"
    },
    {
      code: "USDGLO",
      icon: "https://ipfs.io/ipfs/QmbZt8kxgqd1hHUBYv3jSLMXSVxZ4XzmQL2LToggfcuRzBg",
      address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3"
      },
      redstoneTokenId: "USDGLO"
    },
    {
      code: "GIST",
      icon: "",
      address: "0x93a5347036f69bc6f37ed2b59cbcdda927719217",
      decimals: 18,
      voteAmountCap: BigInt("1000000000000000000"),
      priceSource: {
        chainId: 10,
        address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
      },
      redstoneTokenId: "GIST"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "OP",
      icon: "https://ipfs.io/ipfs/QmZzq5SpFNGJr9DTgaUck9iBVAWRpNnJVndTxgTGbrrZn2",
      address: "0x4200000000000000000000000000000000000042",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0x4200000000000000000000000000000000000042"
      },
      redstoneTokenId: "OP"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174"
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x04E753cFB8c8D1D7f776f7d7A033740961b6AEC2",
      fromBlock: 87169287
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x838C5e10dcc1e54d62761d994722367BA167AC22",
      fromBlock: 87168143
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xB5365543cdDa2C795AD104F4cB784EF3DB1CD383",
      fromBlock: 87168143
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x2Bb670C3ffC763b691062d671b386E51Cf1840f0",
      fromBlock: 87168143
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xd5Fb00093Ebd30011d932cB69bb6313c550aB05f",
      fromBlock: 87162429
    },
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3",
      fromBlock: 111678968
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 111680064
    }
  ]
};

// src/data/chains/42/chain.ts
var lukso = {
  id: 42,
  name: "lukso-mainnet",
  icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
  rpc: "https://42.rpc.thirdweb.com",
  pricesFromTimestamp: 1704164777,
  maxGetLogsRange: 0,
  tokens: [
    {
      code: "LYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 42,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "LYX"
    },
    {
      code: "LYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 42,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "LYX"
    },
    {
      code: "WLYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0x2db41674f2b882889e5e1bd09a3f3613952bc472",
      decimals: 18,
      priceSource: {
        chainId: 42,
        address: "0x2db41674f2b882889e5e1bd09a3f3613952bc472"
      },
      redstoneTokenId: "LYX"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 24e5
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0xB087535DB0df98fC4327136e897A5985E5Cfbd66",
      fromBlock: 24e5
    }
  ]
};

// src/data/chains/137/chain.ts
var polygon = {
  id: 137,
  name: "polygon",
  icon: "https://ipfs.io/ipfs/Qmcg4P1KcBQWYezSrV7KTCJxiq9a2aRtr1GBrXLAxNJqXy",
  rpc: "https://polygon-rpc.com",
  pricesFromTimestamp: 1692497177,
  maxGetLogsRange: 0,
  tokens: [
    {
      code: "MATIC",
      icon: "https://ipfs.io/ipfs/Qmcg4P1KcBQWYezSrV7KTCJxiq9a2aRtr1GBrXLAxNJqXy",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
      },
      redstoneTokenId: "MATIC"
    },
    {
      code: "MATIC",
      icon: "https://ipfs.io/ipfs/Qmcg4P1KcBQWYezSrV7KTCJxiq9a2aRtr1GBrXLAxNJqXy",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
      },
      redstoneTokenId: "MATIC"
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "DATA",
      icon: "https://ipfs.io/ipfs/QmRy2AaexbGSXXct2N6Ph8DGgEXHRuT5bzE2snmZRBDtjQ",
      address: "0x3a9A81d576d83FF21f26f325066054540720fC34",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x8f693ca8d21b157107184d29d398a8d082b38b76"
      },
      redstoneTokenId: "DATA"
    },
    {
      code: "USDGLO",
      icon: "https://ipfs.io/ipfs/QmbZt8kxgqd1hHUBYv3jSLMXSVxZ4XzmQL2LToggfcuRzB",
      address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3"
      },
      redstoneTokenId: "USDGLO"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x5C5E2D94b107C7691B08E43169fDe76EAAB6D48b",
      fromBlock: 47215935
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x5ab68dCdcA37A1C2b09c5218e28eB0d9cc3FEb03",
      fromBlock: 47215935
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xc1a26b0789C3E93b07713e90596Cad8d0442C826",
      fromBlock: 47215935
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xD0e19DBF9b896199F35Df255A1bf8dB3C787531c",
      fromBlock: 47215935
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xF2a07728107B04266015E67b1468cA0a536956C8",
      fromBlock: 47215935
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xF7c101A95Ea4cBD5DA0Ab9827D7B2C9857440143",
      fromBlock: 47215935
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 49466006
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 49467628
    }
  ]
};

// src/data/chains/250/chain.ts
var fantom = {
  id: 250,
  name: "fantom",
  icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
  rpc: "https://rpcapi.fantom.network",
  pricesFromTimestamp: 1667354777,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      decimals: 6,
      priceSource: {
        chainId: 250,
        address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "BUSD",
      address: "0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50",
      decimals: 18,
      icon: "BUSD",
      priceSource: {
        chainId: 250,
        address: "0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50"
      },
      redstoneTokenId: "BUSD"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      decimals: 18,
      priceSource: {
        chainId: 250,
        address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E"
      },
      redstoneTokenId: "DAI"
    },
    {
      code: "FTM",
      icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 250,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "FTM"
    },
    {
      code: "FTM",
      icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "FTM"
    },
    {
      code: "GcV",
      icon: "https://ipfs.io/ipfs/QmX2KeJ9xd3RWc4HxGVUWmyq4ELT2z4kJekfv4AgZqp6dz",
      address: "0x83791638da5EB2fAa432aff1c65fbA47c5D29510",
      decimals: 18,
      voteAmountCap: BigInt("1000000000000000000"),
      priceSource: {
        chainId: 250,
        address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E"
      },
      redstoneTokenId: "GcV"
    },
    {
      code: "WFTM",
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      decimals: 18,
      icon: "FTM",
      priceSource: {
        chainId: 250,
        address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
      },
      redstoneTokenId: "FTM"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174",
      fromBlock: 65169115
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xfb08d1fD3a7c693677eB096E722ABf4Ae63B0B95",
      fromBlock: 66509340
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x534d2AAc03dCd0Cb3905B591BAf04C14A95426AB",
      fromBlock: 66509340
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xFA1D9FF7F885757fc20Fdd9D78B72F88B00Cff77",
      fromBlock: 66509340
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x9B1Ee60B539a3761E328a621A3d980EE9385679a",
      fromBlock: 66509340
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x4d1f64c7920262c8F78e989C9E7Bf48b7eC02Eb5",
      fromBlock: 65169115
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 77624278
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 77624963
    }
  ]
};

// src/data/chains/300/chain.ts
var zksyncEraTestnet = {
  id: 300,
  name: "zksync-era-testnet",
  icon: "https://ipfs.io/ipfs/Qmd6x7q8ug4e32BKWVMEWfTGdcownpAz74LMZuFHfg7Wet",
  rpc: "https://sepolia.era.zksync.dev",
  pricesFromTimestamp: 1701486377,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    }
  ],
  subscriptions: [
    {
      address: "0xb0F4882184EB6e3ed120c5181651D50719329788",
      contractName: "AlloV1/ProjectRegistry/V2"
    },
    {
      address: "0x0Bb6e2dfEaef0Db5809B3979717E99e053Cbae72",
      contractName: "AlloV1/RoundFactory/V2",
      fromBlock: 1441e4
    },
    {
      address: "0x8c28F21D2d8C53eedC58bF9cdCfb7DCF7d809d97",
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      fromBlock: 1441e4
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xbA160C13F8F626e3232078aDFD6eD2f2B2289563",
      fromBlock: 1441e4
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x4170665B31bC10009f8a69CeaACf3265C3d66797",
      fromBlock: 1441e4
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x6D341814Be4E2316142D9190E390b494F1dECFAf",
      fromBlock: 14412765
    },
    {
      contractName: "AlloV2/Registry/V1",
      address: "0xaa376Ef759c1f5A8b0B5a1e2FEC5C23f3bF30246",
      fromBlock: 14412765
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x9D1D1BF2835935C291C0f5228c86d5C4e235A249",
      fromBlock: 14412765
    }
  ]
};

// src/data/chains/324/chain.ts
var zkSyncEraMainnet = {
  id: 324,
  name: "zksync-era-mainnet",
  icon: "https://ipfs.io/ipfs/Qmd6x7q8ug4e32BKWVMEWfTGdcownpAz74LMZuFHfg7Wet",
  rpc: "https://mainnet.era.zksync.io",
  pricesFromTimestamp: 1701486377,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "USDT",
      icon: "https://ipfs.io/ipfs/QmTDFjdejwv6gGXYUu8VbTw2eCjPhhJ217VM4vpXiSu5Xx",
      address: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      },
      redstoneTokenId: "USDT"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x4B9eb6c0b6ea15176BBF62841C6B2A8a398cb656",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: "DAI"
    },
    {
      code: "LUSD",
      icon: "https://ipfs.io/ipfs/QmaPosCSRnPjmjP6ekQtE2RXgv1MFy1eQSDyfPeuA6oSgw",
      address: "0x503234F203fC7Eb888EEC8513210612a43Cf6115",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0"
      },
      redstoneTokenId: "LUSD"
    },
    {
      code: "MUTE",
      icon: "https://ipfs.io/ipfs/QmeHDSK2cKXhnAFzMCRh9UP7VSJpuv4ENagugisM757vYs",
      address: "0x0e97c7a0f8b2c9885c8ac9fc6136e829cbc21d42",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0xa49d7499271ae71cd8ab9ac515e6694c755d400c"
      },
      redstoneTokenId: "MUTE"
    }
  ],
  subscriptions: [
    {
      address: "0xe6CCEe93c97E20644431647B306F48e278aFFdb9",
      contractName: "AlloV1/ProjectRegistry/V2",
      fromBlock: 209e5
    },
    {
      address: "0xF3B5a0d59C6292BD0e4f8Cf735EEF52b98f428E6",
      contractName: "AlloV1/RoundFactory/V2",
      fromBlock: 209e5
    },
    {
      address: "0x94cB638556d3991363102431d8cE9e839C734677",
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      fromBlock: 209e5
    },
    {
      address: "0x41A8F19C6CB88C9Cc98d29Cb7A4015629910fFc0",
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      fromBlock: 209e5
    },
    {
      address: "0x0ccdfCB7e5DB60AAE5667d1680B490F7830c49C8",
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      fromBlock: 209e5
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x68a14AF71BFa0FE09fC937033f6Ea5153c0e75e4",
      fromBlock: 20907048
    },
    {
      contractName: "AlloV2/Registry/V1",
      address: "0xaa376Ef759c1f5A8b0B5a1e2FEC5C23f3bF30246",
      fromBlock: 31154341
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x9D1D1BF2835935C291C0f5228c86d5C4e235A249",
      fromBlock: 31154408
    }
  ]
};

// src/data/chains/424/chain.ts
var pgnMainnet = {
  id: 424,
  name: "pgn-mainnet",
  icon: "https://ipfs.io/ipfs/Qmagrvn2SY5TEoLgqUtcc1745ABZTFoPmod37tW37u7HYo",
  rpc: "https://rpc.publicgoods.network",
  pricesFromTimestamp: 1683079577,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "GTC",
      icon: "https://ipfs.io/ipfs/Qmb9q9uW29Vw2jbV7pyHg3HGUJMoKsHaPvbrC8iX15QLZf",
      address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f"
      },
      redstoneTokenId: "GTC"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x6C121674ba6736644A7e73A8741407fE8a5eE5BA",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: "DAI"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 31239
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x8AdFcF226dfb2fA73788Ad711C958Ba251369cb3",
      fromBlock: 31239
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x2AFA4bE0f2468347A2F086c2167630fb1E58b725",
      fromBlock: 31239
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x27efa1C90e097c980c669AB1a6e326AD4164f1Cb",
      fromBlock: 31239
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x0c33c9dEF7A3d9961b802C6C6402d306b7D48135",
      fromBlock: 31239
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 31239
    }
  ]
};

// src/data/chains/4201/chain.ts
var luksoTestnet = {
  id: 4201,
  name: "lukso-testnet",
  icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
  rpc: "https://4201.rpc.thirdweb.com",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "LYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 42,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "LYX"
    },
    {
      code: "LYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 42,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "LYX"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 25e5
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 25e5
    }
  ]
};

// src/chains/chainImportMap.ts
var chainImportMap = {
  1: {
    ...mainnet
  },
  10: {
    ...optimism
  },
  42: {
    ...lukso
  },
  137: {
    ...polygon
  },
  250: {
    ...fantom
  },
  300: {
    ...zksyncEraTestnet
  },
  324: {
    ...zkSyncEraMainnet
  },
  424: {
    ...pgnMainnet
  },
  4201: {
    ...luksoTestnet
  }
};
var chainImportMap_default = chainImportMap;

// src/chains/chains.ts
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
  let chains2 = [];
  for (const chainId of supportedChainIds) {
    let response;
    try {
      response = chainImportMap_default[chainId];
      if (!response) {
        throw new Error(`Chain data not found for chainId: ${chainId}`);
      }
    } catch (error) {
      console.error("Error fetching chains", error);
      return [];
    }
    chains2.push(response);
    console.log("Fetching chains response", {
      response: chains2
    });
  }
  return chains2;
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
    const chains2 = fetchChainData();
    const tokens = [];
    for (const chain of chains2) {
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
var chains = fetchChainData();
console.log("Fetched chains:", chains);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getChainById,
  getChains,
  getTokenByChainIdAndAddress,
  getTokens,
  getTokensByChainId
});
//# sourceMappingURL=index.js.map