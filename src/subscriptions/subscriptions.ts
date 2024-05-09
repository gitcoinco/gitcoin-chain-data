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
import type { TSubscriptionRecord } from "../types";

export const subscriptions: TSubscriptionRecord = {
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

export const fetchSubscriptions = async (): Promise<TSubscriptionRecord> => {
  // Fetch subscriptions from the server
  const response = await fetch(
    `https://grants-stack-indexer-v2.gitcoin.co/api/v2
    }/subscriptions`
  );

  console.log("Fetching subscriptions response", response);

  return subscriptions;
};
