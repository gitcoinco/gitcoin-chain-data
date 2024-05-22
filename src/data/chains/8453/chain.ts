import { TChain } from "../../../types";

export const base: TChain = {
  id: 8453,
  name: "base",
  icon: "https://ipfs.io/ipfs/QmQaAsfJpUuKmpX3eJEzgdZjqqFWmWHXnDy3MpPVJyDzcj",
  rpc: "https://mainnet.base.org/",
  pricesFromTimestamp: 1701486377,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
      redstoneTokenId: "USDC",
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
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
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH",
    },
  ],
  subscriptions: [
    {
      address: "0xA78Daa89fE9C1eC66c5cB1c5833bC8C6Cb307918",
      contractName: "AlloV1/ProjectRegistry/V2",
      fromBlock: 7151900,
    },
    {
      address: "0xc7722909fEBf7880E15e67d563E2736D9Bb9c1Ab",
      contractName: "AlloV1/RoundFactory/V2",
      fromBlock: 7151900,
    },
    {
      address: "0xC3A195EEa198e74D67671732E1B8F8A23781D735",
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      fromBlock: 7151900,
    },
    {
      address: "0xF7c101A95Ea4cBD5DA0Ab9827D7B2C9857440143",
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      fromBlock: 7152110,
    },
    {
      address: "0x74c3665540FC8B92Dd06a7e56a51eCa038C18180",
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      fromBlock: 7151900,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 7151884,
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 6083365,
    },
    {
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      contractName: "AlloV2/Allo/V1",
      fromBlock: 6084909,
    },
  ],
};
