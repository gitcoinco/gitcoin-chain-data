import { TChain } from "../../../types";

export const celoTestnet: TChain = {
  id: 44787,
  name: "celo-testnet",
  type: "testnet",
  icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
  rpc: "https://alfajores-forno.celo-testnet.org",
  pricesFromTimestamp: 1704164777,
  tokens: [
    {
      code: "CELO",
      icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 42220,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "CELO",
    },
    {
      code: "CELO",
      icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 42220,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "CELO",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 23061115,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 23061115,
    },
  ],
};
