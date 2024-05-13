import {
  arbitrum,
  arbitrumSepolia,
  avalanche,
  avalancheFuji,
  base,
  baseSepolia,
  celo,
  celoAlfajores,
  fantom,
  lukso,
  luksoTestnet,
  mainnet,
  optimism,
  optimismSepolia,
  pgn,
  pgnTestnet,
  polygon,
  polygonAmoy,
  scroll,
  scrollSepolia,
  seiDevnet,
  sepolia,
  zkSync,
  zkSyncSepoliaTestnet,
} from "viem/chains";
import type { TTokenRecord } from "../types";
import axios from "axios";

// Tokens for each chain
export const tokens: TTokenRecord = {
  [mainnet.id]: [],
  [sepolia.id]: [],
  [optimism.id]: [],
  [optimismSepolia.id]: [],
  [base.id]: [],
  [baseSepolia.id]: [],
  [arbitrum.id]: [],
  [arbitrumSepolia.id]: [],
  [polygon.id]: [],
  [polygonAmoy.id]: [],
  [zkSync.id]: [],
  [zkSyncSepoliaTestnet.id]: [],
  [avalanche.id]: [],
  [avalancheFuji.id]: [],
  [scroll.id]: [],
  [scrollSepolia.id]: [],
  [seiDevnet.id]: [],
  [lukso.id]: [],
  [luksoTestnet.id]: [],
  [celo.id]: [],
  [celoAlfajores.id]: [],
  [fantom.id]: [],
  [pgn.id]: [],
  [pgnTestnet.id]: [],
};

export const fetchTokens = async (): Promise<TTokenRecord | null> => {
  // Initialize a default empty response or your preferred default structure
  let tokens: TTokenRecord | null = null;

  try {
    const response = await axios.get(
      "https://gitcoinco.github.io/static-data/tokens/tokens.json"
    );

    tokens = response.data; // Assuming the API returns data that matches TTokenRecord
    console.log("Fetching tokens response", {
      response: tokens,
    });
  } catch (error) {
    console.error("Error fetching tokens", error);
    return tokens; // This can be null or a default value if that's more appropriate
  }

  return tokens;
};
