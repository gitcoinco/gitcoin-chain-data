import { TChain } from "../../../types";

export const lukso: TChain = {
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
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "LYX",
    },
    {
      code: "LYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "LYX",
    },
    {
      code: "WLYX",
      icon: "https://ipfs.io/ipfs/QmZvBXAuN56WkYYoJPpQRDzCesfTQ1VQSKnTBxUqf1CzoJ",
      address: "0x2db41674f2b882889e5e1bd09a3f3613952bc472",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 42,
        address: "0x2db41674f2b882889e5e1bd09a3f3613952bc472",
      },
      redstoneTokenId: "LYX",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 2400000,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0xB087535DB0df98fC4327136e897A5985E5Cfbd66",
      fromBlock: 2400000,
    },
  ],
};
