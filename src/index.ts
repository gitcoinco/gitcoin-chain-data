import { fetchChainData, fetchChainDataById } from "./chains/chains";
import type { TChainRecord, TTokenRecord } from "./types";

/**
 * Get all networks and their data.
 *
 * @returns All supported networks and data.
 */
export const getChains = async () => {
  return await fetchChainData();
};

/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns
 */
export const getChain = async (chainId: number) => {
  return await fetchChainDataById(chainId);
};

/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns
 */
export const getTokensByChainId = async (chainId: number) => {
  const chainData: TChainRecord = await fetchChainDataById(chainId);

  const tokens: TTokenRecord = {
    payout: [],
    indexer: [],
    donation: [],
  };

  chainData?.forEach((chain) => {
    tokens.payout.push(...chain.tokens.payout);
    tokens.indexer.push(...chain.tokens.indexer);
    tokens.donation.push(...chain.tokens.donation);
  });

  return tokens;
};

/**
 * Get all subscriptions
 *
 * @returns All subscriptions for all supported networks.
 */
export const getSubscriptions = async () => {
  const chainData: TChainRecord = await fetchChainData();
  const subs = chainData.map((chain) => chain.subscriptions);

  return subs.flat();
};

/**
 * Get all subscriptions for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns
 */
export const getSubscriptionsByChainId = async (chainId: number) => {
  const chain = await fetchChainDataById(chainId);

  return chain.map((c) => c.subscriptions).flat();
};

// fetchChainData();
fetchChainDataById(1);
