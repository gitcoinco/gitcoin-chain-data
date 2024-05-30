import { TChain } from "../../../types";
import { luksoIcon } from "../../icons";

export const luksoTestnet: TChain = {
  id: 4201,
  name: "lukso-testnet",
  prettyName: "LUKSO Testnet",
  type: "testnet",
  blockExplorer: "https://explorer.execution.testnet.lukso.network/",
  icon: luksoIcon,
  rpc: "https://4201.rpc.thirdweb.com",
  pricesFromTimestamp: 1704164777,
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
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 2500000,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 2500000,
    },
  ],
};
