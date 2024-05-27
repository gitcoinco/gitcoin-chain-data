import { TChain } from "../../../types";

export const polygon: TChain = {
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
      priceSource: {
        chainId: 1,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      },
      redstoneTokenId: "MATIC",
    },
    {
      code: "MATIC",
      icon: "https://ipfs.io/ipfs/Qmcg4P1KcBQWYezSrV7KTCJxiq9a2aRtr1GBrXLAxNJqXy",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      },
      redstoneTokenId: "MATIC",
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      },
      redstoneTokenId: "USDC",
    },
    {
      code: "DATA",
      icon: "https://ipfs.io/ipfs/QmRy2AaexbGSXXct2N6Ph8DGgEXHRuT5bzE2snmZRBDtjQ",
      address: "0x3a9A81d576d83FF21f26f325066054540720fC34",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x8f693ca8d21b157107184d29d398a8d082b38b76",
      },
      redstoneTokenId: "DATA",
    },
    {
      code: "USDGLO",
      icon: "https://ipfs.io/ipfs/QmbZt8kxgqd1hHUBYv3jSLMXSVxZ4XzmQL2LToggfcuRzB",
      address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      decimals: 18,
      priceSource: {
        chainId: 10,
        address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      },
      redstoneTokenId: "USDGLO",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x5C5E2D94b107C7691B08E43169fDe76EAAB6D48b",
      fromBlock: 47215935,
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x5ab68dCdcA37A1C2b09c5218e28eB0d9cc3FEb03",
      fromBlock: 47215935,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xc1a26b0789C3E93b07713e90596Cad8d0442C826",
      fromBlock: 47215935,
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xD0e19DBF9b896199F35Df255A1bf8dB3C787531c",
      fromBlock: 47215935,
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xF2a07728107B04266015E67b1468cA0a536956C8",
      fromBlock: 47215935,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xF7c101A95Ea4cBD5DA0Ab9827D7B2C9857440143",
      fromBlock: 47215935,
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 49466006,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 49467628,
    },
  ],
};
