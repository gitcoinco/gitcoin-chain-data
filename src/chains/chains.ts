import type { TChain, TToken } from "../types";
import chainImportMap from "./chainImportMap";
import { Address } from "viem";

/**
 * Fetch chains for all supported networks.
 *
 * @returns `TChain`
 */
export const getChains = (): TChain[] => {
  const chainIds = Object.keys(chainImportMap).map(Number);
  return chainIds.map(chainId => chainImportMap[chainId])
};


/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
export const getChainById = (chainId: number): TChain => chainImportMap[chainId];

/**
 *
 * @returns `TToken`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `Record<ChainId, TToken[]>`
 */
export const getTokens = (): Record<number, TToken[]> => {
  try {
    const chains = getChains();
    const tokenMap: Record<number, TToken[]> = {};

    for (const chain of chains) {
      if (chain.tokens && chain.tokens.length > 0) {
        tokenMap[chain.id] = chain.tokens;
      } else {
        console.warn(`No tokens found for ${chain.name}.`);
      }
    }

    return tokenMap;
  } catch (error) {
    console.error("Error fetching chain data:", error);
    throw error; // Rethrow the error after logging it
  }
};

/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TToken`
 */
export const getTokensByChainId = (chainId: number): TToken[] => {
  const chainData = getChainById(chainId);
  return chainData ? [...chainData.tokens] : [];
};

/**
 * Get all supported tokens for a specific chain by its ID and address
 *
 * @param chainId The ID of the network to fetch data for.
 * @param address The address of the token to fetch.
 * @returns `TToken`
 */
export const getTokenByChainIdAndAddress = (
  chainId: number,
  address: Address,
): TToken => {
  const chainData = getChainById(chainId);
  return chainData?.tokens.find((token) => token.address === address) as TToken;
};
