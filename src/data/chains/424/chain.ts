import { TChain } from "../../../types";

export const pgnMainnet: TChain = {
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
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH",
    },
    {
      code: "ETH",
      icon: "https://ipfs.io/ipfs/QmdPgVsrQAYJyDmrs17QTawu95z4gbaKGAwmBu73JFZc2f",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH",
    },
    {
      code: "GTC",
      icon: "https://ipfs.io/ipfs/Qmb9q9uW29Vw2jbV7pyHg3HGUJMoKsHaPvbrC8iX15QLZf",
      address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
      },
      redstoneTokenId: "GTC",
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x6C121674ba6736644A7e73A8741407fE8a5eE5BA",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      },
      redstoneTokenId: "DAI",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 31239,
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x8AdFcF226dfb2fA73788Ad711C958Ba251369cb3",
      fromBlock: 31239,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x2AFA4bE0f2468347A2F086c2167630fb1E58b725",
      fromBlock: 31239,
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x27efa1C90e097c980c669AB1a6e326AD4164f1Cb",
      fromBlock: 31239,
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x0c33c9dEF7A3d9961b802C6C6402d306b7D48135",
      fromBlock: 31239,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 31239,
    },
  ],
};
