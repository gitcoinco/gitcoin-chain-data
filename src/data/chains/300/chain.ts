import { TChain } from "../../../types";

export const zksyncEraTestnet: TChain = {
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
  ],
  subscriptions: [
    {
      address: "0xb0F4882184EB6e3ed120c5181651D50719329788",
      contractName: "AlloV1/ProjectRegistry/V2",
    },
    {
      address: "0x0Bb6e2dfEaef0Db5809B3979717E99e053Cbae72",
      contractName: "AlloV1/RoundFactory/V2",
      fromBlock: 14410000,
    },
    {
      address: "0x8c28F21D2d8C53eedC58bF9cdCfb7DCF7d809d97",
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      fromBlock: 14410000,
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xbA160C13F8F626e3232078aDFD6eD2f2B2289563",
      fromBlock: 14410000,
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x4170665B31bC10009f8a69CeaACf3265C3d66797",
      fromBlock: 14410000,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x6D341814Be4E2316142D9190E390b494F1dECFAf",
      fromBlock: 14412765,
    },
    {
      contractName: "AlloV2/Registry/V1",
      address: "0xaa376Ef759c1f5A8b0B5a1e2FEC5C23f3bF30246",
      fromBlock: 14412765,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x9D1D1BF2835935C291C0f5228c86d5C4e235A249",
      fromBlock: 14412765,
    },
  ],
};
