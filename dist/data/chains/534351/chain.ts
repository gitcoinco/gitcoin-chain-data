import { TChain } from "../../../types";

export const scrollSepolia: TChain = {
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
    {
      code: "MTK",
      icon: "",
      address: "0xc2332031de487f430fae3290c05465d907785eda",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      },
      redstoneTokenId: "MTK",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xA78Daa89fE9C1eC66c5cB1c5833bC8C6Cb307918",
      fromBlock: 2774478,
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xF2a07728107B04266015E67b1468cA0a536956C8",
      fromBlock: 2774478,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x545B282A50EaeA01A619914d44105437036CbB36",
      fromBlock: 2774478,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 2774478,
    },
  ],
};
