import { mainnet } from "viem/chains";
import type { TChainRecord } from "../types";

export const chains: TChainRecord = [
  {
    ...mainnet,
    // Note: fetch the following from the api.
    ...{
      rpc: "https://mainnet.infura.io/v3/your-api-key",
      id: mainnet.id,
      name: mainnet.name,
      pricesFromTimestamp: Date.UTC(2023, 8, 19, 0, 0, 0),
      tokens: [], // Add this line
      subscriptions: [], // Add this line
    },
  },
  // sepolia,
  // optimism,
  // optimismSepolia,
  // base,
  // baseSepolia,
  // arbitrum,
  // arbitrumSepolia,
  // polygon,
  // polygonAmoy,
  // zkSync,
  // zkSyncSepoliaTestnet,
  // avalanche,
  // avalancheFuji,
  // scroll,
  // scrollSepolia,
  // seiDevnet,
  // lukso,
  // luksoTestnet,
  // celo,
  // celoAlfajores,
  // fantom,
  // pgn,
  // pgnTestnet,
];

export const fetchChains = async (): Promise<TChainRecord> => {
  // Fetch chains from the server
  const response = await fetch(
    `https://grants-stack-indexer-v2.gitcoin.co/api/v2}/chains`
  );

  console.log("Fetching chains response", response);

  return chains;
};
