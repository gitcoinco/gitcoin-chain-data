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

export const fetchTokens = async (): Promise<TTokenRecord> => {
  // Fetch tokens from the server
  const response = await fetch(
    `https://grants-stack-indexer-v2.gitcoin.co/api/v2}/tokens`
  );

  console.log("Fetching tokens response", response);

  return tokens;
};
