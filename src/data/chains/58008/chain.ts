import { TChain } from "../../../types";
import { daiIcon, ethIcon, pgnIcon } from "../../icons";

export const pgnTestnet: TChain = {
  id: 58008,
  name: "pgn-testnet",
  prettyName: "PGN Testnet",
  type: "testnet",
  blockExplorer: "https://explorer.sepolia.publicgoods.network/",
  icon: pgnIcon,
  rpc: "https://sepolia.publicgoods.network",
  pricesFromTimestamp: 1683079577,
  tokens: [
    {
      code: "ETH",
      icon: "",
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
      icon: ethIcon,
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
      code: "DAI",
      icon: daiIcon,
      address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      },
      redstoneTokenId: "DAI",
    },
    {
      code: "TEST",
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      icon: "DAI",
      decimals: 18,
      canVote: false,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      },
      redstoneTokenId: "",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x6294bed5B884Ae18bf737793Ef9415069Bf4bc11",
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x0479b9DA9f287539FEBd597350B1eBaEBF7479ac",
      fromBlock: 0,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0xE8027a807Bb85e57da4B7A5ecE65b0aBDf231ce8",
      fromBlock: 0,
    },
  ],
};
