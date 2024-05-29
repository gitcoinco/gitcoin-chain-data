import { TChain } from "../../../types";

export const avalancheFuji: TChain = {
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
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "AVAX",
    },
    {
      code: "AVAX",
      icon: "https://ipfs.io/ipfs/QmfUQj2Rz1kvRZmBDHAfSaGx9rxsD5D1YjaXXdmZpE4JWe",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 43114,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "AVAX",
    },
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      },
      redstoneTokenId: "USDC",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0xDF9BF58Aa1A1B73F0e214d79C652a7dd37a6074e",
      fromBlock: 25380385,
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x8eC471f30cA797FD52F9D37A47Be2517a7BD6912",
      fromBlock: 25380385,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x2AFA4bE0f2468347A2F086c2167630fb1E58b725",
      fromBlock: 25380385,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x862D7F621409cF572f179367DdF1B7144AcE1c76",
      fromBlock: 25380385,
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 25380385,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 25380385,
    },
  ],
};
