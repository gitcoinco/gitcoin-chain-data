import { TChain } from "../../../types";
import { luksoIcon } from "../../icons";

export const lukso: TChain = {
  id: 42,
  name: "lukso-mainnet",
  prettyName: "LUKSO",
  type: "mainnet",
  blockExplorer: "https://explorer.execution.mainnet.lukso.network/",
  icon: luksoIcon,
  rpc: "https://42.rpc.thirdweb.com",
  pricesFromTimestamp: 1704164777,
  maxGetLogsRange: 0,
  contracts: {
    multiRoundCheckout: "0x029dFAf686DfA0efdace5132ba422e9279D50b5b",
    quadraticFunding: "0x91b5eeE385D8e0cfd49FD94D4C7aE15e1F17e0A2",
    directGrants: "0xdA62767Da1402398d81C8288b37DE1CC8C8fDcA0",
  },
  tokens: [
    {
      code: "LYX",
      icon: luksoIcon,
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
      icon: luksoIcon,
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
      icon: luksoIcon,
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
