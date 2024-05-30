"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

// src/data/chains/1/chain.ts
var mainnet = {
  id: 1,
  name: "mainnet",
  type: "mainnet",
  blockExplorer: "https://etherscan.io/",
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: false,
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
      canVote: false,
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
  type: "mainnet",
  blockExplorer: "https://optimistic.etherscan.io/",
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
      canVote: true,
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
      canVote: true,
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
      canVote: false,
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
      canVote: false,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
  type: "mainnet",
  blockExplorer: "https://explorer.execution.mainnet.lukso.network/",
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
  type: "mainnet",
  blockExplorer: "https://polygonscan.com/",
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: false,
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
      canVote: false,
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
  type: "mainnet",
  blockExplorer: "https://ftmscan.com/",
  icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
  rpc: "https://rpcapi.fantom.network",
  pricesFromTimestamp: 1667354777,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      decimals: 6,
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: false,
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
      canVote: true,
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
  type: "testnet",
  blockExplorer: "https://sepolia.explorer.zksync.io/",
  icon: "https://ipfs.io/ipfs/Qmd6x7q8ug4e32BKWVMEWfTGdcownpAz74LMZuFHfg7Wet",
  rpc: "https://sepolia.era.zksync.dev",
  pricesFromTimestamp: 1701486377,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
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
  type: "mainnet",
  blockExplorer: "https://explorer.zksync.io/",
  icon: "https://ipfs.io/ipfs/Qmd6x7q8ug4e32BKWVMEWfTGdcownpAz74LMZuFHfg7Wet",
  rpc: "https://mainnet.era.zksync.io",
  pricesFromTimestamp: 1701486377,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: false,
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
  type: "mainnet",
  blockExplorer: "https://explorer.publicgoods.network/",
  icon: "https://ipfs.io/ipfs/Qmagrvn2SY5TEoLgqUtcc1745ABZTFoPmod37tW37u7HYo",
  rpc: "https://rpc.publicgoods.network",
  pricesFromTimestamp: 1683079577,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
      canVote: true,
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
  type: "testnet",
  blockExplorer: "https://explorer.execution.testnet.lukso.network/",
  icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
  rpc: "https://4201.rpc.thirdweb.com",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "LYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
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

// src/data/chains/8453/chain.ts
var base = {
  id: 8453,
  name: "base",
  type: "mainnet",
  blockExplorer: "https://basescan.org/",
  icon: "https://ipfs.io/ipfs/QmQaAsfJpUuKmpX3eJEzgdZjqqFWmWHXnDy3MpPVJyDzcj",
  rpc: "https://mainnet.base.org/",
  pricesFromTimestamp: 1701486377,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    }
  ],
  subscriptions: [
    {
      address: "0xA78Daa89fE9C1eC66c5cB1c5833bC8C6Cb307918",
      contractName: "AlloV1/ProjectRegistry/V2",
      fromBlock: 7151900
    },
    {
      address: "0xc7722909fEBf7880E15e67d563E2736D9Bb9c1Ab",
      contractName: "AlloV1/RoundFactory/V2",
      fromBlock: 7151900
    },
    {
      address: "0xC3A195EEa198e74D67671732E1B8F8A23781D735",
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      fromBlock: 7151900
    },
    {
      address: "0xF7c101A95Ea4cBD5DA0Ab9827D7B2C9857440143",
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      fromBlock: 7152110
    },
    {
      address: "0x74c3665540FC8B92Dd06a7e56a51eCa038C18180",
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      fromBlock: 7151900
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 7151884
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 6083365
    },
    {
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      contractName: "AlloV2/Allo/V1",
      fromBlock: 6084909
    }
  ]
};

// src/data/chains/42161/chain.ts
var arbitrum = {
  id: 42161,
  name: "arbitrum",
  type: "mainnet",
  blockExplorer: "https://arbiscan.io/",
  icon: "https://ipfs.io/ipfs/QmZcLbB9U1VEdY8eXkW14CHhL21WVbJSUQ5s1dDTb1MSwJ",
  rpc: "https://arb-mainnet.g.alchemy.com/v2/",
  pricesFromTimestamp: 1688263577,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 42161,
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
      },
      redstoneTokenId: "USDC"
    },
    {
      code: "ARB",
      icon: "",
      address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42161,
        address: "0x912ce59144191c1204e64559fe8253a0e49e6548"
      },
      redstoneTokenId: "ARB"
    },
    {
      code: "USDGLO",
      icon: "https://ipfs.io/ipfs/QmbZt8kxgqd1hHUBYv3jSLMXSVxZ4XzmQL2LToggfcuRzB",
      address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      decimals: 18,
      canVote: false,
      priceSource: {
        chainId: 42161,
        address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3"
      },
      redstoneTokenId: "USDGLO"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42161,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42161,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "GTC",
      icon: "https://ipfs.io/ipfs/Qmb9q9uW29Vw2jbV7pyHg3HGUJMoKsHaPvbrC8iX15QLZf",
      address: "0x7f9a7db853ca816b9a138aee3380ef34c437dee0",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f"
      },
      redstoneTokenId: "GTC"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x73AB205af1476Dc22104A6B8b3d4c273B58C6E27",
      fromBlock: 123566896
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xF2a07728107B04266015E67b1468cA0a536956C8",
      fromBlock: 123566896
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xC3A195EEa198e74D67671732E1B8F8A23781D735",
      fromBlock: 123566896
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x04b194b14532070F5cc8D3A760c9a0957D85ad5B",
      fromBlock: 123566896
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xc1a26b0789C3E93b07713e90596Cad8d0442C826",
      fromBlock: 123566896
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 123566896
    },
    {
      contractName: "AlloV2/AlloV1ToV2ProfileMigration",
      address: "0x1bFda15Ad5FC82E74Da81F0B8DcA486b3Ad14c71",
      fromBlock: 191943906
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 146489425
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 146498081
    }
  ]
};

// src/data/chains/42220/chain.ts
var celoMainnet = {
  id: 42220,
  name: "celo-mainnet",
  type: "mainnet",
  blockExplorer: "https://celoscan.io/",
  icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
  rpc: "https://forno.celo.org",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "CELO",
      icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42220,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "CELO"
    },
    {
      code: "CELO",
      icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42220,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "CELO"
    },
    {
      code: "CUSD",
      icon: "https://ipfs.io/ipfs/QmRxcma8Q1545Hcw6K7Z3gwS63FsZQieuGG7uQxeG8vHXS",
      address: "0x765de816845861e75a25fca122bb6898b8b1282a",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42220,
        address: "0x765de816845861e75a25fca122bb6898b8b1282a"
      },
      redstoneTokenId: "CSDC"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 25005539
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 25005539
    }
  ]
};

// src/data/chains/43113/chain.ts
var avalancheFuji = {
  id: 43113,
  name: "avalanche-fuji",
  type: "testnet",
  blockExplorer: "https://fuji.avascan.info/",
  icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
  rpc: "https://avalanche-fuji-c-chain.publicnode.com",
  pricesFromTimestamp: 1692497177,
  tokens: [
    {
      code: "AVAX",
      icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 43114,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "AVAX"
    },
    {
      code: "AVAX",
      icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 43114,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "AVAX"
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      redstoneTokenId: "USDC"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 25380385
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x8eC471f30cA797FD52F9D37A47Be2517a7BD6912",
      fromBlock: 25380385
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x2AFA4bE0f2468347A2F086c2167630fb1E58b725",
      fromBlock: 25380385
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x862D7F621409cF572f179367DdF1B7144AcE1c76",
      fromBlock: 25380385
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 25380385
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 25380385
    }
  ]
};

// src/data/chains/43114/chain.ts
var avalanche = {
  id: 43114,
  name: "avalanche",
  type: "mainnet",
  blockExplorer: "https://avascan.info/",
  icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
  rpc: "https://rpc.ankr.com/avalanche",
  pricesFromTimestamp: 1692497177,
  tokens: [
    {
      code: "AVAX",
      icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 43114,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "AVAX"
    },
    {
      code: "AVAX",
      icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 43114,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "AVAX"
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      redstoneTokenId: "USDC"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 34540051
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x8eC471f30cA797FD52F9D37A47Be2517a7BD6912",
      fromBlock: 34540051
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x2AFA4bE0f2468347A2F086c2167630fb1E58b725",
      fromBlock: 34540051
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x27efa1C90e097c980c669AB1a6e326AD4164f1Cb",
      fromBlock: 34540051
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x8AdFcF226dfb2fA73788Ad711C958Ba251369cb3",
      fromBlock: 34540051
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 34540051
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 34540051
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 34540051
    }
  ]
};

// src/data/chains/44787/chain.ts
var celoTestnet = {
  id: 44787,
  name: "celo-testnet",
  type: "testnet",
  blockExplorer: "https://alfajores.celoscan.io/",
  icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
  rpc: "https://alfajores-forno.celo-testnet.org",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "CELO",
      icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42220,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "CELO"
    },
    {
      code: "CELO",
      icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42220,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "CELO"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 23061115
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 23061115
    }
  ]
};

// src/data/chains/58008/chain.ts
var pgnTestnet = {
  id: 58008,
  name: "pgn-testnet",
  type: "testnet",
  blockExplorer: "https://explorer.sepolia.publicgoods.network/",
  icon: "https://ipfs.io/ipfs/Qmagrvn2SY5TEoLgqUtcc1745ABZTFoPmod37tW37u7HYo",
  rpc: "https://sepolia.publicgoods.network",
  pricesFromTimestamp: 1683079577,
  tokens: [
    {
      code: "ETH",
      icon: "",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: "DAI"
    },
    {
      code: "TEST",
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      icon: "DAI",
      decimals: 18,
      canVote: false,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: ""
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x6294bed5B884Ae18bf737793Ef9415069Bf4bc11"
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x0479b9DA9f287539FEBd597350B1eBaEBF7479ac",
      fromBlock: 0
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xE8027a807Bb85e57da4B7A5ecE65b0aBDf231ce8",
      fromBlock: 0
    }
  ]
};

// src/data/chains/80001/chain.ts
var polygonMumbai = {
  id: 80001,
  name: "polygon-mumbai",
  type: "testnet",
  blockExplorer: "https://mumbai.polygonscan.com/",
  icon: "https://ipfs.io/ipfs/",
  rpc: "https://rpc-mumbai.maticvigil.com/",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "MATIC",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
      },
      redstoneTokenId: "MATIC"
    },
    {
      code: "MATIC",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
      },
      redstoneTokenId: "MATIC"
    },
    {
      code: "USDC",
      address: "0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      redstoneTokenId: "USDC"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x545B282A50EaeA01A619914d44105437036CbB36",
      fromBlock: 39793132
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xE1c5812e9831bc1d5BDcF50AAEc1a47C4508F3fA",
      fromBlock: 39793132
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xF7c101A95Ea4cBD5DA0Ab9827D7B2C9857440143",
      fromBlock: 39793132
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xc1a26b0789C3E93b07713e90596Cad8d0442C826",
      fromBlock: 39793132
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xD9B7Ce1F68A93dF783A8519ed52b74f5DcF5AFE1",
      fromBlock: 39793132
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 39793132
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 41939383
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 41940805
    }
  ]
};

// src/data/chains/534351/chain.ts
var scrollSepolia = {
  id: 534351,
  name: "scroll-sepolia",
  type: "testnet",
  blockExplorer: "https://sepolia.scrollscan.com",
  icon: "https://ipfs.io/ipfs/QmYRA5tXMmGxhw7HUNdr9DYN2GRX3MnLoJVweeWKgfxBZX",
  rpc: "https://sepolia-rpc.scroll.io",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "MTK",
      icon: "",
      address: "0xc2332031de487f430fae3290c05465d907785eda",
      decimals: 18,
      canVote: false,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: "MTK"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xA78Daa89fE9C1eC66c5cB1c5833bC8C6Cb307918",
      fromBlock: 2774478
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xF2a07728107B04266015E67b1468cA0a536956C8",
      fromBlock: 2774478
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x545B282A50EaeA01A619914d44105437036CbB36",
      fromBlock: 2774478
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 2774478
    }
  ]
};

// src/data/chains/534352/chain.ts
var scrollMainnet = {
  id: 534352,
  name: "scroll-mainnet",
  type: "mainnet",
  blockExplorer: "https://scrollscan.com/",
  icon: "https://ipfs.io/ipfs/QmYRA5tXMmGxhw7HUNdr9DYN2GRX3MnLoJVweeWKgfxBZX",
  rpc: "https://rpc.scroll.io",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
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
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      redstoneTokenId: "USDC"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x29aAF7D4E83A778DAee08Fe04B0712c4C2989AD1",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x5b55728e41154562ee80027C1247B13382692e5C",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x545B282A50EaeA01A619914d44105437036CbB36",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xc7722909fEBf7880E15e67d563E2736D9Bb9c1Ab",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x7ac74Be34b1A27E48a2525259719F877a57B2Aa4",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x5b55728e41154562ee80027C1247B13382692e5C",
      fromBlock: 2683205
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 2683205
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 2683205
    }
  ]
};

// src/data/chains/713715/chain.ts
var seiDevnet = {
  id: 713715,
  name: "sei-devnet",
  type: "testnet",
  blockExplorer: "https://seitrace.com/?chain=arctic-1",
  icon: "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5",
  rpc: "https://evm-rpc-arctic-1.sei-apis.com",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "SEI",
      icon: "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 713715,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "SEI"
    },
    {
      code: "SEI",
      icon: "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 713715,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "SEI"
    },
    {
      code: "WSEI",
      icon: "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5",
      address: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 713715,
        address: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330"
      },
      redstoneTokenId: "SEI"
    }
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 14660337
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 14661917
    }
  ]
};

// src/data/chains/11155111/chain.ts
var sepolia = {
  id: 11155111,
  name: "sepolia",
  type: "testnet",
  blockExplorer: "https://sepolia.etherscan.io/",
  icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
  rpc: "https://ethereum-sepolia.publicnode.com",
  pricesFromTimestamp: 1667354777,
  tokens: [
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x8db0F9eE54753B91ec1d81Bf68074Be82ED30fEb",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      redstoneTokenId: "DAI"
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0xa9dd7983B57E1865024d27110bAB098B66087e8F",
      decimals: 18,
      canVote: true,
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
      canVote: true,
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
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000"
      },
      redstoneTokenId: "ETH"
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x78e0D07C4A08adFfe610113310163b40E7e47e81",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      redstoneTokenId: "USDC"
    }
  ],
  subscriptions: [
    {
      address: "0x2420EABfA2C0e6f77E435B0B7615c848bF4963AF",
      contractName: "AlloV1/ProjectRegistry/V2",
      fromBlock: 4738892
    },
    {
      address: "0xF1d4F5f21746bCD75fD71eB18992443f4F0edb6f",
      contractName: "AlloV1/RoundFactory/V2",
      fromBlock: 4738e3
    },
    {
      address: "0xf5D111B57de221774866AC32c4435841F5c141D5",
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      fromBlock: 4738e3
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xB5CF3fFD3BDfC6A124aa9dD96fE14118Ed8083e5",
      fromBlock: 4738e3
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xC2B0d8dAdB88100d8509534BB8B5778d1901037d",
      fromBlock: 4738e3
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x79Ba35cb31620db1b5b101A9A13A1b0A82B5BC9e",
      fromBlock: 4738e3
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 4617051
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 4617314
    },
    {
      contractName: "AlloV2/AlloV1ToV2ProfileMigration",
      address: "0xCd5AbD09ee34BA604795F7f69413caf20ee0Ab60",
      fromBlock: 5100681
    }
  ]
};

// src/chains/chainImports.ts
var chainImports = {
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
  },
  8453: {
    ...base
  },
  42161: {
    ...arbitrum
  },
  42220: {
    ...celoMainnet
  },
  43113: {
    ...avalancheFuji
  },
  43114: {
    ...avalanche
  },
  80001: {
    ...polygonMumbai
  },
  44787: {
    ...celoTestnet
  },
  58008: {
    ...pgnTestnet
  },
  534351: {
    ...scrollSepolia
  },
  534352: {
    ...scrollMainnet
  },
  713715: {
    ...seiDevnet
  },
  11155111: {
    ...sepolia
  }
};
var chainImports_default = chainImports;

// src/chains/index.ts
var getChains = () => {
  const chainIds = Object.keys(chainImports_default).map(Number);
  return chainIds.map((chainId) => chainImports_default[chainId]);
};
var getChainById = (chainId) => chainImports_default[chainId];
var getTokens = () => {
  try {
    const chains = getChains();
    const tokenMap = {};
    for (const chain of chains) {
      if (chain.tokens && chain.tokens.length > 0) {
        tokenMap[chain.id] = chain.tokens;
      } else {
        console.warn(`No tokens found for ${chain.name}.`);
      }
    }
    return tokenMap;
  } catch (error) {
    console.error("Error fetching chain data:", error);
    throw error;
  }
};
var getTokensByChainId = (chainId) => {
  const chainData = getChainById(chainId);
  return chainData ? [...chainData.tokens] : [];
};
var getTokenByChainIdAndAddress = (chainId, address) => {
  const chainData = getChainById(chainId);
  return chainData?.tokens.find((token) => token.address === address);
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