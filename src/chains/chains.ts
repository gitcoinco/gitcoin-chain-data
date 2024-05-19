import type { TChainRecord, TTokenRecord } from "../types";
import axios from "axios";

/**
 * Fetch chains for all supported networks.
 *
 * @returns `Promise<TChainRecord>`
 */
export const fetchChainData = async (): Promise<TChainRecord> => {
  /** Initialize a default empty response or your preferred default structure */
  let chains: TChainRecord;

  try {
    const response = await axios.get(
      "https://gitcoinco.github.io/chain-data/chains/chains.json"
    );

    chains =
      response.data; /** Assuming the API returns data that matches TChainRecord */
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return []; /** This can be null or a default value if that's more appropriate */
  }
};

/**
 * Fetch a specific chains data by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChainRecord>`
 */
export const fetchChainDataById = async (
  chainId: number
): Promise<TChainRecord> => {
  /** Initialize a default empty response or preferred default structure */
  let chains: TChainRecord;

  try {
    const response = await axios.get(
      `https://gitcoinco.github.io/chain-data/chains/${chainId}/chain.json`
    );

    chains =
      response.data; /** Assuming the API returns data that matches TChainRecord */
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return []; /** This can be null or a default value if that's more appropriate */
  }
};

export const getChains = async () => {
  return await fetchChainData();
};

/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChainRecord>`
 */
export const getChain = async (chainId: number) => {
  return await fetchChainDataById(chainId);
};

/**
 *
 * @returns `Promise<TTokenRecord>`
 */
// todo: implement this function
// export const getTokens = async () => {
//   const chains = await fetchChainData();
//   const tokens: TTokenRecord[] = [
//     {
//       payout: [],
//       indexer: [],
//       donation: [],
//     },
//   ];

//   chains.forEach((chain) => {
//     tokens.push(...chain.tokens);
//   });
//   return tokens;
// };

/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TTokenRecord>`
 */
export const getTokensByChainId = async (chainId: number) => {
  const chainData: TChainRecord = await fetchChainDataById(chainId);

  const tokens: TTokenRecord = {
    payout: [],
    indexer: [],
    donation: [],
  };

  chainData?.forEach((chain) => {
    if (chain.id === chainId) {
      tokens.payout.push(...chain.tokens.payout);
      tokens.indexer.push(...chain.tokens.indexer);
      tokens.donation.push(...chain.tokens.donation);
    }
  });

  return tokens;
};

/**
 * Get all subscriptions
 *
 * @returns `Promise<(TSubscription | undefined)[]>`
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
 * @returns `Promise<(TSubscription | undefined)[]>`
 */
export const getSubscriptionsByChainId = async (chainId: number) => {
  const chain = await fetchChainDataById(chainId);

  return chain.map((c) => c.subscriptions).flat();
};
