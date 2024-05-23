import { TChain } from "../../../types";

export const chainName: TChain = {
  id: 0, // chain id
  name: "chain-name", // chain name
  type: "mainnet", // chain type: "mainnet" or "testnet"
  icon: "https://<icon-url>", // public rpc url
  rpc: "https://<rpc-url>", // public rpc url
  pricesFromTimestamp: 0, // timestamp to get prices from
  tokens: [
    {
      code: "ETH", // native token symbol
      icon: "https://<icon-url>", // token icon
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1, // chain id
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH", // redstone token id
    },
    {
      code: "ETH", // native token symbol
      icon: "https://<icon-url>", // token icon
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1, // chain id
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "ETH", // redstone token id
    },
    {
      code: "WETH", // ERC-20 token symbol
      icon: "https://<icon-url>", // token icon
      address: "0x1234567890123456789012345678901234567890", // token address
      decimals: 18,
      priceSource: {
        chainId: 1, // chain id
        address: "0x1234567890123456789012345678901234567890", // token address
      },
      redstoneTokenId: "ETH",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3", // contract address of Registry
      fromBlock: 0, // block number
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1", // contract address of Allo
      fromBlock: 0, // block number
    },
  ],
};
