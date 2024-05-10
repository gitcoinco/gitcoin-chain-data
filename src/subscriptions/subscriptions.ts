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
import axios from "axios";

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

export const fetchSubscriptions =
  async (): Promise<TSubscriptionRecord | null> => {
    // Initialize a default empty response or your preferred default structure
    let subscriptions: TSubscriptionRecord | null = null;

    try {
      const response = await axios.get(
        "http://localhost:8080/api/v2/subscriptions"
      );

      subscriptions = response.data; // Assuming the API returns data that matches TSubscriptionRecord
      console.log("Fetching subscriptions response", {
        response: subscriptions,
      });
    } catch (error) {
      console.error("Error fetching subscriptions", error);
      return subscriptions; // This can be null or a default value if that's more appropriate
    }

    return subscriptions;
  };
