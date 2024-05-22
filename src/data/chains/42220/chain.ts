import { TChain } from "../../../types";

export const celoMainnet: TChain = {
  id: 42220,
  name: "celo-mainnet",
  icon: "https://ipfs.io/ipfs/QmQ16s5NLSQCRpaETRqBAq93hWU8nuDebZMT5D4JhQumf6",
  rpc: "https://forno.celo.org",
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
    {
      code: "CUSD",
      icon: "https://ipfs.io/ipfs/QmRxcma8Q1545Hcw6K7Z3gwS63FsZQieuGG7uQxeG8vHXS",
      address: "0x765de816845861e75a25fca122bb6898b8b1282a",
      decimals: 18,
      priceSource: {
        chainId: 42220,
        address: "0x765de816845861e75a25fca122bb6898b8b1282a",
      },
      redstoneTokenId: "CSDC",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 25005539,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 25005539,
    },
  ],
};
