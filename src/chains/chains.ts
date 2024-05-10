import { mainnet } from "viem/chains";
import type { TChainRecord } from "../types";
import axios from "axios";

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

export const fetchChains = async (): Promise<TChainRecord | null> => {
  // Initialize a default empty response or your preferred default structure
  let chains: TChainRecord | null = null;

  try {
    const response = await axios.get("http://localhost:8080/api/v2/chains");

    chains = response.data; // Assuming the API returns data that matches TChainRecord
    console.log("Fetching chains response", {
      response: chains,
    });
  } catch (error) {
    console.error("Error fetching chains", error);
    return chains; // This can be null or a default value if that's more appropriate
  }

  return chains;
};