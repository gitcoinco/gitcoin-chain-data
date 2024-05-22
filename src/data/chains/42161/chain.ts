import { TChain } from "../../../types";

export const arbitrum: TChain = {
  id: 42161,
  name: "arbitrum",
  icon: "https://ipfs.io/ipfs/QmZcLbB9U1VEdY8eXkW14CHhL21WVbJSUQ5s1dDTb1MSwJ",
  rpc: "https://arb-mainnet.g.alchemy.com/v2/",
  pricesFromTimestamp: 1688263577,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      decimals: 6,
      priceSource: {
        chainId: 42161,
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      },
      redstoneTokenId: "USDC",
    },
    {
      code: "ARB",
      icon: "",
      address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
      decimals: 18,
      priceSource: {
        chainId: 42161,
        address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
      },
      redstoneTokenId: "ARB",
    },
    {
      code: "USDGLO",
      icon: "https://ipfs.io/ipfs/QmbZt8kxgqd1hHUBYv3jSLMXSVxZ4XzmQL2LToggfcuRzB",
      address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      decimals: 18,
      priceSource: {
        chainId: 42161,
        address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
      },
      redstoneTokenId: "USDGLO",
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 42161,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH",
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 42161,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH",
    },
    {
      code: "GTC",
      icon: "https://ipfs.io/ipfs/Qmb9q9uW29Vw2jbV7pyHg3HGUJMoKsHaPvbrC8iX15QLZf",
      address: "0x7f9a7db853ca816b9a138aee3380ef34c437dee0",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
      },
      redstoneTokenId: "GTC",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x73AB205af1476Dc22104A6B8b3d4c273B58C6E27",
      fromBlock: 123566896,
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xF2a07728107B04266015E67b1468cA0a536956C8",
      fromBlock: 123566896,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xC3A195EEa198e74D67671732E1B8F8A23781D735",
      fromBlock: 123566896,
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x04b194b14532070F5cc8D3A760c9a0957D85ad5B",
      fromBlock: 123566896,
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xc1a26b0789C3E93b07713e90596Cad8d0442C826",
      fromBlock: 123566896,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 123566896,
    },
    {
      contractName: "AlloV2/AlloV1ToV2ProfileMigration",
      address: "0x1bFda15Ad5FC82E74Da81F0B8DcA486b3Ad14c71",
      fromBlock: 191943906,
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 146489425,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 146498081,
    },
  ],
};
